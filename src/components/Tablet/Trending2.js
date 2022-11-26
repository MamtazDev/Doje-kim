import React from "react";
import tablet4 from "../../assets/section/tablet4.png";
import tablet3 from "../../assets/section/tablet3.png";
import class1 from "../../assets/section/class1.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const Trending2 = () => {
  const navigate = useNavigate();
  const navigateToExpert = () => {
    navigate("/expart");
  };
  const Trending = [
    {
      picture: class1,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      content2: "Lorem ipsum dolor sit amet...",
    },
    {
      picture: tablet4,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      content2: "Lorem ipsum dolor sit amet...",
    },
    {
      picture: tablet3,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      content2: "Lorem ipsum dolor sit amet...",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 2,
    },
  };
  return (
    <div>
      <p class="title__trending">Trending</p>
      <div class="music__inner tending2">
        {/* <div class="d-flex justify-content-between"> */}
        <Carousel
          responsive={responsive}
          //    autoPlay={true}
          arrows={false}
        >
          {Trending.map((trend, index) => (
            <div key={index} class="portion1">
              <div
                onClick={navigateToExpert}
                class="card__box music__box tablet__box tablet__2"
              >
                <img src={trend.picture} alt="image" />
                <div class="box__content">
                  <div class="box__top d-flex align-items-center">
                    <span class="me-2">{trend.btn1}</span>
                    <span className="d-none d-md-block">{trend.btn2}</span>
                  </div>
                  <h3>{trend.title}</h3>
                  <p>{trend.content1}</p>
                </div>
                <div class="box__content box__outter">
                  <div class="box__top d-flex align-items-center">
                    <span class="me-2">{trend.btn1}</span>
                    <span className="d-none d-md-block">{trend.btn2}</span>
                  </div>
                  <h3>{trend.title}</h3>
                  <p>{trend.content2}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        {/* </div>     */}
      </div>
    </div>
  );
};

export default Trending2;
