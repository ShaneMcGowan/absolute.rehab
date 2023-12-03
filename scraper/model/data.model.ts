import { Advert } from "./advert.model";

export interface Data {
  adverts: Array<Advert>
  lastUpdated: Date;
}