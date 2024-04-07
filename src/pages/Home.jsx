import React, { useState } from "react";
import SideBar from "../components/SideBar";
import MainMidBar from "../components/MainMidBar";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="flex w-full ">
      <div className="w-[308.22px] bg-[#F9F9F9] h-[100vh]">
        <Navbar />
      </div>
      <div className="w-full flex">
        <MainMidBar />
        <SideBar />
      </div>
    </div>
  );
}

export default Home;

// width: Hug (391.96px)px;
// height: Fixed (853px)px;
// padding: 100px 17.78px 28.44px 17.78px;
// gap: 24.89px;
// opacity: 0px;
