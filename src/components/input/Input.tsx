import './input.css';

export interface iInput {
  className?: string;
}

export function Input({ className='' }: iInput) {
  return (
    <div className={`Input ${className}`}>
      <input type="text" />
    </div>
  );
}
