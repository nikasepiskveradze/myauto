'use client';
import { InputProps } from '@/components/atoms/input/types';
import cn from 'classnames';

export default function Input({ type = 'text', className, onChange, ...rest }: InputProps) {
  return (
    <input
      className={cn('border px-2 text-xs rounded-[8px] w-[94px] h-[40px]', className)}
      type={type}
      {...rest}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
