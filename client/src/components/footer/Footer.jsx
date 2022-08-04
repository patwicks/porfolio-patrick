import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";


const Footer = () => {
  const socialLink = [
    {
      link: "https://github.com/patwicks",
      icon: <FaGithub />,
    },
    {
      link: "https://www.linkedin.com/in/santillan-patrick-john-g-9083b1247/",
      icon: <FaLinkedin />,
    },
    {
      link: "https://www.facebook.com/santillanpatrickjohn16/",
      icon: <FaFacebookF />,
    },
    {
      link: "https://twitter.com/pjsantillan16",
      icon: <FaTwitter />,
    },
  ];
  return (
    <footer className="center--content flex-col gap-y-5 border-t-[1px] border-secondary/20 py-10">
      <h2 className="text-primary dark:text-white">
        &copy; All rights reserved. Dev Pat - 2022
      </h2>
      <div className="center--content gap-x-5">
        {socialLink?.map((data, index) => (
          <a
          className="smooth--hover hover:opacity-80 dark:text-white text-primary"
            key={index}
            href={data?.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
