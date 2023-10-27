import { CompareIcon, EngineIcon, GeorgiaFlag, HeartIcon, PencilIcon, SpeedIcon, TransmissionIcon, WheelIcon } from '@/shared/icons/Icons';
import { CarItemProps } from '@/components/carItem/types';
import { formatPlainNumber } from '@/utils/numberFormatters';
import PriceItem from '@/components/carItem/PriceItem';
import Image from 'next/image';

export default function CarItem({ car }: CarItemProps) {
  return (
    <div className="flex bg-white rounded-[8px] border border-[#E9E9F0] mb-[10px] last:mb-0 p-4">
      <div className="w-[182px] h-[144px] rounded-[8px] overflow-hidden">
        <Image width={182} height={144} src={car.photo} alt="IMG" className="w-full h-full object-cover" />
      </div>

      <div className="ml-4 w-full flex flex-col justify-between">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <span className="text-[14px] capitalize mr-2">{car.title}</span>
            <span className="text-[14px] text-[#8C929B]">{car.year} წ</span>
          </div>

          <div className="flex items-center">
            <div className="flex items-center">
              <GeorgiaFlag />
              <span className="text-[11px] ml-2">{car.location}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <div className="flex items-center mb-4">
              <EngineIcon fill="#9CA2AA" />
              <span className="text-[12px] text-[#1B1D25] ml-3">{car.engine}</span>
            </div>

            <div className="flex items-center">
              <TransmissionIcon />
              <span className="text-[12px] text-[#1B1D25] ml-3">{car.transmission}</span>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <SpeedIcon />
              <span className="text-[12px] text-[#1B1D25] ml-3">{formatPlainNumber(car.range)} კმ</span>
            </div>

            <div className="flex items-center">
              <WheelIcon />
              <span className="text-[12px] text-[#1B1D25] ml-3">{car.wheel === 1 ? 'მარჯვენა' : 'მარცხენა'}</span>
            </div>
          </div>
          <div>
            <div className="flex items-center mt-[-6px]">
              <PriceItem price={car.price} priceUsd={car.priceUsd} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-xs text-[#6F7383]">{car.views} ნახვა</div>

          <div className="flex items-center justify-between w-20">
            <PencilIcon />
            <CompareIcon />
            <HeartIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
