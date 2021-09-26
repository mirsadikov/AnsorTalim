function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__details">
          <a href="/" className="nav__brand">
            <img
              src="images/logo-full.svg"
              alt="Ansor Ta'lim Logo"
              className="nav__brand-logo"
            />
          </a>
          <p className="footer__text body--2">
            Dolor viverra in id bibendum sollicitudin viverra quam enim. Id
            lacus, dolor, turpis
          </p>
        </div>

        <ul className="nav__list footer__links">
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
            <a href="#lavhalar" className="nav__link">
              Darslardan lavhalar
            </a>
          </li>
          <li>
            <a href="#aloqa" className="nav__link">
              Aloqa
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
