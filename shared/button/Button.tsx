import cn from 'classnames';
import { ButtonProps } from '@/shared/button/types';

export default function Button({ children, className }: ButtonProps) {
  return <button className={cn('p-2 w-full rounded-[8px]', className)}>{children}</button>;
}
