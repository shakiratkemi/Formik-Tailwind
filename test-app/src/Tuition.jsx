import React, { Component } from "react";

export class Tuition extends Component {
  render() {
    return (
      <section className="border border-[#eaecf0] my-[10px] mx-[70px] rounded p-4 mb-[40px]">
        <h1 className="font-semibold text-[14px] text-[#101828]">
          Tuition Estimate
        </h1>
        <p className="text-[13px] text-[#475467] mt-4">
          &#8358;185,000 - &#8358;200,000 per session
        </p>
        <small className="text-[#b42318] text-[10px] font-semibold">
          *Fees are subject to change
        </small>
      </section>
    );
  }
}

export default Tuition;
