'use client';
import Select from '@/shared/select/Select';
import { formatPlainNumber } from '@/utils/numberFormatters';
import { periodOptions, sortOptions } from '@/components/sortBar/helpers';
import { SortBarProps } from '@/components/sortBar/type';

export default function SortBar({ searchResultCount }: SortBarProps) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xs text-[#272A37]">{formatPlainNumber(searchResultCount)} განცხადება</span>

      <div className="flex items-center justify-between">
        <Select placeholder="პერიოდი" value="" options={periodOptions} onChange={() => {}} className="bg-white w-[140px] rounded-xl mr-2" />
        <Select placeholder="სორტირება" value="" options={sortOptions} onChange={() => {}} className="bg-white w-[164px] rounded-xl" />
      </div>
    </div>
  );
}
