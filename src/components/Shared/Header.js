import React from "react";
import { Link } from "react-router-dom";
import search from "../../assets/icon/search.svg";
import account from "../../assets/icon/account.svg";

import DojaLogo from "../../assets/section/doje_logo1.png";

const Header = () => {
  return (
    <div className="px-3 mb-5 sticky-top Header__Bg">
      <nav className="navbar navbar-expand-lg border-bottom border-dark py-2">
        <div className="container-fluid">
    <div className="d-flex justify-content-between align-items-center w-100">
      
        <div className="img">
        <Link to="/" className="navbar-brand fw-bolder"> <img className="img-fluid" height={40} src={DojaLogo} alt="" /></Link>
        </div>
      
      <div className="header__right d-flex justify-content-between align-items-center">
          {/* <div className="search">
            <img src={search} alt="icon" />
          </div> */}

          <div className="search-container">
            <form action="/search" method="get">
              <input
                className="search"
                id="searchleft"
                type="search"
                name="q"
                placeholder="Search"
              />
              <label className="button searchbutton" for="searchleft">
                <span className="mglass">&#9906;</span>
              </label>
            </form>
          </div>
          <div className="account">
            <a href="#">
              <img src={account} alt="icon" />
            </a>
            <div className="account__menu">
              <ul className="">
                {/* {["Account", "Feedback", "Log out"].map((item) => (
                  <li>
                    <a href="#">{item}</a>
                  </li>
                ))} */}
                <li>
                  <a href="user">Account</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
                <li>
                  <a href="logIn">Log In</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="menubar">
            <span></span>
            <span></span>
          </div> */}
      </div>
    </div>
         
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          {/* <a className="navbar-brand fw-bolder" href="#"></a> */}
          <div className="collapse navbar-collapse d" id="navbarTogglerDemo03">
            {/* <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/" className="nav-link active fw-bolder">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/expart"
                  className="nav-link active fw-bolder"
                  href="#"
                >
                  Expart
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className="nav-link active fw-bolder" href="#">
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/process"
                  className="nav-link active fw-bolder"
                  href="#"
                >
                  Request
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/tablet"
                  className="nav-link active fw-bolder"
                  href="#"
                >
                  Tablet
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/logIn"
                  className="nav-link active fw-bolder"
                  href="#"
                >
                  Log In
                </Link>
              </li>
            </ul> */}
            {/* <form className="d-flex" role="search">
              <img className="me-4" src={search} alt="" />
              <img src={account} alt="" />
            </form> */}
          



          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
