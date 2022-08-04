import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projectList } from "./projectList";
const Projects = () => {
  return (
    <section
      className="h-full min-h-screen w-full  px-5  py-10 md:px-20 md:py-0"
      id="projects"
      data-aos="fade-up"
    >
      <h1 className="text-2xl font-semibold uppercase text-primary dark:text-white">
        <span className="text-brand">//</span> Projects
      </h1>
      <div className="container mt-20 md:mx-auto flex flex-wrap justify-center gap-5">
        {projectList?.map((data, index) => (
          <div
            className=" relative w-full min-w-[15rem] overflow-hidden rounded-sm bg-[#e6e6e6] p-5 dark:bg-secondary md:w-[18rem]"
            key={index}
          >
            <div className="center--content h-[8rem] w-full overflow-hidden">
              <img
                className="h-full w-full object-contain object-center"
                src={data.image}
                alt={data.title}
              />
            </div>
            <h1 className="my-5 text-xl font-semibold text-primary dark:text-white">
              {data.title}
            </h1>
            <li className="text-sm text-brand">{data.type}</li>
            <p className="my-2 text-primary dark:text-white">
              {data.description}
            </p>
            {data?.technology?.map((data, index) => (
              <li className="text-primary dark:text-white" key={index}>
                {data}
              </li>
            ))}
            <div className="absolute right-5 bottom-5 flex gap-x-5">
              {data?.link === null ? (
                <p className="text-sm dark:bg-blue-200 text-sm rounded-md px-2 text-blue-800">In development...</p>
              ) : (
                <>
                  <a
                    className="smooth--hover rounded-full text-xl text-primary hover:text-brand dark:text-brand dark:hover:text-primary"
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink />
                  </a>
                  <a
                    className="smooth--hover rounded-full text-xl text-primary hover:text-brand dark:text-brand dark:hover:text-primary"
                    href={data.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Projects;
