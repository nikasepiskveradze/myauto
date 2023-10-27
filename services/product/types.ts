export interface CarProductResponse {
  car_id: number;
  photo: string;
  photo_ver: number;
  views: number;
  prod_year: number;
  price: number;
  price_usd: number;
  car_run_km: number;
  engine_volume: number;
  car_model: string;
  man_id: number;
}

export interface MetaResponse {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export type CarProductsResponse = { data: { items: CarProductResponse[]; meta: MetaResponse } };

export interface CarProduct {
  carId: number;
  photo: string;
  photoVer: number;
  views: number;
  prodYear: number;
  price: number;
  priceUsd: number;
  carRunKM: number;
  engineVolume: number;
  carModel: string;
  manId: number;
}

export interface Meta {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
}

export type CarProducts = { items: CarProduct[]; meta: Meta };

export type CarProductQuery = {
  saleType: string;
  manufacturers: string;
  categories: string;
  startPrice: string;
  endPrice: string;
  period: string;
  sortOrder: string;
};
