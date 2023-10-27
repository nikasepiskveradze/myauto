import CarItem from '@/components/carItem/CarItem';
import SortBar from '@/components/sortBar/SortBar';
import { fetchCarProducts } from '@/services/product/productService';
import { fetchManufacturers } from '@/services/manufacturer/manufacturerService';
import { getCarPhoto } from '@/app/(home)/cars/helpers';

export default async function Cars() {
  const cars = await fetchCarProducts();
  const manufacturers = await fetchManufacturers();

  return (
    <div className="ml-5 w-full mb-8">
      <SortBar searchResultCount={cars.meta.total} />
      <div className="mt-4">
        {[
          cars.items.map((car) => (
            <CarItem
              key={car.carId}
              car={{
                id: car.carId,
                title: manufacturers.find((manItem) => manItem.manId === String(car.manId))?.manName!,
                photo: getCarPhoto(car.photo, car.dailyViews.productId, car.photoVer),
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
