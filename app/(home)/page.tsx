import Filters from '@/app/(home)/filters/Filters';
import Cars from '@/app/(home)/cars/Cars';

export default function Home() {
  return (
    <div className="mt-8 flex justify-between items-start">
      <Filters />
      <Cars />
    </div>
  );
}
