import { EntityState } from '@ngrx/entity';
import { IPlatform } from '../platforms/platforms.interface';

export interface IPlatformState extends EntityState<IPlatform> {
  selectedPlatformId: number | null;
  error: Boolean;
  loading: Boolean;
}
