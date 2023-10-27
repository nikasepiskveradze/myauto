import { Manufacturer } from '@/services/manufacturer/types';
import { Category } from '@/services/category/types';

export interface FiltersProps {
  manufacturers: Manufacturer[];
  categories: Category[];
}
