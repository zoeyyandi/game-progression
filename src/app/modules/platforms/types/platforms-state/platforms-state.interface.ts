import { IPlatform } from '../platforms/platforms.interface';

export interface IPlatformState {
  platforms?: Array<IPlatform>;
  error?: Boolean;
}
