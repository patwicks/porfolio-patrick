import React, { useContext } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../../context/ThemeContext";
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
  const { theme, setTheme, colorTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <header className="fixed right-0 left-0 top-0 flex h-[80px] w-full select-none items-center gap-x-5 bg-white px-5 dark:bg-primary md:px-20">
      <div className="flex items-center gap-x-5">
        <span className="smooth--hover cursor-pointer text-2xl font-bold tracking-widest text-brand hover:text-white">
          PS
        </span>
        <ul className="hidden gap-x-5 text-base font-normal tracking-widest text-white md:flex">
          {link?.map((data, index) => (
            <li key={index}>
              <Link
                className="smooth--hover text-sm text-primary hover:opacity-50 dark:text-white"
                activeClass="active"
                to={data.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {theme === "light" ? (
        <svg
          className="absolute right-16 h-6 w-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setTheme(colorTheme)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          className="absolute right-16 h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setTheme(colorTheme)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
      <div className="center--content smooth--hover absolute right-4  h-10 w-10 cursor-pointer rounded-full hover:bg-brand/30 dark:text-white md:hidden">
        <svg
          className="h-6 w-6 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
