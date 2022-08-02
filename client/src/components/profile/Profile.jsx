import React from "react";
import SVG_DEVELOPER from "./assets/developer.svg";
import { techData } from "./techData";

const Profile = () => {
  return (
    <section
      className="center--content min-h-screen bg-primary px-5 py-20 text-white md:px-20"
      id="profile"
    >
      <div className="container flex flex-col justify-between gap-x-5 md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl">
            Hi, I'm <span className="font-bold text-brand">Patrick</span>
          </h1>
          <h2 className="text-3xl font-medium leading-loose my-1">Web Developer</h2>
          <p className="font-extralight">
            I love automating manual processes through my web development
            skills. I am a full-stack web developer based in Pampanga,
            Philippines.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {techData?.map((data, index) => (
              <div
                className="smooth--hover flex h-[24px] cursor-pointer  items-center justify-center gap-x-1 rounded-md bg-secondary px-2 md:hover:bg-brand/50"
                key={index}
              >
                <img src={data.icon} alt={data.title} />
                <span className="text-[12px]">{data.title}</span>
              </div>
            ))}
          </div>
          {/* button */}
          <div className="mt-14 flex gap-x-5">
            <button className="smooth--hover w-28 rounded-sm border border-brand bg-brand py-1 hover:bg-transparent ">
              Hire me
            </button>
            <button className="center--content smooth--hover flex w-28 rounded-sm border border-brand py-1 text-sm hover:bg-brand">
              Resume
              <span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        {/* left */}
        <div className="hidden w-1/2 items-center  justify-center md:flex">
          <div className="h-[80%] w-[80%]">
            <img
              className="h-full w-full object-scale-down object-center"
              src={SVG_DEVELOPER}
              alt="developer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
