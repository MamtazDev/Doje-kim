import React, { useState } from "react";
import playBtn from "../../assets/section/button_play.png";
import expart2 from "../../assets/section/expert1.png";
import expertVedio from "../../assets/section/expert_videos.png";
import Gallary from "./Gallary";
import arrow from "../../assets/icon/arrow.svg";
import Footer from "../Shared/Footer";
import ExpartEaq from "./ExpartEaq";
import Header from "../Shared/Header";
import { useNavigate } from "react-router-dom";

const allButton = [
  {
    name: "Original Sound",
  },
  {
    name: "Beat & Hook",
  },
  {
    name: "Question on Industry",
  },
  {
    name: "Performance",
  },
  {
    name: "Performance",
  },
  {
    name: "Portrait",
  },
  {
    name: "Guiter Play",
  },
  {
    name: "Self-introduction",
  },
  {
    name: "Personal Video Feedback",
  },
  {
    name: "Co-Writing",
  },
  {
    name: "Co-Writing",
  },
];
const Expart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const navigateToRequest = () => {
    navigate("/process");
  };
  return (
    <div className="Background_basic2 h-100vh">
      <Header />
      <div className="container">
        <div className="row g-lg-5">
          <div className=" dlfexMobile col-md-4 col-sm-12 d-none d-md-block">
            <div class={`player ${isOpen && "playerNow"} `}>
              <img className="w-100" src={expertVedio} />
            </div>
          </div>

          <div className="col-md-8 col-sm-12">
            <div className="d-flex pb-3 border-bottom border-dark">
              <div className="me-3 h-100 VideoPlayProfile">
                <img
                  className="rounded-circle rounded-circle_Img"
                  src={expart2}
                  alt=""
                />
                <div
                  onClick={() => setIsOpen(isOpen)}
                  className=" bg-transparent"
                  type=""
                  data-bs-toggle="modal"
                  data-bs-target="#playerModal"
                >
                  <img
                    height={20}
                    width={20}
                    className=" rounded-circle_play"
                    src={playBtn}
                    alt=""
                  />
                </div>
              </div>

              <div className="text-start">
                <h5>JAY PARK</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod, Lorem ipsum dolor sit amet, consectetur a sed do
                  eiusmod, Lorem ipsum dolor
                </p>
              </div>
            </div>

            <div class="modal fade d-md-none" id="playerModal" tabindex="1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-transparent border-0">
                  <div class="modal-body p-0">
                    <div class="ratio ratio-16x9">
                      <div id="player">
                        <div className="dlfexMobile col-md-4 col-sm-12">
                          <div class={`player ${isOpen && "playerNow"} `}>
                            <button
                              type="button"
                              style={{
                                position: "absolute",
                                top: "10px",
                                right: "5px",
                              }}
                              class="btn-close btn-close-white fs-4"
                              data-bs-dismiss="modal"
                              aria-label="閉じる"
                            ></button>

                            <img className="expert__video" src={expertVedio} />
                          </div>
                          {/* </video> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mt-3">SONGHEE HYUN'S MUSIC CLASS</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod, consectetur adipisicing elit, sed do eiusmod
              </p>
            </div>
            <div className="my-5">
              <div>
                <h5 className="mb-2">What to send:</h5>
                <div className=" p-0 d-flex flex-wrap mb-3">
                  {allButton.slice(0, 8).map((singleButton, index) => (
                    <button
                      key={index}
                      type="button"
                      class="btn btn-outline-dark rounded-pill px-3 me-1 mb-3"
                    >
                      {singleButton.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="mb-2">What to receive:</h5>
                <div className=" p-0 d-flex flex-wrap">
                  {allButton.slice(8, 12).map((singleButton, index) => (
                    <button
                      key={index}
                      type="button"
                      class="btn btn-outline-dark rounded-pill px-3 me-1 mb-3"
                    >
                      {singleButton.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div onClick={navigateToRequest} class="d-grid">
              <button
                class="btn feedback__btn rounded-pill fw-bolder"
                type="button"
              >
                Get Feedback <img className="mx-2" src={arrow} alt="" />
              </button>
            </div>
            <ExpartEaq />
          </div>
        </div>
      </div>
      <div className="footer">
        <Gallary />
        <Footer />
      </div>
    </div>
  );
};

export default Expart;
