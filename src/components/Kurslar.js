import { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NumberFormat from "react-number-format";
import Modal from "./Modal";

const courses = [
  {
    id: 1,
    title: "Matematika",
    img: "course1.png",
    tutor: {
      name: "Mo‘minov Otabek",
      img: "tutor1.png",
    },
    desc: "0 dan boshlab eng mukammal misol va masalalargacha o‘rganib chiqamiz",
    price: "280 000",
  },
  {
    id: 2,
    title: "Fizika",
    img: "course2.png",
    tutor: {
      name: "Rasulov Jasur",
      img: "tutor2.png",
    },
    desc: "0 dan boshlab eng mukammal misol va masalalargacha o‘rganib chiqamiz",
    price: "300 000",
  },
  {
    id: 3,
    title: "Mental arifmetika",
    img: "course3.png",
    tutor: {
      name: "Inoyatov Og‘abek",
      img: "tutor3.png",
    },
    desc: "0 dan boshlab eng mukammal misol va masalalargacha o‘rganib chiqamiz",
    price: "199 000",
  },
  {
    id: 4,
    title: "Fizika",
    img: "course2.png",
    tutor: {
      name: "Rasulov Jasur",
      img: "tutor2.png",
    },
    desc: "0 dan boshlab eng mukammal misol va masalalargacha o‘rganib chiqamiz",
    price: "300 000",
  },
  {
    id: 5,
    title: "Mental arifmetika",
    img: "course3.png",
    tutor: {
      name: "Inoyatov Og‘abek",
      img: "tutor3.png",
    },
    desc: "0 dan boshlab eng mukammal misol va masalalargacha o‘rganib chiqamiz",
    price: "199 000",
  },
];

function Kurslar() {
  const [expand, setExpand] = useState(false);
  const [currentCourses, setCurrentCourses] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    setCurrentCourses(expand ? courses : courses.slice(0, 3));
  }, [expand]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const hideModal = () => {
    setModalIsOpen(false);
  };

  const expandCourses = () => {
    if (expand) {
      setExpand(false);
    } else {
      window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop + 50 });
      setExpand(true);
    }
  };

  return (
    <section className="section section-courses" id="kurslar" ref={ref}>
      <div className="section__head">
        <h2 className="heading--2">Kurslar</h2>
        <button onClick={expandCourses} className="btn--underlined">
          {!expand ? "Barcha kurslar" : "Kamroq"}
        </button>
      </div>
      <TransitionGroup className="section__body">
        {currentCourses.map((course) => (
          <CSSTransition key={course.id} timeout={500} classNames="fade">
            <figure className="courses">
              <img
                src={`images/${course.img}`}
                alt={course.title}
                className="courses__img"
              />
              <h4 className="courses__price courses__price-tablet heading--4">
                {course.price} so‘m
              </h4>
              <figcaption className="courses__caption">
                <h3 className="courses__title heading--3">{course.title}</h3>
                <div className="courses__tutor">
                  <img
                    src={`images/${course.tutor.img}`}
                    className="courses__tutor-img"
                    alt={course.tutor.name}
                  />
                  <p className="body--2 courses__tutor-name">
                    {course.tutor.name}
                  </p>
                </div>
                <p className="courses__desc body--2--dark">{course.desc}</p>
                <h4 className="courses__price heading--4">
                  {course.price} so‘m
                </h4>
                <button onClick={openModal} className="btn btn--block">
                  Sotib olish
                </button>
              </figcaption>
            </figure>
          </CSSTransition>
        ))}
      </TransitionGroup>
      {modalIsOpen ? (
        <Modal hide={hideModal}>
          <div className="form-portal">
            <form action="#" method="post">
              <div className="form__group">
                <label htmlFor="form-name">
                  <h5 className="heading--5 form__label">
                    Ism va Familiyangizni kiriting:
                  </h5>
                </label>
                <input
                  type="text"
                  id="form-name"
                  placeholder="F.I.O"
                  className="form__input"
                  required
                />
              </div>

              <div className="form__group">
                <label htmlFor="form-contact">
                  <h5 className="heading--5 form__label">
                    Telefon nomeringizni kiriting
                  </h5>
                </label>
                <NumberFormat
                  required
                  type="tel"
                  id="form-contact"
                  placeholder="Bu yerga yozing"
                  className="form__input"
                  format="+988 (##) ###-##-##"
                  mask="_"
                  allowEmptyFormatting={true}
                  fixedDecimalScale={false}
                  thousandsGroupStyle="thousand"
                  displayType="input"
                />
              </div>

              <button className="btn form__btn">Sotib olish</button>
            </form>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}

export default Kurslar;
