import Filters from '@/app/(home)/filters/Filters';
import Cars from '@/app/(home)/cars/Cars';
import { fetchManufacturers } from '@/services/manufacturer/manufacturerService';
import { fetchCategories } from '@/services/category/categoryService';

export default async function Home() {
  const manufacturers = await fetchManufacturers();
  const categories = await fetchCategories();

  return (
    <div className="mt-8 flex justify-between items-start">
      <Filters manufacturers={manufacturers} categories={categories} />
      <Cars />
    </div>
  );
}
