import logo from "../img/logo.svg";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="nav__brand">
          <img src={logo} alt="Ansor Ta'lim Logo" className="nav__brand-logo" />
        </a>
        <ul className="nav__list">
          <li>
            <a href="#yangiliklar" className="nav__link">
              Yangiliklar
            </a>
          </li>
          <li>
            <a href="#kurslar" className="nav__link">
              Kurslar
            </a>
          </li>
          <li>
            <a href="#ustozlar" className="nav__link">
              Ustozlar
            </a>
          </li>
          <li>
            <a href="#izohlar" className="nav__link">
              Izohlar
            </a>
          </li>
          <li>
            <a href="#lavxalar" className="nav__link">
              Darslardan lavxalar
            </a>
          </li>
          <li>
            <a href="#aloqa" className="nav__link">
              Aloqa
            </a>
          </li>
        </ul>
      </nav>

      <div className="header__text">
        <h1 className="heading--1 mr-2">Abituriyentlikdan studentlik tomon</h1>
        <p className="subtitle mr-4">
          Uyda qoling, online ta’lim oling. At massa at dictumst odio sapien
          tortor auctor sollicitudin.
        </p>
        <a href="https://t.me/ansortalim" className="btn">
          Kursga a’zo bo‘lish
        </a>
      </div>
      <div className="header__img"> </div>
    </header>
  );
}

export default Header;
