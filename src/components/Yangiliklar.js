import { useState, useEffect } from "react";

const news = [
  {
    title: "Dasturchilik orqali million?",
    date: "12/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news1.png",
  },
  {
    title: "Qanday boshlash kerak?",
    date: "10/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news2.png",
  },
  {
    title: "FAANG kompaniyalari.",
    date: "09/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news3.png",
  },
  {
    title: "Qanday boshlash kerak?",
    date: "10/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news2.png",
  },
  {
    title: "FAANG kompaniyalari.",
    date: "09/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news3.png",
  },
  {
    title: "Dasturchilik orqali million?",
    date: "12/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news1.png",
  },
  {
    title: "FAANG kompaniyalari.",
    date: "09/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news3.png",
  },
  {
    title: "Qanday boshlash kerak?",
    date: "10/06/2021",
    text: "Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo’lganman va men....",
    img: "news2.png",
  },
];
function Yangiliklar() {
  const [expand, setExpand] = useState(false);
  const [currentNews, setCurrentNews] = useState([]);

  useEffect(() => {
    setCurrentNews(expand ? news : news.slice(0, 3));
  }, [expand]);

  return (
    <section className="section section-yangiliklar">
      <div className="section__head">
        <h2 className="heading--2">Yangiliklar</h2>
        <a
          onClick={() => setExpand((state) => !state)}
          className="btn--underlined"
        >
          {!expand ? "Barcha yangiliklar" : "Kamroq"}
        </a>
      </div>
      <div className="section__body">
        {currentNews.map((item) => (
          <a href="#" className="news__card">
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
            <p className="news__card-text body--2">{item.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Yangiliklar;
