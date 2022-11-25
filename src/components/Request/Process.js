import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/icon/arrow_left.png";
import arrowRight from "../../assets/icon/arrow_right.png";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import NextBtn from "./NextBtn";
import "./request.css";

const Process = () => {
  const navigate = useNavigate();
  const navigateToRequest = () => {
    navigate("/request");
  };
  return (
    <div>
    <Header/>
    
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
          </label> <br/>
          <input type="name" placeholder="name" className="processInput" />
          {/* <!-- <input type="password" placeholder="Password"> -->
                      <!-- <a href="#" className="forgot_pass">비밀번호 찾기</a>   -->
                      <!-- <button className="login_btn">LOG IN</button> --> */}
          <div className="feedback" id="request__process">
            <p>Content you want to get feedback</p>
            <div className="feedback__pill d-flex flex-wrap justify-content-start">
              <a href="#">Original Sound</a>
              <a href="#">Beat & Hook</a>
              <a href="#">Question on Industry</a>
            </div>
          </div>
          <form onClick={navigateToRequest} className="signup__btn_final">
            <button className="signUp_btn process__btn  d-flex justify-content-between align-items-center ps-3 pe-3 mt-0">
              Next <img src={arrowRight} alt="image" />
            </button>
          </form>
          {/* <NextBtn onClick={navigateToRequest}/> */}
          {/* <!-- <div className="login__google">
                          <a href="#"> <img src="assets/images/icon/google.svg" alt="icon"/> GOOGLE</a>
                          <a href="#"> <img src="assets/images/icon/google.svg" alt="icon"/> GOOGLE</a>
                      </div> --> */}
        </form>
      </div>
    </div>
  </div>
  
  </div>
  );
};
export default Process;
