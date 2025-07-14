import React from "react";
import "./App.css";

function Header() {
  return (
    <section className="flex items-center justify-between py-[10px] px-[60px] border-b-[1px] border-[#d0d5dd]">
      <img src="/funaab.jpeg" alt="FUNAAB Logo" className="h-10 w-auto" />
      <div className="flex items-center gap-10">
        <button className="border border-[#d0d5dd] rounded-[5px] p-1.5 text-[12px]">
          Login
        </button>
        <button className="bg-[#1e6306] border border-[#1e6306] rounded-[5px] p-1.5 text-[12px] text-[#fff]">
          Signup
        </button>
      </div>
    </section>
  );
}
export default Header;
