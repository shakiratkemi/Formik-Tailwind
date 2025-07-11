import React, { Component } from "react";
import { LuDot } from "react-icons/lu";
import "./index.css";

export class Entry extends Component {
  render() {
    return (
      <section className="flex  gap-2 mb-[40px]">
        <div className="border border-[#eaecf0] rounded  my-[10px] mx-[70px] p-4 w-[592px]">
          <h2 className="text-black font-bold mb-2">UTME Subjects</h2>
          <ul className="entry-list">
            <li className="entry-item">
              <LuDot className="entry-icon" />
              English Language
            </li>
            <li className="flex items-center gap-2">
              <LuDot className="text-[#1e6306]" />
              Mathematics
            </li>
            <li className="flex items-center gap-2">
              <LuDot className="text-[#1e6306]" />
              Biology
            </li>
            <li className="flex items-center gap-2">
              <LuDot className="text-[#1e6306]" />
              Chemistry
            </li>
          </ul>
        </div>
        <div className="border border-[#eaecf0] rounded  my-[10px] mx-[70px] p-4 w-[592px] ">
          <h2 className="text-black font-bold mb-2">Direct Entry</h2>
          <ul className="text-[#475467] text-[14px]">
            <li className="flex items-center gap-2">
              <LuDot className="text-[#1e6306]" />
              Two A'Level passes in Biology and Chemistry
            </li>
            <li className="flex items-center gap-2">
              <LuDot className="text-[#1e6306]" />
              Or NCE/OND in relevant field with merit
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Entry;
