import React from "react";
import first from "../Assets/Images/first.png";
import texto from "../Assets/Images/DIGITAL.png";
import Nav from "./Nav";
const Project = () => {
  return (
    <div
      className="bg-cover bg-center overflow-x-hidden  flex h-screen w-full"
      style={{ backgroundImage: `url(${first})` }}
    >
      <Nav className="bg-transparent" />
      <div className="flex justify-start  items-center ">
        <div className="text-white lg:ml-40 ml-10">
          <div className="lg:text-8xl text-8xl flex flex-col gap-0 p-0 leading-none">
            <p className="m-0 text-shadow font-raleway  ">DIGITAL</p>
            <p className="m-0 text-shadow font-raleway  ">MARKETING</p>
          </div>

          <p className="text-3xl font-mono">AND WEB SOLUTIONS</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
