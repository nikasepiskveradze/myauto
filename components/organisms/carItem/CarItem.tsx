import {
  CompareIcon,
  EngineIcon,
  GeorgiaFlag,
  HeartIcon,
  PencilIcon,
  SpeedIcon,
  TransmissionIcon,
  WheelIcon,
} from '@/components/atoms/icons/Icons';
import { CarItemProps } from '@/components/organisms/carItem/types';
import { formatEngineVolume, formatPlainNumber } from '@/utils/numberFormatters';
import Image from 'next/image';
import PriceItem from '@/components/molecules/priceItem/PriceItem';

export default function CarItem({ car }: CarItemProps) {
  return (
    <>
      <div className="sm:flex hidden bg-white rounded-[8px] border border-[#E9E9F0] mb-[10px] last:mb-0 p-4">
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
                <span className="text-[12px] text-[#1B1D25] ml-3">{formatEngineVolume(car.engine)} ბენზინი</span>
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
                <PriceItem price={car.price} priceUsd={car.priceUsd} className="flex items-center" />
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
    </>
  );
}