import React from "react";
import roundCross from "../../assets/icon/round_cross.png";
import "./request.css";
import Header from "../Shared/Header";

const BTwo = () => {
  return (
    <div>
      <Header />
      <div class="ScrollHome B2__section">
        <div class="container">
          <div class="B2__inner">
            <div class="B1__main">
              <img src={roundCross} alt="image" />
              <h4>피드백 요청 완료</h4>
              <p>
                탤런트의 메시지 전달 완료 시 핸드폰으로 알려드려요. 메시지
                요청은 7일간 유효하며, 이후 만료될 수 있습니다. 탤런트의 일정
                또는 사정에 따라 요청이 취소될 수 있습니다. 요청 만료 또는 취소
                시 자동으로 결제가 취소됩니다.
              </p>

              <form class="login__form">
                <button class="signUp_btn process__btn d-flex justify-content-center align-items-center ps-3 pe-3 mt-0">
                  Back To Home
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTwo;
