import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projectList } from "./projectList";
const Projects = () => {
  return (
    <section
      className="h-full min-h-[80vh] w-full  px-5  py-10 md:px-20 md:py-0 lg:container lg:mx-auto"
      id="projects"
      data-aos="fade-up"
    >
      <h1 className="text-2xl font-semibold uppercase text-primary dark:text-white">
        <span className="text-brand">//</span> Projects
      </h1>
      <div className="container mt-20 flex flex-wrap justify-center gap-5 md:mx-auto">
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
                <p className="rounded-md px-2 text-sm text-blue-800 dark:bg-blue-200">
                  In development...
                </p>
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
      <div className="smooth--hover flex mt-5 items-center justify-center gap-x-2 text-primary hover:text-brand dark:text-brand dark:hover:text-white md:mx-20">
        <a
          className="decoration underline "
          href="https://github.com/patwicks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discover more repository{" "}
        </a>
        <FiExternalLink />
      </div>
    </section>
  );
};

export default Projects;
