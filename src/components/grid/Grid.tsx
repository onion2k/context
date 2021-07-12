import React, { useEffect, useState } from 'react';
import { Header } from '../header/Header';
import { Input } from '../input/Input';
import './grid.css';

export interface iGrid {
  direction: string
}

export interface iUpdate {
  index: number;
  value: string;
}

export function Grid({ direction='column' }: iGrid) {

  const titles = ['a, b, c...', '1, 2, 3...', 'i, ii, iii...'];
  const [inputs, ] = useState(Array(30).fill(undefined).map(()=>React.createRef<HTMLInputElement>()));

  const update = ({ index, value }: iUpdate) => {
    console.log('index', index, 'value', value)
  }

  useEffect(()=>{
    if (inputs[1].current !== null) {
      inputs[1].current.focus()
    }
  }, [inputs])

  return (
    <div className={"wrapper"}>
      <div className="Grid">
        { inputs.map((ref, i)=>{
            if (i % 10 === 0) {
              return <Header title={titles[i / 10]} key={`header-${i}`} />
            } else {
              return <Input ref={ref} update={update} index={ direction==='column' ? i : 1 + Math.floor(i / 10) + (((i - 1) % 10) * 3) } key={`input-${i}`} />
            }
          })
        }
      </div>
    </div>
  );
}
