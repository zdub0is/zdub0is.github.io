import React from "react";
import { Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Mousewheel } from "swiper";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-cards";
import "../assets/css/Tarot.css";
import ffxivProfitThumb from "../assets/img/xivprofit-thumb.png";
import xivpipyThumb from "../assets/img/xivprofit-python-thumb.png";
import comingSoonThumb from "../assets/img/coming-soon-thumb.png";

const TarotCarousel = () => {
  const tarotData = [
    { id: 1, text: "FFXIV Profit", path: "https://zdub0is.github.io/xivprofit/", img: ffxivProfitThumb },
    { id: 2, text: "FFXIV Profit Backend", path: "https://github.com/zdub0is/XIVpipy", img: xivpipyThumb },
    { id: 3, text: "Coming Soon..." },
  ];
  const handleNavigation = (path) => {
    if (path) {
      const newWindow = window.open();
      newWindow.opener = null;
      newWindow.location.href = path;
      newWindow.target = '_blank';
    }
  }
  const renderItem = (item) => {
    return (
      <div key={item.id} className="tarot-card-wrapper">
        <div className="tarot-card">
          <div className="tarot-card-inner">
            <div className="tarot-card-face tarot-card-back"></div>
            <Card
              aria-label={item.text}
              className="tarot-card-face tarot-card-front"
              onClick={() => handleNavigation(item.path)}
              style= {item.img ? {backgroundImage: `url(${item.img})`} : {backgroundImage: `url(${comingSoonThumb})`}}
            >
            
            </Card>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        mousewheel={true}
        simulateTouch={true}
        modules={[EffectCards, Mousewheel]}
        centeredSlides={true}
        rebuildOnUpdate={true}
      >
        {tarotData.map((item) => (
          <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default TarotCarousel;
