import { IPlatforms } from './../../modules/platforms/types/platforms-state.interface';
import { IListings } from '../../modules/listings/types/listings-state.interface';

export interface IGamesState {
  listings: IListings;
  platforms: IPlatforms;
}
