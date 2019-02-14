import { IPlatform } from '../types/platforms/platforms.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const adapter: EntityAdapter<IPlatform> = createEntityAdapter<IPlatform>(
  {}
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
