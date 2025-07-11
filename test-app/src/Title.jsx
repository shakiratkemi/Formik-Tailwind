import React from "react";
import "./App.css";

function Title() {
  return (
    <section className="bg-[url('/programmeimage.jpg')] bg-cover bg-center h-30 text-white p-4 my-[10px] mx-[70px] rounded mb-[40px]">
      <h2 className="text-xl font-bold">B.Agric. Animal Nutrition</h2>
      <p className="text-[10px] font-normal mt-2">
        College of Animal Science and Livestock Production - COLANIM
      </p>
      <button className="mt-3 px-1 py-1 bg-white text-green-700 rounded text-[11px] font-normal">
        Session: 2025/2026
      </button>
    </section>
  );
}

export default Title;
