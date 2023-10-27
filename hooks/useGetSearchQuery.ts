import { useSearchParams } from 'next/navigation';

export const useGetSearchQuery = () => {
  const search = useSearchParams();

  const saleType = search.get('saleType') ?? '0';
  const manufacturers = search.get('manufacturers')?.split('-') ?? [];
  const categories = search.get('categories')?.split('.') ?? [];
  const startPrice = search.get('startPrice') ?? '';
  const endPrice = search.get('endPrice') ?? '';

  const period = search.get('period') ?? '';
  const sortOrder = search.get('sortOrder') ?? '';

  return {
    saleType,
    manufacturers,
    categories,
    startPrice,
    endPrice,
    period,
    sortOrder,
  };
};
