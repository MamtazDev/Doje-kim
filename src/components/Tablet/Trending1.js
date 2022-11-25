import React from "react";
import { useNavigate } from "react-router-dom";
import tablet1 from "../../assets/section/tablet1.png";
import tablet2 from "../../assets/section/tablet2.png";

const Trending1 = () => {
  const navigate = useNavigate();
  const navigateToExpert = () => {
    navigate("/expart");
  };
  const trending = [
    {
      picture: tablet1,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      content2: "SONGHEE’S MUSIC CLASS: Lorem ipsum dolor sit amet...",
    },
    {
      picture: tablet2,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      content2: "SONGHEE’S MUSIC CLASS: Lorem ipsum dolor sit amet...",
    },
  ];
  return (
    <div className="container">
      <div class="music__inner">
        <div class="row g-4">
          {trending.map((trend, index) => (
            <div key={index} class="col-6 portion1">
              <div
                onClick={navigateToExpert}
                class="card__box music__box tablet__box"
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
        </div>
      </div>
    </div>
  );
};
export default Trending1;
