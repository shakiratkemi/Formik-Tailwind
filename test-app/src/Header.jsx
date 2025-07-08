import React from "react";
import "./App.css";

function Header() {
  return (
    <section className="flex items-center justify-between py-[10px] px-[60px] border-b-[1.5px] border-[#95919144]">
      <img src="/funaab.jpeg" alt="FUNAAB Logo" className="h-10 w-auto" />
      <button className="text-red-400">Login</button>
    </section>
  );
}
export default Header;
