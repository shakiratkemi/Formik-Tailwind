import React, { Component } from "react";
import { FiUserCheck } from "react-icons/fi";

export class Apply extends Component {
  render() {
    return (
      <section className="bg-[#f2faf0] flex flex-col items-center border border-[#f2faf0] my-[10px] mx-[70px] rounded p-4 mb-[40px] gap-2">
        <FiUserCheck className="text-[#1e6306] font-bold" />
        <h3 className="text-[13px] font-bold mt-[7px]">Ready to Apply</h3>
        <p className="text-[13px] text-[#475467] mb-3">
          Start your application today
        </p>
        <button className="bg-[#1e6306] border border-[#1e6306] rounded-[5px] p-1.5 text-[12px] text-[#fff]">
          Apply now!
        </button>
      </section>
    );
  }
}

export default Apply;
