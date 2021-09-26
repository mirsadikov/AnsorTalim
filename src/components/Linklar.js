import {
  Location,
  Phone,
  Envelope,
  TelegramFill,
  FacebookFill,
} from "akar-icons";

import { Icon } from "@iconify/react";
import circleinstagramIcon from "@iconify/icons-whh/circleinstagram";

function Linklar() {
  return (
    <section className="section section-links">
      <div className="section__head">
        <h2 className="heading--2">Biz bilan bog‘lanish</h2>
      </div>
      <div className="section__body">
        <div className="links__details">
          <Location size={24} />
          <p className="body--1">
            Toshkent shaxri, Yunusobod tumani Shota Rustaveli ko‘chasi, 23-a uy
          </p>
          <Phone size={24} />
          <p className="body--1">
            <a href="tel:+998 90 123 45 67">+998 90 123 45 67</a>
          </p>
          <Envelope size={24} />
          <p className="body--1">
            <a href="mailto:ansortalim@gmail.com">ansortalim@gmail.com</a>
          </p>
        </div>
        <p className="links__social-text">Bizning ijtimoiy tarmoqlar </p>
        <div className="links__social-icons">
          <a href="https://t.me/ansortalim">
            <TelegramFill size={24} />
          </a>
          <a href="https://facebook.com/ansortalim">
            <FacebookFill size={24} />
          </a>
          <a href="https://instagram.com/ansortalim">
            <Icon icon={circleinstagramIcon} width="24" height="24" />
          </a>
        </div>
      </div>
      <div className="links__map">
        {/* Google MAP */}
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34227.20965696025!2d69.24494661618428!3d41.280904721393455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ae840b3dfaf%3A0xdc6aa358bbf04f06!2zMjMgU2hvdGEgUnVzdGF2ZWxpIGtvJ2NoYXNpLCDQotC-0YjQutC10L3RgiwgVXpiZWtpc3Rhbg!5e0!3m2!1sen!2s!4v1632507750165!5m2!1sen!2s"
          // width="700"
          // height="475"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          title="map"
        ></iframe> */}

        {/* Yandex MAP */}
        <div
          style={{ position: "relative", overflow: "hidden", height: "100%" }}
        >
          <a
            href="https://yandex.com/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0px",
            }}
          >
            Tashkent
          </a>
          <a
            href="https://yandex.com/maps/10335/tashkent/geo/1563339912/?ll=69.286087%2C41.353791&utm_medium=mapframe&utm_source=maps&z=12"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Yunusabad District — Yandex.Maps
          </a>
          <iframe
            src="https://yandex.com/map-widget/v1/-/CCUqI2TpTD"
            // width="560"
            // height="400"
            // frameborder="1"
            allowFullScreen={true}
            style={{ position: "relative", border: 0 }}
            title="map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Linklar;
