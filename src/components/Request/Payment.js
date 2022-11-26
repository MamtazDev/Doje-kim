import React from "react";
import maskGroup from "../../assets/section/MaskGroup.png";
import NextBtn from "./NextBtn";
import "./request.css";

const Payment = () => {
  return (
    <div class="payment__section">
      <div class="container">
        <div class="payment__inner">
          <div class="row flex-wrap-reverse">
            <div class="col-md-6">
              <div class="request__content payment__content">
                <div class="title">
                  <h2>Songhee Hyun’s Music Class</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod, consectetur adipisicing elit, sed do eiusmod
                  </p>
                </div>
                <div class="content">
                  <h4>PERSONAL FEEDBACK</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod, consectetur adipisicing elit, sed do eiusmod
                  </p>
                </div>
                <div class="content">
                  <h4>PAYMENT POLICY</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod, consectetur adipisicing elit, sed do eiusmod
                  </p>
                </div>
                <div class="content">
                  <h4>PRIVACY POLICY</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod, consectetur adipisicing elit, sed do eiusmod
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="play__payment">
                <img src={maskGroup} alt="image" />
              </div>
            </div>
          </div>

          <NextBtn />
        </div>
      </div>
    </div>
  );
};
export default Payment;
