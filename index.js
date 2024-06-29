(function() {
  loadFromWebsiteDaft();
})();

const SELECTORS = {
  daft: '#daft-total',
  daftLastUpdated: '#daft-last-updated',
  daftOutput: '#daft-output',
  myhome: '#myhome-total',
  myhomeLastUpdated: '#myhome-last-updated',
  myhomeOutput: '#myhome-output',
}

async function loadFromWebsiteDaft(){
  const response = await fetch('./data/daft.json');
  const data = await response.json();

  // parse data - TODO(smg): needs to be cleaned up
  data.lastUpdated = new Date(data.lastUpdated);

  // render to table
  document.querySelector(SELECTORS.daft).innerHTML = data.adverts.length;
  document.querySelector(SELECTORS.daftLastUpdated).innerHTML = data.lastUpdated.toLocaleString();

  // sort by price - highest to lowest
  let adverts = data.adverts.sort((a, b) => b.price - a.price);

  // render to list
  adverts.forEach((advert) => {
    document.querySelector(SELECTORS.daftOutput).innerHTML += `<li>€${advert.price} per month - ${advert.address} <a href="${advert.url}" target="_blank">View</a></li>`;
  });
}