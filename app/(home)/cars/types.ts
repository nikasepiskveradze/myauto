import { CarProductQuery } from '@/services/product/types';
import { Manufacturer } from '@/services/manufacturer/types';

export interface CarsProps {
  query: CarProductQuery;
  manufacturers: Manufacturer[];
}
