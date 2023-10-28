import cn from 'classnames';
import { VehicleTabsProps } from '@/components/molecules/vehicleTabs/types';

export default function VehicleTabs({ current, tabs, onChange }: VehicleTabsProps) {
  return (
    <div className="flex justify-center rounded-tl-xl rounded-tr-xl overflow-hidden">
      {tabs.map((item) => (
        <div
          key={item.type}
          className={cn(
            'group w-[84px] h-[48px] flex justify-center items-center bg-[#F9F9FB] cursor-pointer',
            'border-b border-b-[#E9E9F0] border-r border-r-[#E9E9F0] last:border-r-0',
            { 'bg-white': item.type === current },
            { 'border-b-[#FD4100]': item.type === current },
          )}
          onClick={() => onChange(item.type)}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}
