import React from "react";
import "./Tab.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TabSection = ({ setSelectedMenu, selectedMenu }) => {
  return (
    <>
      <div className="style1 d-xl-flex d-none    container flex-wrap justify-content-between pt-5 pb-4 a">
        <ul className="tab__inner style2 Scrolling_navbar">
          {[
            "ALL",
            "MUSIC",
            "ACTING",
            "MODEL",
            "FASHION",
            "DESIGN",
            "SPORTS",
            "BUSINESS",
            "PERFORMANCE",
          ].map((item) => (
            <li
              onClick={() => setSelectedMenu(item)}
              className={`${selectedMenu === item && "activeNav"}  `}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="style1 container LaptopMenu d-xl-none py-5  ">
        <div class="scrollmenu style2">
          {[
            "ALL",
            "MUSIC",
            "ACTING",
            "MODEL",
            "FASHION",
            "DESIGN",
            "SPORTS",
            "BUSINESS",
            "PERFORMANCE",
          ].map((item) => (
            <a
              onClick={() => setSelectedMenu(item)}
              className={`${selectedMenu === item && "activeNav"}  `}
              href="#home"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default TabSection;
