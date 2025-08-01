import React, { Component } from "react";
import "./App.css";

export class Overview extends Component {
  render() {
    return (
      <section className="border border-[#eaecf0] my-[10px] mx-[70px] rounded p-4 mb-[40px]">
        <h1 className="font-semibold text-[14px] text-[#101828]">
          Programme Overview
        </h1>
        <p className="text-[13px] text-[#475467] mt-4">
          A comprehensive programme that combines theoretical foundation with
          practical applications in computing, software development, and
          information technology.
        </p>
      </section>
    );
  }
}

export default Overview;
