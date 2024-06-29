export interface DaftResponse {
  breadcrumbs: any,
  canonicalUrl: string
  // dfpTargetingValues: { distilledBrand: ["daft"], section: ["residential-to-rent"], pageType: ["listings"], … }
  listings: Array<DaftListingResponse>,
  mapView: false,
  paging: DaftPaging,
  savedSearch: false
  showcaseListings: []
}

export interface DaftPaging {
  totalPages: number,
  currentPage: number,
  nextFrom: number,
  previousFrom: number,
  displayingFrom: number,
  displayingTo: number
}

export interface DaftListingResponse {
  listing: DaftListing,
  savedAd: boolean
}

export interface DaftListing {
  abbreviatedPrice: string,
  // ber: { rating: "A2A3" }
  category: string,
  daftShortcode: string,
  featuredLevel: string,
  id: number
  // media: {
  //   hasBrochure: false
  //   hasVideo: true
  //   hasVirtualTour: false
  //   images: [{
  //     size72x52: "https://photos.cdn.dsch.ie/ZWMzYWI4MWJmZDBiNTMzZThhNGIxOTRiYzY0ODBhMzdtQeNdMz4ye-PxDpIRhKc0aHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1L2EvZC9hZDYwMTEwYTBkMTlkMDM2NTFlNGVmZDEzZDc0YzM2Ny5qcGd8fHx8fHw3Mng1Mnx8fHw="
  //     size300x200: "https://photos.cdn.dsch.ie/MDU2MTNlODg3ZTBjY2VmNjBhMmYwMGE2NDUyNjQ0OWM27gJftORH5xHpOLLgKZe8aHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1L2EvZC9hZDYwMTEwYTBkMTlkMDM2NTFlNGVmZDEzZDc0YzM2Ny5qcGd8fHx8fHwzMDB4MjAwfHx8fA=="
  //     size320x280: "https://photos.cdn.dsch.ie/ZDg1MmFkYTRhZDlkZmNiMTkxN2Y5NjY1NjQ2NTY3MDlzzS9qwKfbOYOIFaN5MZ5EaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1L2EvZC9hZDYwMTEwYTBkMTlkMDM2NTFlNGVmZDEzZDc0YzM2Ny5qcGd8fHx8fHwzMjB4MjgwfHx8fA=="
  //     size360x240: "https://photos.cdn.dsch.ie/ZGJiODU3MGJlZGY2NWQ3NzBjNzEzYmNlNGE2NzYxYjB9ITssoKbc9shUyPNPxRS3aHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1L2EvZC9hZDYwMTEwYTBkMTlkMDM2NTFlNGVmZDEzZDc0YzM2Ny5qcGd8fHx8fHwzNjB4MjQwfHx8fA=="
  //     size400x300: "https://photos.cdn.dsch.ie/ZThjZmFhODBhZjRhODgzMmNkYzFiZGUyZmU1MGQ0NjnNc9jboWcC9usX7qAEUrbwaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1L2EvZC9hZDYwMTEwYTBkMTlkMDM2NTFlNGVmZDEzZDc0YzM2Ny5qcGd8fHx8fHw0MDB4MzAwfHx8fA=="
  //     size600x600: "https://photos.cdn.dsch.ie/MTE4MGUxZDkwYjkxNjgzMmU1NDVmOGMxNDc0N2RlNmas7cIEq57koegfxST2uyjPaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1L2EvZC9hZDYwMTEwYTBkMTlkMDM2NTFlNGVmZDEzZDc0YzM2Ny5qcGd8fHw2MDB8fHx8fHx8"
  //     size680x392: "https://photos.cdn.dsch.ie/Mzg5NTRiNDc1MzE0NTNiNWNiNzFkMGM4MmNkM2IzZTatCYl81p-4S6P8YIj_3VPMaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1L2EvZC9hZDYwMTEwYTBkMTlkMDM2NTFlNGVmZDEzZDc0YzM2Ny5qcGd8fHx8fHw2ODB4MzkyfHx8fA=="
  //     size720x480: "https://photos.cdn.dsch.ie/Y2U0ODU1NzAzMDU1NTlmNDkwZmU1NmJjZjUxMGJmNGRFCbUGACNKMDIAVXythXh5aHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1L2EvZC9hZDYwMTEwYTBkMTlkMDM2NTFlNGVmZDEzZDc0YzM2Ny5qcGd8fHx8fHw3MjB4NDgwfHx8fA=="
  //   }]
  //   totalImages: 26
  // }
  numBedrooms: string,
  // pageBranding: {
  //   backgroundColour: "#054573"
  //   rectangleLogo: "https://photos.cdn.dsch.ie/OTg5ZWFlNDA5NGE1ZTkzNTRiODNjOGRlOGUyMmViYzRUjUGKEhEsOySno43QKj1iaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1LzkvOC85ODU1OWU4NGEzZTc0ZmEwOWI1MTJiMDRhODM0ODJkY19zdGFuZGFyZC5qcGd8fDgwfHx8fHx8fHw="
  //   squareLogo: "https://photos.cdn.dsch.ie/NmY5MTZmYTQ3MGQzNWUzYjg5NjIyNWFhNmZiMDFkMzn_8NzyAUxknT0ajfc210HmaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1LzEvMS8xMTg1OGEzZGQ5OTkzOTQzZDViN2NlOTA4MWQxODBmNi5qcGd8fHwxMjB8fHx8fHx8"
  //   squareLogos: [, …]
  //   0: "https://photos.cdn.dsch.ie/NmY5MTZmYTQ3MGQzNWUzYjg5NjIyNWFhNmZiMDFkMzn_8NzyAUxknT0ajfc210HmaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1LzEvMS8xMTg1OGEzZGQ5OTkzOTQzZDViN2NlOTA4MWQxODBmNi5qcGd8fHwxMjB8fHx8fHx8"
  //   standardLogo: "https://photos.cdn.dsch.ie/OTg5ZWFlNDA5NGE1ZTkzNTRiODNjOGRlOGUyMmViYzRUjUGKEhEsOySno43QKj1iaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1LzkvOC85ODU1OWU4NGEzZTc0ZmEwOWI1MTJiMDRhODM0ODJkY19zdGFuZGFyZC5qcGd8fDgwfHx8fHx8fHw="
  // }
  // point: { type: "Point", coordinates: [-6.231118982370589, 53.344905963613485] }
  price: string,
  propertyType: string
  // prs: { totalUnitTypes: 5, … }
  publishDate: number,
  saleType: Array<string>,
  sections: Array<string>,
  seller: DaftListingSeller,
  seoFriendlyPath: string,
  seoTitle: string,
  state: string,
  title: string,
  savedAd: false
}

export interface DaftListingSeller {
  sellerId: number,
  name: string,
  phone: string,
  alternativePhone: string,
  profileImage: string,
  branch: string,
  address: string,
  standardLogo: string,
  squareLogo: string,
  backgroundColour: string,
  licenseNumber: string,
  sellerType: string,
  showContactForm: boolean,
  phoneWhenToCall: string
}

export enum DaftListingSellerType {
  BRANDED_AGENT,
  UNBRANDED_AGENT,
}

/*
 { sellerId: 9601, name: "Eoin Grant", phone: "01 9073777", … }
*/