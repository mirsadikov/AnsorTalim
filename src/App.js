import logo from "./img/logo.svg";

function App() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="/" className="nav__brand">
            <img
              src={logo}
              alt="Ansor Ta'lim Logo"
              className="nav__brand-logo"
            />

            <h1 className="nav__brand-name">Ansor Ta'lim</h1>
          </a>
          <ul className="nav__list">
            <li>
              <a href="#yangiliklar" className="nav__link subtitle">
                Yangiliklar
              </a>
            </li>
            <li>
              <a href="#kurslar" className="nav__link subtitle">
                Kurslar
              </a>
            </li>
            <li>
              <a href="#ustozlar" className="nav__link subtitle">
                Ustozlar
              </a>
            </li>
            <li>
              <a href="#izohlar" className="nav__link subtitle">
                Izohlar
              </a>
            </li>
            <li>
              <a href="#lavxalar" className="nav__link subtitle">
                Darslardan lavxalar
              </a>
            </li>
            <li>
              <a href="#aloqa" className="nav__link subtitle">
                Aloqa
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__text">
          <h1 className="heading--1 mr-2">Abituriyentlikdan studentlik tomon</h1>
          <p className="body--2 mr-4">
            Uyda qoling, online ta’lim oling. At massa at dictumst odio sapien
            vulputate tortor auctor sollicitudin.
          </p>
          <a href="https://t.me/ansortalim" className="btn">
            Batafsil
          </a>
        </div>
      </header>
    </>
  );
}

export default App;
