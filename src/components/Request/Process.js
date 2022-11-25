import React from "react";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/icon/arrow_left.png";
import arrowRight from "../../assets/icon/arrow_right.png";
import Header from "../Shared/Header";
import "./request.css";

const Process = () => {
  const buttons = [
    {
      name: "Original Sound",
    },
    {
      name: "Beat & Hook",
    },
    {
      name: "Question on Industry",
    },
  ];
  const navigate = useNavigate();
  const navigateToRequest = () => {
    navigate("/request");
  };
  return (
    <div>
      <Header />

      <div className="process ScrollHome footer">
        <div className="container">
          <div className="">
            <form className="login__form process__form procecss_pg_form">
              <a href="#">
                <img src={arrowLeft} alt="icon" />
              </a>{" "}
              <br />
              <br />
              <label className="text-start" for="name">
                What is your name?
              </label>{" "}
              <br />
              <input type="name" placeholder="name" className="processInput" />
              <div className="feedback" id="request__process">
                <p>Content you want to get feedback</p>
                <div className="feedback__pill d-flex flex-wrap justify-content-start">
                  {buttons.map((bttn, index) => (
                    <a key={index} href="#">
                      {bttn.name}
                    </a>
                  ))}
                </div>
              </div>
              <form onClick={navigateToRequest} className="signup__btn_final">
                <button className="signUp_btn process__btn  d-flex justify-content-between align-items-center ps-3 pe-3 mt-0">
                  Next <img src={arrowRight} alt="image" />
                </button>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
