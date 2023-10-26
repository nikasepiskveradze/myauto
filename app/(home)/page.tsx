import Filters from '@/app/(home)/filters/Filters';

export default function Home() {
  return (
    <div className="mt-8 flex justify-between">
      <Filters />
      <div className="bg-amber-300">content</div>
    </div>
  );
}
