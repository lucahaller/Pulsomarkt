import React from "react";
import first from "../Assets/Images/first.png";
import texto from "../Assets/Images/DIGITAL.png";
const Project = () => {
  return (
    <div
      className="bg-cover bg-center overflow-x-hidden  flex h-screen w-full"
      style={{ backgroundImage: `url(${first})` }}
    >
      <div className="flex justify-start items-center ">
        <div className="text-white ml-40 ">
          <div className="text-9xl flex flex-col gap-0 p-0 leading-none">
            <p className="m-0 text-shadow ">DIGITAL</p>
            <p className="m-0 shadow-text-shadow-dark">MARKETING</p>
          </div>

          <p className="text-3xl">AND WEB SOLUTIONS</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
