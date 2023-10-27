export interface InputProps {
  value: string;
  placeholder?: string;
  type?: string;
  className?: string;
  onChange: (value: string) => void;
}
