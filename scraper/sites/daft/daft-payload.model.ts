export interface DaftPayload {
  section: string,
  filters: Array<DaftPayloadFilter>,
  andFilters: [],
  ranges: [],
  paging: DaftPayloadPaging,
  geoFilter: DaftPayloadGeoFilter,
  terms: string
}

export interface DaftPayloadPaging {
  from: number,
  pageSize: number
}

export interface DaftPayloadFilter {
  name: string,
  values: Array<string>
}

export interface DaftPayloadGeoFilter {
  geoSearchType: "STORED_SHAPES"; // This indicates that we're using a stored shape
  storedShapeIds: ["22"]; // This appears to be Sligo
}