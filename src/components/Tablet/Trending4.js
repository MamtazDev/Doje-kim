import React from "react";
import class3 from "../../assets/section/class3.png";
import class4 from "../../assets/section/class4.png";
import class5 from "../../assets/section/class5.png";
import class6 from "../../assets/section/class6.png";
import class7 from "../../assets/section/class7.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const Trending4 = () => {
    const navigate = useNavigate();
    const navigateToExpert = () => {
      navigate("/expart");
    };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 3,
    },
    tablet1: {
      breakpoint: { max: 1199, min: 992 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 2,
    },
  };

  return (
    <div>
      <p class="title__trending">Trending</p>
      {/* <div class="optional__class d-flex flex-wrap justify-content-between align-items-center"> */}
      <div class="music__inner tending4">

      <Carousel
        responsive={responsive}
        //    autoPlay={true}
        arrows={false}
      >
        <div onClick={navigateToExpert} class="card__box music__box optional__box position-relative">
          <img src={class4} alt="image" />
          <div class="box__content box__inner d-none d-md-block">
            <div class="box__top d-flex align-items-center">
              <span class="me-2">ORIGINAL SOUND</span>
            </div>
            <h3>
              SONGHEE'S{" "}
              <span className="d-md-none d-lg-block">MUSIC CLASS</span>{" "}
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur...</p>
          </div>
          <div class="box__content d-md-none position-absolute trending text-white">
            <div class="box__top d-flex align-items-center">
              <span class="me-2 border-white">ORIGINAL SOUND</span>
            </div>
            <h3>SONGHEE</h3>
            <p> Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
        <div class="card__box music__box optional__box">
          <img src={class5} alt="image" />
          <div class="box__content box__inner d-none d-md-block">
            <div class="box__top d-flex align-items-center">
              <span class="me-2">ORIGINAL SOUND</span>
              {/* <span className='d-none d-md-block'>BEAT & HOOK</span> */}
            </div>
            <h3>
              SONGHEE'S{" "}
              <span className="d-md-none d-lg-block">MUSIC CLASS</span>{" "}
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur...</p>
          </div>
          <div class="box__content d-md-none position-absolute trending text-white">
            <div class="box__top d-flex align-items-center">
              <span class="me-2 border-white">ORIGINAL SOUND</span>
            </div>
            <h3>SONGHEE</h3>
            <p> Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
        <div class="card__box music__box optional__box">
          <img src={class6} alt="image" />
          <div class="box__content box__inner d-none d-md-block">
            <div class="box__top d-flex align-items-center">
              <span class="me-2">ORIGINAL SOUND</span>
              {/* <span className='d-none d-md-block'>BEAT & HOOK</span> */}
            </div>
            <h3>
              SONGHEE'S{" "}
              <span className="d-md-none d-lg-block">MUSIC CLASS</span>{" "}
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur...</p>
          </div>
          <div class="box__content d-md-none position-absolute trending text-white">
            <div class="box__top d-flex align-items-center">
              <span class="me-2 border-white">ORIGINAL SOUND</span>
            </div>
            <h3>SONGHEE</h3>
            <p> Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
        <div class="card__box music__box optional__box">
          <img src={class7} alt="image" />
          <div class="box__content box__inner d-none d-md-block">
            <div class="box__top d-flex align-items-center">
              <span class="me-2">ORIGINAL SOUND</span>
              {/* <span className='d-none d-md-block'>BEAT & HOOK</span> */}
            </div>
            <h3>
              SONGHEE'S{" "}
              <span className="d-md-none d-lg-block">MUSIC CLASS</span>{" "}
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur...</p>
          </div>
          <div class="box__content d-md-none position-absolute trending text-white">
            <div class="box__top d-flex align-items-center">
              <span class="me-2 border-white">ORIGINAL SOUND</span>
            </div>
            <h3>SONGHEE</h3>
            <p> Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
        <div class="card__box music__box optional__box">
          <img src={class3} alt="image" />
          <div class="box__content box__inner d-none d-md-block">
            <div class="box__top d-flex align-items-center">
              <span class="me-2">ORIGINAL SOUND</span>
              {/* <span className='d-none d-md-block'>BEAT & HOOK</span> */}
            </div>
            <h3>
              SONGHEE'S{" "}
              <span className="d-md-none d-lg-block">MUSIC CLASS</span>{" "}
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur...</p>
          </div>
          <div class="box__content d-md-none position-absolute trending text-white">
            <div class="box__top d-flex align-items-center">
              <span class="me-2 border-white">ORIGINAL SOUND</span>
            </div>
            <h3>SONGHEE</h3>
            <p> Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
      </Carousel>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Trending4;
