import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <section className="bg-[#6b7280] flex justify-between items-center text-gray-300 px-[60px] py-[20px] mt-[50px] text-xs">
        <p>
          &copy; 2025 Federal University of Agriculture, Abeokuta designed by
          Sysbeams Limited
        </p>
        <ul className="flex list-none gap-[20px]">
          <li>Privacy</li>
          <li>Policy</li>
          <li>Terms of Service</li>
        </ul>
      </section>
    );
  }
}

export default Footer;
