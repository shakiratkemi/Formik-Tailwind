import React from "react";
import "./App.css";
import { IoIosArrowBack } from "react-icons/io";
import Title from "./Title.jsx";
import Overview from "./Overview.jsx";
import Requirements from "./Requirements.jsx";
import Entry from "./Entry.jsx";
import Outline from "./Outline.jsx";
import Duration from "./Duration.jsx";
import Awarded from "./Awarded.jsx";
import Tuition from "./Tuition.jsx";
import Apply from "./Apply.jsx";
import Footer from "./Footer.jsx";

function Programme() {
  return (
    <section>
      <div className="flex items-center gap-2  py-[10px] px-[70px] text-[#1e6306] text-[12px] font-bold">
        <IoIosArrowBack />
        Programme
      </div>
      <Title />
      <Overview />
      <Requirements />
      <Entry />
      <Outline />
      <Duration />
      <Awarded />
      <Tuition />
      <Apply />
      <Footer />
    </section>
  );
}
export default Programme;
