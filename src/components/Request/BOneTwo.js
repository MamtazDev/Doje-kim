import React from "react";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/icon/arrow-left-white.png";
import arrowRight from "../../assets/icon/arrow_right.png";
import tik from "../../assets/icon/tik.png";
import Header from "../Shared/Header";
import "./request.css";

const BOneTwo = () => {
  const navigate = useNavigate();
  const navigateToBOne = () => {
    navigate("/bOne");
  };
  const navigateToRequest = () => {
    navigate("/request");
  };
  const details = [
    {
      key: "상품",
      value: "축가",
    },
    {
      key: "금액",
      value: "금액",
    },
    {
      key: "할인/혜택",
      value: "- 0원",
    },
    {
      key: "총 결제금액",
      value: "250,000원",
    },
  ];
  const buttons = [
    {
      name: "Paypal",
    },
    {
      name: "신용카드",
    },
    {
      name: "기타결제수단",
    },
    {
      name: "토스",
    },
    {
      name: "네이버페이",
    },
    {
      name: "기타결제수단",
    },
  ];
  return (
    <div>
      <Header />
      <div class="ScrollHome B12__section">
        <div class="container">
          <div class="B12__inner">
            <div class="B12__finance">
              <div class="first__step">
                <h4>결제 금액을 확인해주세요.</h4>
                {details.slice(0, 3).map((detail, index) => (
                  <div key={index} class="finance">
                    <p>{detail.key}</p>
                    <p>{detail.value}</p>
                  </div>
                ))}
                <hr />
                {details.slice(3, 4).map((detail, index) => (
                  <div key={index} class="finance">
                    <p>{detail.key}</p>
                    <p>{detail.value}</p>
                  </div>
                ))}
              </div>

              <div class="second__step">
                <h4>결제 수단을 선택해주세요.</h4>
                <div class="payment__way">
                  {buttons.map((bttn, index) => (
                    <a key={index} href="#">
                      {bttn.name}
                    </a>
                  ))}
                </div>
              </div>
              <div class="third__step d-flex justify-content-between align-items-center">
                <img src={tik} alt="icon" />{" "}
                <p>위 구매조건을 확인, 결제진행에 동의합니다.</p>
              </div>

              <form class="login__form bOneTwo__from d-flex justify-content-between align-items-center">
                <button onClick={navigateToRequest}>
                  {" "}
                  <img src={arrowLeft} alt="icon" />{" "}
                </button>
                <button
                  onClick={navigateToBOne}
                  style={{ width: "68%" }}
                  class="signUp_btn d-flex justify-content-between align-items-center ps-3 pe-3 mt-0"
                >
                  Next <img src={arrowRight} alt="image" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BOneTwo;
