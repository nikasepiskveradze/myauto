'use client';
import { SwitchProps } from '@/components/atoms/switch/types';

export default function Switch({ checked, onChange }: SwitchProps) {
  return (
    <label className="relative cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
      <div className="w-7 h-5 bg-black rounded-full peer peer-checked:after:translate-x-1.5 after:content-[''] after:absolute after:top-0.5 after:left-[3px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
    </label>
  );
}
