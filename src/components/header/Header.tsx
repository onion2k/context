import './header.css';

export interface iHeader {
  title: String;
}

export function Header({ title='Column' }: iHeader) {
  return (
    <div className="Header">
      { title }
    </div>
  );
}
