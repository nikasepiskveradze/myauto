'use client';
import { formatPlainNumber } from '@/utils/number-formatters';
import Select from '@/shared/select/Select';

export default function SortBar() {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xs text-[#272A37]">{formatPlainNumber(5467985)} განცხადება</span>

      <div className="flex items-center justify-between">
        <Select value="ბოლო 3 საათი" options={[]} onChange={() => {}} className="bg-white w-[140px] rounded-xl mr-2" />
        <Select value="ბოლო 3 საათი" options={[]} onChange={() => {}} className="bg-white w-[164px] rounded-xl" />
      </div>
    </div>
  );
}
