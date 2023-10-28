import cn from 'classnames';
import { ButtonProps } from '@/components/atoms/button/types';

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button className={cn('p-2 w-full rounded-[8px]', className)} onClick={onClick}>
      {children}
    </button>
  );
}
