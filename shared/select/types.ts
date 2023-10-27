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
