import React from "react";
import arrowRight from "../../assets/icon/arrow_right.png";
import "./request.css";

const NextBtn = () =>{
    return(
        <form class="login__form">
        <button class="signUp_btn d-flex justify-content-between align-items-center ps-3 pe-3 mt-0">Next <img src={arrowRight} alt="image"/></button>
    </form>
    );
};

export default NextBtn;