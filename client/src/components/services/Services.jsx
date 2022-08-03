import React from "react";
import { serviceList } from "./serviceList";
const Services = () => {
  return (
    <div
      className="h-full min-h-screen w-full px-5 py-10 md:px-20"
      id="services"
    >
      <h1 className="my-5 text-2xl font-semibold text-primary dark:text-white">
        Services
      </h1>
      <div className="container flex flex-wrap justify-around gap-y-5  md:mx-auto">
        {serviceList?.map((data, index) => (
          <div
            className="rounded-sm bg-[#e6e6e6] p-5  dark:bg-secondary md:w-[17rem]"
            key={index}
          >
            <div className="h-14 w-16 rounded-md bg-brand/20">
              {/* <img
                className="h-5 w-5 object-contain object-center"
                src={data?.icon}
                alt={data.title}
              /> */}
            </div>
            <h1 className="my-2 text-xl font-semibold text-primary dark:text-white">
              {data?.title}
            </h1>
            <p className="font-thin text-primary dark:text-white">
              {data?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
