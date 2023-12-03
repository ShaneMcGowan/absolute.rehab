import { DaftPayload } from "./daft-payload.model";

export class DaftConstants {
  public static readonly API_URL: string = 'https://search-gateway.dsch.ie/v1/listings';
  public static readonly PAYLOAD: DaftPayload = {
    section: "residential-to-rent",
    filters: [
      {
        "name": "adState",
        "values": [
          "published"
        ]
      }
    ],
    andFilters: [],
    ranges: [],
    paging: {
      from: 0,
      pageSize: 50
    },
    geoFilter: {
      geoSearchType: "STORED_SHAPES",
      storedShapeIds: ["22"]
    },
    terms: ""
  }
}