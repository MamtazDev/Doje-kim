import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import girl from "../../assets/section/highlight1.png";

const settings = {
  centerMode: true,
  slidesToShow: 5,
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  dots: false,
  autoplay: true,
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

const Gallary = () => {
  const gallary = [
    {
      name: "Jenny",
      picture: girl,
      likes: "14.2k",
    },
    {
      name: "Jenny",
      picture: girl,
      likes: "14.2k",
    },
    {
      name: "Jenny",
      picture: girl,
      likes: "14.2k",
    },
    {
      name: "Jenny",
      picture: girl,
      likes: "14.2k",
    },
    {
      name: "Jenny",
      picture: girl,
      likes: "14.2k",
    },
    {
      name: "Jenny",
      picture: girl,
      likes: "14.2k",
    },
  ];
  return (
    <div className="container">
      <div className="row my-5 g-4">
        <Slider {...settings}>
          {gallary.map((pic, index) => (
            <div key={index} className="col-lg-2 ">
              <div class="card mx-2  border-0 text-bg-dark">
                <img src={pic.picture} class="card-img" alt="..." />
                <div class="d-flex flex-column justify-content-end card-img-overlay ">
                  <div className="d-flex flex-column justify-content-end">
                    <div>
                      <h5 class="card-title fw-bolder pt-2">{pic.name}</h5>
                      <p class="card-text fw-bolder">{pic.likes}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallary;
