import React, { Component } from "react";

export class Duration extends Component {
  render() {
    return (
      <section className="border border-[#eaecf0] my-[10px] mx-[70px] rounded p-4 mb-[40px]">
        <div className="border-b-[1px] border-[#d0d5dd] pb-2">
          <h2 className="text-black font-bold mb-2">Programme Duration</h2>
          <h4 className="text-[#475467] text-[12px] font-semibold">UTME</h4>
          <p className="text-[11px]">5 years</p>
        </div>

        <div className="pt-2">
          <h4 className="text-[#475467] text-[12px] font-semibold">
            Direct Entry
          </h4>
          <p className="text-[11px]">4 years</p>
        </div>
      </section>
    );
  }
}

export default Duration;
