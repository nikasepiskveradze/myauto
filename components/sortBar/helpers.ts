import { SelectOption } from '@/shared/select/types';

export const periodOptions: SelectOption[] = [
  { value: '1h', label: 'ბოლო 1 საათი' },
  { value: '2h', label: 'ბოლო 2 საათი' },
  { value: '3h', label: 'ბოლო 3 საათი' },
  { value: '1d', label: 'ბოლო 1 დღე' },
  { value: '2d', label: 'ბოლო 2 დღე' },
  { value: '3d', label: 'ბოლო 3 დღე' },
  { value: '1w', label: 'ბოლო 1 კვირა' },
  { value: '2w', label: 'ბოლო 2 კვირა' },
  { value: '3w', label: 'ბოლო 3 კვირა' },
];

export const sortOptions: SelectOption[] = [
  { value: 1, label: 'თარიღი კლებადი' },
  { value: 2, label: 'თარიღი ზრდადი' },
  { value: 3, label: 'ფასი კლებადი' },
  { value: 4, label: 'ფასი ზრდადი' },
  { value: 5, label: 'გარბენი კლებადი' },
  { value: 6, label: 'გარბენი ზრდადი' },
];
