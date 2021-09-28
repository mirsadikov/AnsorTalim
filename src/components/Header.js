import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { CSSTransition } from "react-transition-group";
import { ThreeLineHorizontal, Cross } from "akar-icons";

function Header() {
  const isMobile = useMediaQuery({ query: `(max-width: 50em)` });
  const [navIsOpen, setNavIsOpen] = useState(false);

  if (navIsOpen) document.documentElement.style.overflowY = "hidden";
  else document.documentElement.style.overflowY = "scroll";

  const defaultStyle = {
    transition: `all 300ms ease`,
    opacity: 0,
    visibility: "hidden",
  };

  const transitionStyles = {
    entering: { opacity: 1, visibility: "visible" },
    entered: { opacity: 1, visibility: "visible" },
    exiting: { opacity: 0, visibility: "visible" },
    exited: { opacity: 0, visibility: "hidden" },
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="nav__brand">
          <img
            src="images/logo-full.svg"
            alt="Ansor Ta'lim Logo"
            className="nav__brand-logo"
          />
        </a>
        {isMobile && (
          <button
            className="nav__btn btn"
            onClick={() => setNavIsOpen((state) => !state)}
          >
            {navIsOpen ? (
              <Cross className="nav__icon" size={24} />
            ) : (
              <ThreeLineHorizontal className="nav__icon" size={24} />
            )}
          </button>
        )}
        <CSSTransition in={navIsOpen || !isMobile} timeout={300}>
          {(state) => (
            <nav
              className="nav"
              style={{ ...defaultStyle, ...transitionStyles[state] }}
            >
              <ul className="nav__list">
                <li>
                  <a
                    onClick={closeNav}
                    href="#yangiliklar"
                    className="nav__link"
                  >
                    Yangiliklar
                  </a>
                </li>
                <li>
                  <a onClick={closeNav} href="#kurslar" className="nav__link">
                    Kurslar
                  </a>
                </li>
                <li>
                  <a onClick={closeNav} href="#ustozlar" className="nav__link">
                    Ustozlar
                  </a>
                </li>
                <li>
                  <a onClick={closeNav} href="#izohlar" className="nav__link">
                    Izohlar
                  </a>
                </li>
                <li>
                  <a onClick={closeNav} href="#lavhalar" className="nav__link">
                    Darslardan lavhalar
                  </a>
                </li>
                <li>
                  <a onClick={closeNav} href="#aloqa" className="nav__link">
                    Aloqa
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </CSSTransition>
        <div className="header__text">
          <h1 className="heading--1 mr-2">
            Abituriyentlikdan studentlik tomon
          </h1>
          <p className="subtitle header__subtitle">
            Uyda qoling, online ta’lim oling. At massa at dictumst odio sapien
            tortor auctor sollicitudin.
          </p>
          <a href="https://t.me/ansortalim" className="btn">
            Kursga a’zo bo‘lish
          </a>
        </div>
        <div className="header__img"></div>
      </div>
    </header>
  );
}

export default Header;
