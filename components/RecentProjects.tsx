import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/AnimateCard";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="pt-20 pb-4" id="projects">
      <h1 className="heading text-gray-300">
        Here are a few of my{" "}
        <span className="text-blue-300">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center px-4 py-1 gap-x-24 gap-y-4 mt-10">
        {projects.map(
          ({ id, title, des, img, iconLists, link, projectLink }) => (
            <div
              key={id}
              className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0 rounded-xl shadow-lg border-blue-300"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-blue-300">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center "
                        style={{ transform: `translateX(${5 * index * 2} px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs  text-sm text-blue-300">
                      <a href={projectLink}>Check live site</a>
                    </p>
                    <FaLocationArrow className="ms-3 " color="#93c5fd" />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
