import httpClient from '@/utils/axios';
import { Category, CategoryResponse } from '@/services/category/types';

export const fetchCategories = async (): Promise<Category[]> => {
  const categories: { data: CategoryResponse[] } = await httpClient.get('/cats/get');

  return categories.data.map((category) => ({
    categoryId: category.category_id,
    categoryType: category.category_type,
    hasIcon: category.has_icon,
    title: category.title,
    seoTitle: category.seo_title,
    vehicleTypes: category.vehicle_types,
  }));
};
