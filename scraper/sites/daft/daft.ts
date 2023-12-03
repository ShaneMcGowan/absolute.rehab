import { DaftResponse } from "./daft-response.model";
import { DaftConstants } from "./daft.constants";

const axios = require('axios')
const fs = require('fs');
const colors = require('colors');

const DATA = require('../../../data/raw/daft.json');

export class Daft {

  private static getRawData(from: number): Promise<any> {
    const data = {
      ...DaftConstants.PAYLOAD,
      paging: {
        from: from,
        pageSize: 50
      }
    };

    return axios({
      method: 'post',
      url: DaftConstants.API_URL,
      data: data,
      headers: {
        'brand': 'daft',
        'platform': 'web'
      }
    });
  }

  public static async getAllData() {
    // Get first data set
    console.log(colors.green(`[DAFT] making first request...`));
    const response = await this.getRawData(0);
    console.log(colors.green(`[DAFT] first request complete`));

    // Use first call to get pagination numbers
    const data = response.data as DaftResponse;
    console.log(colors.green(`[DAFT] total pages: ${data.paging.totalPages}`));

    // Use pagination numbers to create remaining requests
    console.log(colors.green(`[DAFT] creating requests...`));
    const requests = [];
    for (let i = 0; i < data.paging.totalPages; i++) {
      requests.push(this.getRawData(i * 50));
    }
    console.log(colors.green(`[DAFT] requests created`));

    // Call requests
    console.log(colors.green(`[DAFT] making bulk requests...`));
    Promise.all(requests).then(value => {
      console.log(colors.green(`[DAFT] bulk requests complete`));


      // Process response
      const data = value.map(v => v.data);
      console.log(colors.green(`[DAFT] starting writing listing file...`));
      const dataString = JSON.stringify(data);
      fs.writeFileSync('../data/raw/daft.json', dataString);
      console.log(colors.green(`[DAFT] writing listing file complete`));

    });

  }

  public static viewData(selectedCounty: string | undefined): void {
    // Write seller file
    console.log(colors.green(`[DAFT] starting writing seller file...`));
    // console.log(DATA_SELLER);

    const counties = {};

    DATA.forEach(values => {
      values.listings.forEach(l => {
        const listing = l.listing;

        const price = Daft.getMonthlyPrice(listing.price)

        // Co. counties
        let county = listing.title.match(/Co\.(.*)/);
        if (county !== null) {
          let countyString = county[1].trim().toLocaleLowerCase();;

          if (counties[countyString] === undefined) {
            counties[countyString] = [
              price
            ];
          } else {
            counties[countyString].push(price)
          }
          return;
        }

        // Dublin X
        county = listing.title.match(/Dublin \d{1,2}/);
        if (county !== null) {
          let countyString = county[0].trim().toLocaleLowerCase();
          if (counties[countyString] === undefined) {
            counties[countyString] = [
              price
            ];
          } else {
            counties[countyString].push(price)
          }
          return;
        }

        console.log(colors.yellow(`[address not handled] ${listing.title}`));
        /*
        console.log(`
        ${Daft.getMonthlyPrice(listing.price)} \n
        ${listing.propertyType} \n
        ${listing.category} \n
        ${county ? county[1] : 'ERROR'} \n
        \n
        `);
        */

      });
    });


    console.log(colors.green(`Stats for ${selectedCounty}`));
    console.log(colors.green(counties[selectedCounty]));
    console.log(
      colors.green(
        {
          count: counties[selectedCounty].length,
          averagePrice: counties[selectedCounty]
            .reduce((a, b) => { // sum all resulting numbers
              return a + b
            }) / counties[selectedCounty].length
        }
      )
    );
  }

  private static getMonthlyPrice(price: string): number {
    // remove symbol and white space
    price = price.replace('€', '');
    price = price.replace('From', '');

    // per month
    if (price.includes('per month')) {
      price = price.replace('per month', '');
      price = price.trim();
      price = price.replace(',', '');
      return parseInt(price);
    }

    // per week
    if (price.includes('per week')) {
      price = price.replace('per week', '');
      price = price.replace('From', '');
      price = price.replace(',', '');
      price = price.trim();

      let priceNumber = parseInt(price);
      // convert week to month
      priceNumber = ((priceNumber * 52.14) / 12);
      return priceNumber;
    }

    return 0;
  }

  public static processData(selectedCounty: string): void {

    console.log(colors.green(`[DAFT] starting processing data...`));

    const counties = {};

    DATA.forEach(values => {
      values.listings.forEach(l => {
        const listing = l.listing;

        // Co. counties
        let county = listing.title.match(/Co\.(.*)/);
        if (county !== null) {
          let countyString = county[1].trim().toLocaleLowerCase();;

          if (counties[countyString] === undefined) {
            counties[countyString] = [];
          } 

          counties[countyString].push({
            address: listing.title,
            price: Daft.getMonthlyPrice(listing.price).toFixed(0),
          });
          
          return;
        }

        /*
        // Dublin X
        county = listing.title.match(/Dublin \d{1,2}/);
        if (county !== null) {
          let countyString = county[0].trim().toLocaleLowerCase();
          if (counties[countyString] === undefined) {
            counties[countyString] = [
              price
            ];
          } else {
            counties[countyString].push(price)
          }
          return;
        }
        */

        console.log(colors.yellow(`[address not handled] ${listing.title}`));
        /*
        console.log(`
        ${Daft.getMonthlyPrice(listing.price)} \n
        ${listing.propertyType} \n
        ${listing.category} \n
        ${county ? county[1] : 'ERROR'} \n
        \n
        `);
        */

        

      });
    });

    console.log(colors.green());

    const dataString = JSON.stringify(counties[selectedCounty]);
    fs.writeFileSync('../data/daft.json', dataString);
  }

}