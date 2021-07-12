import { Header } from '../header/Header';
import { Input } from '../input/Input';
import './grid.css';

export function Grid() {
  return (
    <div className={"wrapper"}>
      <div className="Grid">
        <Header title={"Letter"} />
        <Input className="focused" />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />

        <Header title={"Decimal"} />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />

        <Header title={"Roman Numerals"} />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />

      </div>
    </div>
  );
}
