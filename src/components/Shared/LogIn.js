import React, { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Header from "./Header";

const LogIn = () => {
  const [isSigninOpen, setIssigninOpen] = useState(true);

  return (
    <div className="Background_basic h-12vh  footer ">
      <Header />
      {isSigninOpen ? (
        <div className="Login widthLogin mx-auto pb-3">
          <div className="border-bottom border-dark">
            <input className="py-3 border-0  w-100" placeholder="ID" />
          </div>
          <div className="border-bottom border-dark">
            <input
              className="py-3 border-0  w-100"
              type="password"
              placeholder="Password"
            />
          </div>

          <p className="text-end pt-3">비밀번호 찾기</p>

          <div class="d-grid my-5">
            <button
              class="btn btn-lg btn-outline-dark rounded-pill fw-bolder"
              type="button"
            >
              LOG IN
            </button>
          </div>
          <div class="d-grid my-2">
            <button
              class="btn btn-lg btn-dark rounded-pill fw-bolder"
              type="button"
              onClick={() => setIssigninOpen(false)}
            >
              CREATE ACCOUNT
            </button>
          </div>

          <div className="mt-4 social_icons d-flex justify-content-between my-2">
            <button
              class="d-flex align-items-center btn btn-lg btn-outline-dark rounded-pill fw-bolder px-5"
              type="button"
            >
              <AiOutlineGoogle />
              GOOGLE
            </button>
            <br />
            <button
              class="d-flex align-items-center btn btn-lg btn-outline-dark rounded-pill fw-bolder  px-5"
              type="button"
            >
              <FaFacebookF />
              Facebook
            </button>
          </div>
        </div>
      ) : (
        <SignUp isSigninOpen={isSigninOpen} setIssigninOpen={setIssigninOpen} />
      )}
    </div>
  );
};

const SignUp = ({ setIssigninOpen }) => {
  const signupHandler = () => {};

  return (
    <div className="Login widthLogin mx-auto pb-3">
      <div className="border-bottom border-dark">
        <input className="py-3 border-0  w-100" placeholder="ID " />
      </div>
      <div className="border-bottom border-dark">
        <input
          type="password"
          className="py-3 border-0  w-100"
          placeholder="Password "
        />
      </div>
      <div className="border-bottom border-dark">
        <input
          className="py-3 border-0  w-100"
          placeholder="Confirm Password "
          type="password"
        />
      </div>

      <p className="text-end pt-3">비밀번호 찾기</p>

      <div class="d-grid my-5">
        <button
          class="btn btn-lg btn-outline-dark rounded-pill fw-bolder"
          type="button"
          onClick={() => setIssigninOpen(true)}
        >
          Already Have Account?
        </button>
      </div>
      <div class="d-grid my-2">
        <button
          class="btn btn-lg btn-dark rounded-pill fw-bolder"
          type="button"
          onClick={() => signupHandler}
        >
          Singup
        </button>
      </div>

      <div className="mt-4 social_icons d-flex justify-content-between my-2">
        <button
          class="d-flex align-items-center btn btn-lg btn-outline-dark rounded-pill fw-bolder px-5"
          type="button"
        >
          <AiOutlineGoogle />
          GOOGLE
        </button>
        <br />
        <button
          class="d-flex align-items-center btn btn-lg btn-outline-dark rounded-pill fw-bolder  px-5"
          type="button"
        >
          <FaFacebookF />
          Facebook
        </button>
      </div>
    </div>
  );
};

export default LogIn;
