import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import class1 from "../../assets/section/talent_card_1.png";
import class2 from "../../assets/section/userAccount2.png";
import class3 from "../../assets/section/userAccount3.png";
import class4 from "../../assets/section/userAccount4.png";
import class5 from "../../assets/section/highlight1.png";
import Trending1 from "../Tablet/Trending1";
import Trending2 from "../Tablet/Trending2";
import Trending3 from "../Tablet/Trending3";
import Trending4 from "../Tablet/Trending4";
import { useNavigate } from "react-router-dom";

const Album = ({ selectedMenu }) => {
  const albums = [
    {
      picture: class1,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
    {
      picture: class2,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
    {
      picture: class3,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
    {
      picture: class4,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
    {
      picture: class5,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
    {
      picture: class2,
      btn1: "ORIGINAL SOUND",
      btn2: "Bear and Hook",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "loren ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
    {
      picture: class2,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
    {
      picture: class2,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
    {
      picture: class2,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
  ];
  const navigate = useNavigate();
  const navigateToExpert = () => {
    navigate("/expart");
  };
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container">
      <div onClick={navigateToExpert} className="row ">
        {albums.slice(0, 1).map((album, index) => (
          <div key={index} className="col-lg-12 col-md-12 col-sm-12 mb-3">
            {selectedMenu === "ALL" && <b className="tranding">Tranding</b>}
            <div
              className="card text-bg-dark cardH1 card_align p-3"
              style={{
                backgroundImage: `url(${album.picture})`,
              }}
            >
              <div className="">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark rounded-pill me-3"
                >
                  {album.btn1}
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark rounded-pill"
                >
                  {album.btn2}
                </button>
                <h5 className="card-title text-dark fw-bolder pt-2">
                  {album.title}
                </h5>
                <p className="card-text text-dark fw-bolder">
                  {album.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-0 ">
        {selectedMenu === "ALL" && <b className="tranding">Tranding</b>}
        <Trending1 />
        <Trending2 />
        <Trending3 />
        <Trending4 />
      </div>
    </div>
  );
};

export default Album;
