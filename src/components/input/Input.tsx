import { forwardRef, ChangeEvent } from 'react';
import './input.css';

export type iInput = {
  index: number;
  update: Function;
  className?: string | null;
}

export const Input = forwardRef<HTMLInputElement, iInput>(({ className, update, index }, ref) => {

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    update({ index, value: event.target.value })
  }

  return (
    <input ref={ref} type="text" onChange={onChange} tabIndex={index} defaultValue={''} className={`Input ${className ? className : ''}`} />
  )
})
