import httpClient from '@/utils/axios';
import { CarProductQuery, CarProducts, CarProductsResponse, Meta } from '@/services/product/types';
import { cache } from 'react';

export const fetchCarProducts = cache(async (query: CarProductQuery): Promise<CarProducts> => {
  const cars: CarProductsResponse = await httpClient.get('/products', {
    params: {
      ForRent: query.saleType,
      Mans: query.manufacturers,
      Cats: query.categories,
      PriceFrom: query.startPrice,
      PriceTo: query.endPrice,
      Period: query.period,
      SortOrder: query.sortOrder,
    },
  });

  return {
    items: cars.data.items.map((item) => ({
      carId: item.car_id,
      photo: item.photo,
      photoVer: item.photo_ver,
      views: item.views,
      prodYear: item.prod_year,
      price: item.price,
      priceUsd: item.price_usd,
      carRunKM: item.car_run_km,
      engineVolume: item.engine_volume,
      carModel: item.car_model,
      manId: item.man_id,
    })),
    meta: {
      total: cars.data.meta.total,
      perPage: cars.data.meta.per_page,
      currentPage: cars.data.meta.current_page,
      lastPage: cars.data.meta.last_page,
    },
  };
});
