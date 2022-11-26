import React from "react";

const Footer = () => {
  const footerContent = [
    {
      content:
        "Address : 401F, 45-9, Yeonhui-ro 11ma-gil, Seodaemun-gu, Seoul, Republic of",
    },
    {
      content: "Korea",
    },
    {
      content: "Business license : 000-00-0000",
    },
    {
      content: "Ceo Cpo :KIM HEESOO +82 10-000-0000",
    },
    {
      content: "Company: DOJE",
    },
    {
      content: "Contact: connect@doje.com",
    },
  ];
  return (
    <div>
      <div className="text-center footer py-5 lh-sm">
        {footerContent.map((para, index) => (
          <p key={index}>{para.content}</p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
