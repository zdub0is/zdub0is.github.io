import React from "react";
import { Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Mousewheel } from "swiper";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-cards";
import ".././Tarot.css";
import ffxivProfitThumb from "../assets/xivprofit-thumb.png";
import zduboisThumb from "../assets/zdubois-thumb.png";
import comingSoonThumb from "../assets/coming-soon-thumb.png";

const TarotCarousel = () => {
  const navigate = useNavigate();
  const tarotData = [
    { id: 1, text: "FFXIV Profit", path: "/works/ffxivprofit", img: ffxivProfitThumb },
    { id: 2, text: "zdubois.com", path: "/works/zdubois", img: zduboisThumb },
    { id: 3, text: "Coming Soon..." },
  ];

  const renderItem = (item) => {
    return (
      <div key={item.id} className="tarot-card-wrapper">
        <div className="tarot-card">
          <div className="tarot-card-inner">
            <div className="tarot-card-face tarot-card-back"></div>
            <Card
              className="tarot-card-face tarot-card-front"
              onClick={() => (item.path ? navigate(item.path) : null)}
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
