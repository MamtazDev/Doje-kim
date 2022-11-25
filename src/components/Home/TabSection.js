import React, { useEffect, useState } from "react";
import "./Tab.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  centerMode: true,
  slidesToShow: 5,
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  dots: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        dots: false,
        autoplay: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        dots: false,
        autoplay: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        dots: false,
        autoplay: true,
      },
    },
  ],
};

const TabSection = ({ setSelectedMenu, selectedMenu }) => {
  return (
    <>
      <div className="style1 d-xl-flex d-none    container flex-wrap justify-content-between pt-5 pb-4 a">
        <ul className="tab__inner style2 Scrolling_navbar">
          {[
            "ALL",
            "MUSIC",
            "ACTING",
            "MODEL",
            "FASHION",
            "DESIGN",
            "SPORTS",
            "BUSINESS",
            "PERFORMANCE",
          ].map((item) => (
            <li
              onClick={() => setSelectedMenu(item)}
              className={`${selectedMenu === item && "activeNav"}  `}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="style1 container LaptopMenu d-xl-none py-5  ">
        <div class="scrollmenu style2">
          {[
            "ALL",
            "MUSIC",
            "ACTING",
            "MODEL",
            "FASHION",
            "DESIGN",
            "SPORTS",
            "BUSINESS",
            "PERFORMANCE",
          ].map((item) => (
            <a
              onClick={() => setSelectedMenu(item)}
              className={`${selectedMenu === item && "activeNav"}  `}
              href="#home"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* <div className="style1  container d-flex flex-wrap justify-content-between pt-5 pb-4 a">
        <ul className="tab__inner style2 Scrolling_navbar">
          <Slider {...settings}>
            {[
              "ALL",
              "MUSIC",
              "ACTING",
              "MODEL",
              "FASHION",
              "DESIGN",
              "SPORTS",
              "BUSINESS",
              "PERFORMANCE",
            ].map((item) => (
              <div
                onClick={() => setSelectedMenu(item)}
                className={`${selectedMenu === item && "activeNav"}  `}
              >
                {item}
              </div>
            ))}
          </Slider>
        </ul>
      </div> */}

      {/* <div className="style1  container d-flex flex-wrap justify-content-between pt-5 pb-4 a my-5">
        <Slider {...settings}>
          {[
            "ALL",
            "MUSIC",
            "ACTING",
            "MODEL",
            "FASHION",
            "DESIGN",
            "SPORTS",
            "BUSINESS",
            "PERFORMANCE",
          ].map((pic, index) => (
            <div key={index} className="col-lg-2 ">
              <div
                onClick={() => setSelectedMenu(pic)}
                class="card mx-2   border-1 text-center text-bg-dark"
                className={`${selectedMenu === pic && "activeNav"}  `}
              >
                <h5>{pic}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
    </>
  );
};

export default TabSection;
