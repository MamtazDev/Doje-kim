import React from "react";
import tabletInner1 from "../../assets/section/tablet-inner_1.png";
import tabletInner2 from "../../assets/section/tablet-inner_2.png";
import tabletInner3 from "../../assets/section/tablet-inner_3.png";
import tabletInner4 from "../../assets/section/tablet-inner-4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const Trending3 = () => {
  const navigate = useNavigate();
  const navigateToExpert = () => {
    navigate("/expart");
  };
  const Trending = [
    {
      picture: tabletInner1,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE",
      content1: "Lorem ipsum dolor sit amet, consectetur ...sjdjfjjddjdj",
    },
    {
      picture: tabletInner2,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE",
      content1: "Lorem ipsum dolor sit amet, consectetur ...sjdjfjjddjdj",
    },
    {
      picture: tabletInner3,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE",
      content1: "Lorem ipsum dolor sit amet, consectetur ...sjdjfjjddjdj",
    },
    {
      picture: tabletInner4,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE",
      content1: "Lorem ipsum dolor sit amet, consectetur ...sjdjfjjddjdj",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 2,
    },
  };

  return (
    <div>
      <p class="title__trending">Trending</p>
      <div class="music__inner Trending3">
        <Carousel
          id="trending4"
          responsive={responsive}
          // autoPlay={true}
          arrows={false}
        >
          {Trending.map((trend, index) => (
            <div
              onClick={navigateToExpert}
              class="card__box music__box optional__box tab__inner"
            >
              <img src={trend.picture} alt="image" />
              <div class="box__content box__inner">
                <div class="box__top d-flex align-items-center">
                  <span class="me-2">{trend.btn1}</span>
                  <span className="d-none d-md-block">{trend.btn2}</span>
                </div>
                <h3>{trend.title}</h3>
                <p>{trend.content1}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Trending3;
