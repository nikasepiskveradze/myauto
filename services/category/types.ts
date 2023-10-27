export interface CategoryResponse {
  category_id: number;
  category_type: number;
  has_icon: number;
  title: string;
  seo_title: string;
  vehicle_types: number[];
}

export interface Category {
  categoryId: number;
  categoryType: number;
  hasIcon: number;
  title: string;
  seoTitle: string;
  vehicleTypes: number[];
}
