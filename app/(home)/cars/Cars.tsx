import CarItem from '@/components/organisms/carItem/CarItem';
import SortBar from '@/components/molecules/sortBar/SortBar';
import { fetchCarProducts } from '@/services/product/productService';
import { getCarPhoto } from '@/app/(home)/cars/helpers';
import { CarsProps } from '@/app/(home)/cars/types';

export default async function Cars({ query, manufacturers }: CarsProps) {
  const cars = await fetchCarProducts(query);

  return (
    <div className="sm:ml-5 w-full mb-8">
      <SortBar searchResultCount={cars.meta.total} />
      <div className="mt-4">
        {[
          cars.items.map((car) => (
            <CarItem
              key={car.carId}
              car={{
                id: car.carId,
                title: manufacturers.find((manItem) => manItem.manId === String(car.manId))?.manName!,
                photo: getCarPhoto(car.photo, car.carId, car.photoVer),
                year: car.prodYear,
                location: 'თბილისი',
                engine: car.engineVolume,
                transmission: 'ავტომატიკა',
                range: car.carRunKM,
                wheel: 0,
                price: car.price,
                priceUsd: car.priceUsd,
                views: car.views,
              }}
            />
          )),
        ]}
      </div>
    </div>
  );
}
