import React from "react";
import { Link } from "react-scroll";

const Header = () => {
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
    <header className="fixed right-0 left-0 top-0 flex h-[80px] w-full select-none items-center gap-x-5 bg-primary px-5 md:px-20">
      <span className="smooth--hover cursor-pointer text-2xl font-bold tracking-widest text-brand hover:text-white">
        PS
      </span>
      <ul className="hidden gap-x-5 text-base font-thin tracking-widest text-white md:flex">
        {link?.map((data, index) => (
          <li key={index}>
            <Link
              className="smooth--hover text-sm hover:opacity-50"
              activeClass="active"
              to={data.to}
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
            >
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
