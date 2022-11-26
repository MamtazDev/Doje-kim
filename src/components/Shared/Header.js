import React from "react";
import { Link } from "react-router-dom";
import account from "../../assets/icon/account.svg";
import DojaLogo from "../../assets/section/doje_logo1.png";

const Header = () => {
  const menubar = [
    {
      path: "user",
      page: "Account",
    },
    {
      path: "#",
      page: "Feedback",
    },
    {
      path: "logIn",
      page: "Log In",
    },
  ];
  return (
    <div className="px-3 mb-5 sticky-top Header__Bg">
      <nav className="navbar navbar-expand-lg border-bottom border-dark py-2">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="img">
              <Link to="/" className="navbar-brand fw-bolder">
                {" "}
                <img className="img-fluid" height={40} src={DojaLogo} alt="" />
              </Link>
            </div>

            <div className="header__right d-flex justify-content-between align-items-center">
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
                    {menubar.map((menu, index) => (
                      <li key={index}>
                        <a href={menu.path}>{menu.page}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="collapse navbar-collapse d"
            id="navbarTogglerDemo03"
          ></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
