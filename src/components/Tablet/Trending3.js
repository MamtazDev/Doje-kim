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
          arrows={false}>

          <div onClick={navigateToExpert} class="card__box music__box optional__box tab__inner">
            <img src={tabletInner1} alt="image" />
            <div class="box__content box__inner">
              <div class="box__top d-flex align-items-center">
                <span class="me-2">ORIGINAL SOUND</span>
                <span className="d-none d-md-block">BEAT & HOOK</span>
              </div>
              <h3>SONGHEE</h3>
              <p>Lorem ipsum dolor sit amet, consectetur ...sjdjfjjddjdj</p>
            </div>
          </div>

          <div class="card__box music__box optional__box tab__inner">
            <img src={tabletInner2} alt="image" />
            <div class="box__content box__inner">
              <div class="box__top d-flex align-items-center">
                <span class="me-2">ORIGINAL SOUND</span>
                <span className="d-none d-md-block">BEAT & HOOK</span>
              </div>
              <h3>SONGHEE</h3>
              <p>Lorem ipsum dolor sit amet, consectetur ...sjdjfjjddjdj</p>
            </div>
          </div>

          <div class="card__box music__box optional__box tab__inner">
            <img src={tabletInner3} alt="image" />
            <div class="box__content box__inner">
              <div class="box__top d-flex align-items-center">
                <span class="me-2">ORIGINAL SOUND</span>
                <span className="d-none d-md-block">BEAT & HOOK</span>
              </div>
              <h3>SONGHEE</h3>
              <p>Lorem ipsum dolor sit amet, consectetur ...sjdjfjjddjdj</p>
            </div>
          </div>

          <div class="card__box music__box optional__box tab__inner">
            <img src={tabletInner4} alt="image" />
            <div class="box__content box__inner">
              <div class="box__top d-flex align-items-center">
                <span class="me-2">ORIGINAL SOUND</span>
                <span className="d-none d-md-block">BEAT & HOOK</span>
              </div>
              <h3>SONGHEE</h3>
              <p>Lorem ipsum dolor sit amet, consectetur ...sjdjfjjddjdj</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Trending3;
