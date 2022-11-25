import React, { useState } from "react";
import arrowRight from "../../assets/icon/arrow_right.png";
import arrowLeft from "../../assets/icon/arrow_left.png";
import "./request.css";

import NextBtn from "./NextBtn";
import { useNavigate } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Request = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();
    const navigateToPayment = () => {
        navigate("/bOneTwo");
    };
    const navigateToProcess = () => {
        navigate("/process");
    };

    const requestContents = [
        {
            title: "Songhee Hyun’s Music className",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod,  consectetur adipisicing elit, sed do eiusmod",
            subTitle1: "CONTENTS GUIDLINE",
            subContent1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod, consectetur adipisicing elit, sed do eiusmod",
            subTitle2: "RECOMMENDATION",
            subContent2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod, consectetur adipisicing elit, sed do eiusmod",
        },
        {
            title: "Songhee Hyun’s Music className",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod,  consectetur adipisicing elit, sed do eiusmod",
            subTitle1: "CONTENTS GUIDLINE",
            subContent1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod, consectetur adipisicing elit, sed do eiusmod",
            subTitle2: "RECOMMENDATION",
            subContent2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod, consectetur adipisicing elit, sed do eiusmod",
        },

    ]
    return (

        <div>
            <Header />
            <div className=" Background_basic request__basic">


                <div className="request__section">
                    <div className="container">
                        <div className="request__inner">
                            <a onClick={navigateToProcess} href="#"><img src={arrowLeft} alt="icon" /></a> <br /><br />
                            <div className="row">
                                <div className="col-md-6 order-2 order-md-1">
                                    <div className="request__content">
                                        {/* {
                                requestContents.map((requestContent, index) =>{
                                   <div key={index}>
                                      <div className="title">
                                <h2>{requestContent.title}</h2>
                                <p>{requestContent.content}
                                </p>
                            </div>
                            <div className="content">
                                <h4>{requestContent.subTitle1}</h4>
                                <p>{requestContent.subContent1}
                                </p>
                            </div>
                            <div className="content">
                                <h4>{requestContent.subTitle2}</h4>
                                <p>{requestContent.subContent2}
                                </p>
                            </div>
                                   </div> 
                                })
                            } */}
                                        <div className="title">
                                            <h2>Songhee Hyun’s Music className</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed do eiusmod,  consectetur adipisicing elit, sed do eiusmod
                                            </p>
                                        </div>
                                        <div className="content">
                                            <h4>CONTENTS GUIDLINE</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed do eiusmod,  consectetur adipisicing elit, sed do eiusmod
                                            </p>
                                        </div>
                                        <div className="content">
                                            <h4>RECOMMENDATION</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed do eiusmod,  consectetur adipisicing elit, sed do eiusmod
                                            </p>
                                        </div>
                                        <div className="title">
                                            <h2>Songhee Hyun’s Music className</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed do eiusmod,  consectetur adipisicing elit, sed do eiusmod
                                            </p>
                                        </div>
                                        <div className="content">
                                            <h4>CONTENTS GUIDLINE</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed do eiusmod,  consectetur adipisicing elit, sed do eiusmod
                                            </p>
                                        </div>
                                        <div className="content">
                                            <h4>RECOMMENDATION</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed do eiusmod,  consectetur adipisicing elit, sed do eiusmod
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-md-2 ">
                                    <div className="select__file">
                                        <div className="wrapper">
                                            <form className="login__form process__form upload__form">
                                                {/* <!-- <h1>Beautiful CSS-Only File Inputs</h1>
                                    <p>Create beautifully designed, CSS-only, semantic and accessible file upload buttons with the <code>label</code> element.</p> --> */}

                                                <input value={selectedFile}
                                                    onChange={(e) => setSelectedFile(e.target.files[0])} type="file" id="file" />
                                                <label className="text-center" htmlFor="file"> <p>CHOOSE FILE</p> <br /> <span>upto 2GB</span> </label>

                                                <textarea name="question" id="question" placeholder="Add a question or context (optional)"></textarea>
                                                <p className="request__p">0-100</p>


                                                <button onClick={navigateToPayment} className="signUp_btn signUp_btn_req d-flex justify-content-between align-items-center ps-3 pe-3 mt-5">
                                                    Next <img src={arrowRight} alt="image" />
                                                </button>
                                            </form>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* <form onClick={navigateToPayment} class="login__form">
                <button class="signUp_btn d-flex justify-content-between align-items-center ps-3 pe-3 mt-0">
                Next <img src={arrowRight} alt="image" />
              </button>
            </form> */}
                        </div>
                    </div>
                </div>


            </div>

        </div>

    );
};

export default Request;




