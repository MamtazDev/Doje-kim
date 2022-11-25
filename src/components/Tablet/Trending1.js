import React from 'react';
import { useNavigate } from 'react-router-dom';
import tablet1 from "../../assets/section/tablet1.png";
import tablet2 from "../../assets/section/tablet2.png";

const Trending1 = () =>{
    const navigate = useNavigate();
    const navigateToExpert = () => {
      navigate("/expart");
    };
    return(
        <div className='container'>
                <div class="music__inner">
                    <div class="row g-4">
                        <div class="col-6 portion1">
                            <div onClick={navigateToExpert} class="card__box music__box tablet__box">
                            <img src={tablet1} alt="image"/>
                                <div class="box__content">
                                    <div class="box__top d-flex align-items-center">
                                        <span class="me-2">ORIGINAL SOUND</span>
                                        <span  className='d-none d-md-block'>BEAT & HOOK</span>
                                    </div>
                                    <h3>SONGHEE</h3>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                </div>
                                <div class="box__content box__outter">
                                    <div class="box__top d-flex align-items-center">
                                        <span class="me-2">ORIGINAL SOUND</span>
                                        <span  className='d-none d-md-block'>BEAT & HOOK</span>
                                    </div>
                                    <h3>SONGHEE</h3>
                                    <p>SONGHEE’S MUSIC CLASS: Lorem ipsum dolor sit amet...</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 portion1">
                            <div onClick={navigateToExpert} class="card__box music__box tablet__box">
                                <img src={tablet2} alt="image"/>
                                <div class="box__content">
                                    <div class="box__top d-flex align-items-center">
                                        <span class="me-2">ORIGINAL SOUND</span>
                                        <span  className='d-none d-md-block'>BEAT & HOOK</span>
                                    </div>
                                    <h3>SONGHEE</h3>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                </div>
                                <div class="box__content box__outter">
                                    <div class="box__top d-flex align-items-center">
                                        <span class="me-2">ORIGINAL SOUND</span>
                                        <span  className='d-none d-md-block'>BEAT & HOOK</span>
                                    </div>
                                    <h3>SONGHEE</h3>
                                    <p>SONGHEE’S MUSIC CLASS: Lorem ipsum dolor sit amet...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};
export default Trending1;