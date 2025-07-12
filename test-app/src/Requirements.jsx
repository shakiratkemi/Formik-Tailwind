import React, { Component } from "react";
import { FaCheck } from "react-icons/fa6";

export class Requirements extends Component {
  render() {
    return (
      <section className="border border-[#eaecf0] my-[10px] mx-[70px] rounded p-4 mb-[40px]">
        <h2 className="text-black font-bold mb-2">Entry Requirements</h2>
        <h4 className="text-[#475467] font-semibold mb-[15px]">
          Five(5) O'Level credits in SSCE/NECO/NABTEB
        </h4>
        <ul className="text-[#475467] text-[14px]">
          <li className="flex items-center gap-2 mb-[10px]">
            <FaCheck className="text-[#1e6306]" />
            English Language (compulsory)
          </li>
          <li className="flex items-center gap-2 mb-[10px]">
            <FaCheck className="text-[#1e6306]" />
            Mathematics (compulsory)
          </li>
          <li className="flex items-center gap-2 mb-[10px]">
            <FaCheck className="text-[#1e6306]" />
            Biology or Agricultural Science
          </li>
          <li className="flex items-center gap-2 mb-[10px]">
            <FaCheck className="text-[#1e6306]" />
            Chemistry
          </li>
          <li className="flex items-center gap-2 mb-[10px]">
            <FaCheck className="text-[#1e6306]" />
            Physics or Geography
          </li>
        </ul>
      </section>
    );
  }
}

export default Requirements;
