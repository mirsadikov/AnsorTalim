import { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const news = [
  {
    id: 1,
    title: "Dasturchilik orqali million?",
    date: "12/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news1.png",
    url: "#",
  },
  {
    id: 2,
    title: "Qanday boshlash kerak?",
    date: "10/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news2.png",
    url: "#",
  },
  {
    id: 3,
    title: "FAANG kompaniyalari.",
    date: "09/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news3.png",
    url: "#",
  },
  {
    id: 4,
    title: "Qanday boshlash kerak?",
    date: "10/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news2.png",
    url: "#",
  },
  {
    id: 5,
    title: "FAANG kompaniyalari.",
    date: "09/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news3.png",
    url: "#",
  },
  {
    id: 6,
    title: "Dasturchilik orqali million?",
    date: "12/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news1.png",
    url: "#",
  },
  {
    id: 7,
    title: "FAANG kompaniyalari.",
    date: "09/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news3.png",
    url: "#",
  },
  {
    id: 8,
    title: "Qanday boshlash kerak?",
    date: "10/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news2.png",
    url: "#",
  },
];

function Yangiliklar() {
  const [expand, setExpand] = useState(false);
  const [currentNews, setCurrentNews] = useState([]);
  const ref = useRef();

  useEffect(() => {
    setCurrentNews(expand ? news : news.slice(0, 3));
  }, [expand]);

  const expandNews = () => {
    if (expand) {
      setExpand(false);
    } else {
      window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop + 50 });
      setExpand(true);
    }
  };

  return (
    <section className="section section-news" id="yangiliklar" ref={ref}>
      <div className="section__head">
        <h2 className="heading--2">Yangiliklar</h2>
        <button onClick={expandNews} className="btn--underlined">
          {!expand ? "Barcha yangiliklar" : "Kamroq"}
        </button>
      </div>
      <TransitionGroup className="section__body">
        {currentNews.map((item) => (
          <CSSTransition key={item.id} timeout={500} classNames="fade">
            <a href={item.url} className="news__card">
              <figure className="news__card-figure">
                <img
                  src={`images/${item.img}`}
                  alt={item.title}
                  className="news__card-img"
                />
                <figcaption className="news__card-caption">
                  <p className="news__card-date">{item.date}</p>
                  <h5 className="news__card-title">{item.title}</h5>
                </figcaption>
              </figure>
              <figcaption className="news__card-caption news__card-caption--mobile">
                <p className="news__card-date">{item.date}</p>
                <h5 className="news__card-title">{item.title}</h5>
              </figcaption>
              <p className="news__card-text body--2">{item.text}</p>
            </a>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
}

export default Yangiliklar;
