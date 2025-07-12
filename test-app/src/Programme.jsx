import React from "react";
import "./App.css";
import { IoIosArrowBack } from "react-icons/io";
import Title from "./Title.jsx";
import Overview from "./Overview.jsx";
import Requirements from "./Requirements.jsx";
import Entry from "./Entry.jsx";
import Outline from "./Outline.jsx";

function Programme() {
  return (
    <div>
      <div className="flex items-center gap-2  py-[10px] px-[70px] text-[#1e6306] text-[12px] font-bold">
        <IoIosArrowBack />
        Programme
      </div>
      <Title />
      <Overview />
      <Requirements />
      <Entry />
      <Outline />
    </div>
  );
}
export default Programme;
