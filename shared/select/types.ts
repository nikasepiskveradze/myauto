export interface SelectOption {
  value: string | number;
  label: string;
}

export interface SelectProps {
  label?: string;
  placeholder?: string;
  value: string | string[] | number[];
  options: SelectOption[];
  onChange: (value: string | number) => void;
  className?: string;
  multiple?: boolean;
}
