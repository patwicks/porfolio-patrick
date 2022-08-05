import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const SideHeader = ({ show, onClose }) => {
  const link = [
    {
      title: "Profile",
      to: "profile",
    },
    {
      title: "Services",
      to: "services",
    },
    {
      title: "Projects",
      to: "projects",
    },
    {
      title: "Contact",
      to: "contact",
    },
  ];
  return (
    <div
      className={`fixed top-0 bottom-0 h-screen w-[50vw] bg-slate-200 px-5 py-10  transition-all duration-300 ease-in-out md:hidden ${
        show ? `right-0` : `-right-[100vw]`
      }`}
    >
      <div onClick={onClose}>
        <AiOutlineClose />
      </div>

      <ul className="mt-10 flex flex-col justify-center">
        {link?.map((data, index) => (
          <li className="my-1" key={index}>
            <Link
              className="smooth--hover text-md w-full text-primary hover:opacity-50"
              activeClass="active"
              to={data.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              onClick={onClose}
            >
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideHeader;
