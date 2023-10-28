import { CarItemProps } from '@/components/organisms/carItem/types';
import CarItemDesktop from '@/components/organisms/carItem/CarItemDesktop';
import CarItemMobile from '@/components/organisms/carItem/CarItemMobile';

export default function CarItem({ car }: CarItemProps) {
  return (
    <>
      <CarItemDesktop car={car} />
      <CarItemMobile car={car} />
    </>
  );
}
