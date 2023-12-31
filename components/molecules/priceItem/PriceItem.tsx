'use client';

import { formatPlainNumber } from '@/utils/numberFormatters';
import { useGlobalState } from '@/context/GlobaState';

interface PriceItemProps {
  price: number;
  priceUsd: number;
  className?: string;
}

export default function PriceItem({ price, priceUsd, className }: PriceItemProps) {
  const { isUsd } = useGlobalState();

  return (
    <div className={className}>
      <span className="text-[20px] font-bold mr-2">{formatPlainNumber(isUsd ? priceUsd : price)}</span>
      <span className="bg-[#F2F3F6] rounded-full w-[24px] h-[24px] flex justify-center items-center text-xs">{isUsd ? '$' : '₾'}</span>
    </div>
  );
}
