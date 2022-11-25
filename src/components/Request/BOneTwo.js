import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/icon/arrow-left-white.png";
import arrowRight from "../../assets/icon/arrow_right.png";
import tik from "../../assets/icon/tik.png";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import "./request.css";

const BOneTwo = () =>{
    const navigate = useNavigate();
    const navigateToBOne = () => {
      navigate("/bOne");
    };
    const navigateToRequest = () => {
      navigate("/request");
    };
    let activeStyle = {
        color:"black"
      };
    return (
<div>
    <Header/>
    <div class="ScrollHome B12__section">
        <div class="container">
            <div class="B12__inner">
                 <div class="B12__finance">
                    <div class="first__step">
                        <h4>결제 금액을 확인해주세요.</h4>
                        <div class="finance">
                            <p>상품</p>
                            <p>축가</p>
                        </div>
                        <div class="finance">
                            <p>금액</p>
                            <p>금액</p>
                        </div>
                        <div class="finance">
                            <p>할인/혜택</p>
                            <p>- 0원</p>
                        </div>
                        <hr/>
                        <div class="finance">
                            <p>총 결제금액</p>
                            <p>250,000원</p>
                        </div>
                        

                    </div>

                    <div class="second__step">
                        <h4>결제 수단을 선택해주세요.</h4>
                        <div class="payment__way">
                        {/* <NavLink
            to="#"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Paypal
          </NavLink> */}
                            <a href="#">Paypal</a>
                            <a href="#">신용카드</a>
                            <a href="#">카카오페이</a>
                            <a href="#">네이버페이</a>
                            <a href="#">토스</a>
                            <a href="#">기타결제수단</a>
                        </div>
                    </div>
                    <div class="third__step d-flex justify-content-between align-items-center">
                        <img src={tik} alt="icon"/>  <p>위 구매조건을 확인, 결제진행에 동의합니다.</p>
                    </div>

                    
                    <form class="login__form bOneTwo__from d-flex justify-content-between align-items-center">
                        <button onClick={navigateToRequest} > <img src={arrowLeft} alt="icon"/> </button> 
                        <button onClick={navigateToBOne} style={{ width: "68%"} } class="signUp_btn d-flex justify-content-between align-items-center ps-3 pe-3 mt-0">Next <img src={arrowRight} alt="image"/></button>
                    </form>

                 </div>

                 {/* <form class="login__form d-flex justify-content-between align-items-center">
                    <button style={{width: "27%",backgroundColor: "#000",color: "#fff"}}> <img src={arrowLeft} alt="icon"/> </button> 
                    <button onClick={navigateToBOne} style={{ width: "68%"} } class="signUp_btn d-flex justify-content-between align-items-center ps-3 pe-3 mt-0">Next <img src={arrowRight} alt="image"/></button>
                </form> */}
            </div>
        </div>
    </div>
    
</div>
    );
};

export default BOneTwo;