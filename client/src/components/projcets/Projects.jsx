import React from "react";
import { projectList } from "./projectList";
const Projects = () => {
  return (
    <section
      className="h-full min-h-screen w-full  px-5  md:px-20"
      id="projects"
    >
      <h1 className="text-2xl font-semibold uppercase text-primary dark:text-white">
        <span className="text-brand">//</span> Personal projects
      </h1>
      <div className="container mt-10 flex flex-wrap gap-5">
        {projectList?.map((data, index) => (
          <div
            className=" w-full min-w-[20rem] rounded-sm bg-[#e6e6e6] p-5 dark:bg-secondary md:w-[20rem]"
            key={index}
          >
            <div className="center--content h-[8rem] overflow-hidden">
              <img
                className="h-full w-full object-contain object-center"
                src={data.image}
                alt={data.title}
              />
            </div>
            <h1 className="my-5 text-xl font-semibold text-primary dark:text-white">
              {data.title}
            </h1>
            <p className="my-2 text-primary dark:text-white">
              {data.description}
            </p>
            {data?.technology?.map((data, index) => (
              <li className="text-primary dark:text-white" key={index}>
                {data}
              </li>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
