'use client';
import { useState } from 'react';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import cn from 'classnames';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  placeholder?: string;
  value: string | string[];
  options: SelectOption[];
  onChange: (value: string) => void;
  className?: string;
  multiple?: boolean;
}

export default function Select({
  label,
  placeholder,
  value,
  options,
  onChange,
  className,
  multiple,
}: SelectProps) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((open) => !open);
  const selectRef = useOutsideClick(() => setOpen(false));

  const singleLabel = options.find((option) => option.value === value)?.label;
  const multipleLabels = options
    .filter((option) => value.includes(option.value))
    .map((item) => item.label)
    .toString();

  const inputLabel = multiple ? multipleLabels : singleLabel;

  const clickOption = (option: SelectOption) => {
    onChange(option.value);
    if (multiple) return;
    setOpen(false);
  };

  return (
    <div className={className}>
      {label && (
        <label className="block mb-2 text-xs cursor-pointer" onClick={toggle}>
          {label}
        </label>
      )}

      <div className="relative" ref={selectRef as any}>
        <div
          className="w-full max-w-[200px] overflow-hidden h-[40px] flex items-center px-3 border border-[#C2C9D8] rounded-[8px] text-[13px] cursor-pointer"
          onClick={toggle}
        >
          {inputLabel ? (
            inputLabel
          ) : (
            <span className="text-xs text-[#6F7383]">{placeholder}</span>
          )}
        </div>

        {open && (
          <div className="group absolute top-[44px] z-20 bg-white w-[120%] max-h-[300px] overflow-auto border border-[#E2E5EB] rounded-[8px] shadow-[0_4px_20px_0_rgba(164, 174, 193, 0.40)]">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => clickOption(option)}
                className={cn(
                  'py-2 px-4 cursor-pointer text-[#6F7383] text-[14px] first:rounded-tl-[7px] first:rounded-tr-[7px]',
                  {
                    'bg-[#F2F3F6]':
                      option.value === value || value.includes(option.value),
                  },
                  {
                    'text-[#272A37]':
                      option.value === value || value.includes(option.value),
                  },
                )}
              >
                {option.label}
              </div>
            ))}

            {multiple && (
              <div className="sticky bottom-0 bg-white flex justify-center pt-3 pb-3 border-t">
                <div
                  className="bg-cyan-950 p-2 text-center text-white w-[70%] rounded-[8px] text-[14px] cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  არჩევა
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
