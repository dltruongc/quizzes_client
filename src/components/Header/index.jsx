import './Header.scss';

export default function Header(props) {
  return (
    <header className="header">
      <div className="header__left">
        <div className="logo">Quizizz</div>
      </div>
      <div className="header__right">
        <div className="header__search">Search</div>
        <a href="#" className="btn">
          Enter Code
        </a>
      </div>
    </header>
  );
}
