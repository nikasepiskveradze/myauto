'use client';
import Select from '@/shared/select/Select';
import { formatPlainNumber } from '@/utils/numberFormatters';
import { periodOptions, sortOptions } from '@/components/sortBar/helpers';
import { SortBarProps } from '@/components/sortBar/type';
import { useRouter } from 'next/navigation';
import { useGetSearchQuery } from '@/hooks/useGetSearchQuery';

export default function SortBar({ searchResultCount }: SortBarProps) {
  const router = useRouter();
  const { period, sortOrder } = useGetSearchQuery();

  const selectPeriod = (value: string | number) => {
    const query = new URLSearchParams(window.location.search);
    query.set('period', value as string);
    router.push(`?${query.toString()}`);
  };

  const selectSortOrder = (value: string | number) => {
    const query = new URLSearchParams(window.location.search);
    query.set('sortOrder', value as string);
    router.push(`?${query.toString()}`);
  };

  return (
    <div className="flex justify-between items-center">
      <span className="text-xs text-[#272A37]">{formatPlainNumber(searchResultCount)} განცხადება</span>

      <div className="flex items-center justify-between">
        <Select
          placeholder="პერიოდი"
          value={period}
          options={periodOptions}
          onChange={selectPeriod}
          className="bg-white w-[140px] rounded-xl mr-2"
        />
        <Select
          placeholder="სორტირება"
          value={sortOrder}
          options={sortOptions}
          onChange={selectSortOrder}
          className="bg-white w-[164px] rounded-xl"
        />
      </div>
    </div>
  );
}
