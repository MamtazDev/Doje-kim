import React, { useRef, useState } from "react";

import {
  AiFillTwitterCircle,
  AiFillGoogleCircle,
  AiOutlineCamera,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

import userAc from "../../assets/section/userAccount1.png";
import image1 from "../../assets/section/userProfile.png";
import icon1 from "../../assets/icon/user1.svg";
import icon2 from "../../assets/icon/user2.svg";
import icon3 from "../../assets/icon/user3.svg";
import cross from "../../assets/icon/cross.png";
import tick from "../../assets/icon/tick.png";
import back from "../../assets/icon/Icon_(1).png";
import plus from "../../assets/icon/plus.svg";

import social1 from "../../assets/icon/social2.svg";
import social2 from "../../assets/icon/social3.svg";
import social3 from "../../assets/icon/social1.svg";

import user1 from "../../assets/section/user5.png";
import Header from "../Shared/Header";

function User() {
  const [isEdited, setIsEdited] = useState(false);
  const [isNewAdd, setIsNewAdd] = useState(false);

  const [UserName, setUserName] = useState("SONGHEE HYUN");
  const [UserDescription, setUserDescription] = useState(
    "  What ever I want ! Singer, Dancer Seoul, South Korea Best possible experince!What ever I want ! Singer, Dancer Seoul, South Korea Best possible experince!What ever I want ! Singer, Dancer Seoul, South Korea Best possible experince!What ever I want ! Singer, Dancer Seoul, South Korea Best possible experince!What ever I want ! Singer, Dancer Seoul, South Korea Best possible experince!"
  );

  return (
    <div className="Background_basic h-100vh">
      <Header />
      {isNewAdd ? (
        <div className=" Add_New_Item_Section">
          <div className="Add_New_Item">
            <div className="image_header py-4 d-flex justify-content-between">
              <p onClick={() => setIsNewAdd(!isNewAdd)}>
                <img
                  height={24}
                  width={24}
                  className="img-fluid"
                  onClick={() => setIsNewAdd(!isNewAdd)}
                  src={back}
                  alt="image"
                />
              </p>

              <img
                height={24}
                width={24}
                onClick={() => setIsNewAdd(!isNewAdd)}
                src={tick}
                alt="image"
              />
            </div>
            <div className="image_Upload_container">
              <div className="Image_details">
                <h4>Choose file</h4>
                <small>up to 2GB</small>
              </div>
            </div>
            <div className="mt-3 image_Description_container">
              <div className="Image_Description_details">
                <textarea
                  placeholder="Add a question or context (optional)"
                  backgroundColor="#666"
                  className="w-100 p-2"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="container">
            <div className="users__inner">
              <div className="row gx-0 gx-md-5">
                <div className="col-md-5">
                  {isEdited ? (
                    <div className="user__profile">
                      <div className="profile">
                        <div className="profile_Editable">
                          <img src={image1} alt="image" />
                          <AiOutlineCamera className="tic" />
                        </div>
                        <input type="file" className="d-none" />
                        <div className="user__icon">
                          <img
                            height={24}
                            width={24}
                            className="img-fluid"
                            onClick={() => setIsEdited(!isEdited)}
                            src={cross}
                            alt="image"
                          />

                          <img
                            height={24}
                            width={24}
                            onClick={() => setIsEdited(!isEdited)}
                            src={tick}
                            alt="image"
                          />
                        </div>
                      </div>

                      <section className="details_saved">
                        <div className="users__comment">
                          <h4>Name</h4>
                          <div className=" mb-5 border-bottom border-dark">
                            <input
                              className="py-1 border-0  w-100"
                              type="text"
                              Value={`@${UserName}`}
                            />
                          </div>

                          <h4>Bio</h4>
                          <div className=" mb-5 border-bottom border-dark">
                            <textarea
                              className="py-1 border-0  w-100"
                              type="text"
                              value={UserDescription}
                            />
                          </div>
                        </div>
                        <div className="users__social">
                          <div className="d-flex justify-content-between">
                            <div className="mr-3">
                              <AiFillGoogleCircle size={30} />
                            </div>
                            <div className=" w-100 mb-5 border-bottom border-dark">
                              <input
                                className="py-1 border-0  w-100"
                                type="text"
                                Value={`@${UserName}`}
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="mr-3">
                              <BsFacebook size={28} />
                            </div>
                            <div className=" w-100 mb-5 border-bottom border-dark">
                              <input
                                className="py-1 border-0  w-100"
                                type="text"
                                Value={`@${UserName}`}
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="mr-3">
                              <AiFillTwitterCircle size={30} />
                            </div>
                            <div className=" w-100 mb-5 border-bottom border-dark">
                              <input
                                className="py-1 border-0  w-100"
                                type="text"
                                Value={`@${UserName}`}
                              />
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  ) : (
                    <div className="user__profile">
                      <div className="profile">
                        <img src={image1} alt="image" />
                        <div className="user__icon">
                          <img
                            onClick={() => setIsNewAdd(!isNewAdd)}
                            src={plus}
                            alt="image"
                          />
                            <img  className="mx-3"
                            onClick={() => setIsEdited(!isEdited)}
                            src={icon3}
                            alt="image"
                          />
                          <img src={icon2} alt="image" />

                        
                        </div>
                      </div>

                      <section className="details_saved">
                        <div className="users__comment">
                          <h4>{UserName}</h4>
                          <p>{UserDescription}</p>
                        </div>
                        <div className="users__social">
                          <AiFillGoogleCircle size={30} />
                          <BsFacebook size={28} className="mx-3" />
                          <AiFillTwitterCircle size={30} />
                        </div>
                      </section>
                    </div>
                  )}
                </div>
                <div className="col-md-7">
                  <div className="users__accounts ">
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                      <div key={index} className="user__acc">
                        <img src={userAc} alt="image" />
                        <div className="users__content">
                          <img src={user1} alt="image" />
                          <div className="content">
                            <p>
                              APPLICATION FOR <br /> <a href="#">JAY PARK</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;

{
  /* <section className="details_saved">
<div className="users__comment">
  <h4>Name</h4>
  <div className=" mb-5 border-bottom border-dark">
    <input
      className="py-1 border-0  w-100"
      type="text"
      Value={`@${UserName}`}
    />
  </div>

  <h4>Bio</h4>
  <div className=" mb-5 border-bottom border-dark">
    <textarea
      className="py-1 border-0  w-100"
      type="text"
      value={UserDescription}
    />
  </div>
</div>
<div className="users__social">
  <AiFillGoogleCircle size={30} />
  <BsFacebook size={28} className="mx-3" />
  <AiFillTwitterCircle size={30} />
</div>
</section> */
}
