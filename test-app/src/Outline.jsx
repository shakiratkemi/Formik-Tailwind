import React, { Component } from "react";
import { GoDotFill } from "react-icons/go";

export class Outline extends Component {
  render() {
    return (
      <section className="border border-[#eaecf0] my-[10px] mx-[70px] rounded p-4 mb-[40px]">
        <h2 className="text-black font-bold mb-[15px]">Course Outline</h2>
        <div className="flex text-[14px]">
          <div className="flex-1 space-y-2">
            <div className="bg-[#f2faf0] text-[#475467] flex items-center rounded p-2 w-[530px]">
              {" "}
              <GoDotFill className="text-[#1e6306] mr-2" />
              Introduction to Agricultural Extension
            </div>
            <div className="bg-[#f2faf0] text-[#475467] flex items-center rounded p-2 w-[530px]">
              {" "}
              <GoDotFill className="text-[#1e6306] mr-2" />
              Communication and Extension Methods
            </div>
            <div className="bg-[#f2faf0] text-[#475467] flex items-center rounded p-2 w-[530px]">
              {" "}
              <GoDotFill className="text-[#1e6306] mr-2" />
              Crop Production and Extension
            </div>
            <div className="bg-[#f2faf0] text-[#475467] flex items-center rounded p-2 w-[530px]">
              {" "}
              <GoDotFill className="text-[#1e6306] mr-2" />
              Agricultural Policy and Development
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <div className="bg-[#f2faf0] text-[#475467] flex items-center rounded p-2 w-[530px]">
              {" "}
              <GoDotFill className="text-[#1e6306] mr-2" />
              Rural Sociology and Development
            </div>
            <div className="bg-[#f2faf0] text-[#475467] flex items-center rounded p-2 w-[530px]">
              {" "}
              <GoDotFill className="text-[#1e6306] mr-2" />
              Farm Management and Economics
            </div>
            <div className="bg-[#f2faf0] text-[#475467] flex items-center rounded p-2 w-[530px]">
              {" "}
              <GoDotFill className="text-[#1e6306] mr-2" />
              Livestock Management
            </div>
            <div className="bg-[#f2faf0] text-[#475467] flex items-center rounded p-2 w-[530px]">
              {" "}
              <GoDotFill className="text-[#1e6306] mr-2" />
              Research Methods in Agriculture
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Outline;
