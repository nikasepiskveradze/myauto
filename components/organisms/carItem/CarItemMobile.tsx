import { CarItemProps } from '@/components/organisms/carItem/types';
import PriceItem from '@/components/molecules/priceItem/PriceItem';
import Image from 'next/image';
import { formatPlainNumber } from '@/utils/numberFormatters';
import { CompareIcon, GeorgiaFlag, PencilIcon } from '@/components/atoms/icons/Icons';

export default function CarItemMobile({ car }: CarItemProps) {
  return (
    <div className="sm:hidden block bg-white">
      <div className="flex items-center pt-5 px-5">
        <span className="text-sm text-[#272A37] mr-2">{car.title}</span>
        <span className="text-sm text-[#8996AE]">{car.year} წ</span>
      </div>

      <div className="flex items-center justify-between my-2 px-5">
        <PriceItem price={car.price} priceUsd={car.priceUsd} className="flex items-center" />
        <div className="bg-[#EEFBF1] rounded-[6px] py-1 px-2 text-[10px] text-[#1EB676]">განბაჟებული</div>
      </div>

      <div className="px-5">
        <Image width={343} height={256} src={car.photo} alt="IMG" className="w-full h-full rounded-[16px]" />
      </div>

      <div className="mt-3 flex items-center mb-3 px-5">
        <div className="w-[50%]">
          <span className="text-[12px] text-[#454857] mb-[6px] block">{formatPlainNumber(car.range)} კმ</span>
          <span className="text-[12px] text-[#454857] mb-[6px] block">{car.engine} ბენზინი</span>
          <span className="text-[12px] text-[#454857] mb-[6px] block">{car.transmission}</span>
        </div>

        <div>
          <span className="text-[12px] text-[#454857] mb-[6px] block">სედანი</span>
          <span className="text-[12px] text-[#454857] mb-[6px] block">{car.wheel === 1 ? 'მარჯვენა' : 'მარცხენა'}</span>
          <span className="text-[12px] text-[#454857] mb-[6px] block">
            <div className="flex items-center">
              <GeorgiaFlag />
              <span className="text-[11px] ml-2">{car.location}</span>
            </div>
          </span>
        </div>
      </div>

      <div className="border-t py-3 px-5 justify-between flex items-center">
        <div className="text-xs text-[#6F7383]">{car.views} ნახვა</div>

        <div className="flex items-center justify-between w-12">
          <CompareIcon />
          <PencilIcon />
        </div>
      </div>
    </div>
  );
}
