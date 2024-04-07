import React, { useState } from "react";
import chart from "../Images/NAVBAR/Chart.png";
import leftCir from "../Images/NAVBAR/Left circle.png";
import logout from "../Images/NAVBAR/Logout.png";
import home from "../Images/NAVBAR/Rectangle 74.png";
import rocket from "../Images/NAVBAR/Rocket.png";
import setting from "../Images/NAVBAR/Settings.png";
import timer from "../Images/NAVBAR/Timer.png";
import box from "../Images/NAVBAR/Vector 156.png";
import layer from "../Images/NAVBAR/Vector.png";

function Navbar() {
  const [active, setActive] = useState("home");
  return (
    <div className="pt-[17px] pr-[8.89px] pb-[8.89px] pl-[14px] w-full h-full">
      <div className="relative bg-[#2F667F] flex flex-col items-center gap-[48px] w-full h-full rounded-[35.56px] pt-[102.22px] pr-[0px] pb-[102.22px] pl-[0px]">
        <div className="h-[40px] w-[40px] flex items-center justify-center absolute top-6 right-5">
          <img className="h-[33.33px] w-[33.33px]" src={leftCir} alt="" />
        </div>
        <div className="flex items-center justify-center gap-[10.67px]">
          <img className="w-[35.56px] h-[35.56px]" src={box} alt="" />
          <div className="font-semibold text-[42.67px] text-white">Catalix</div>
        </div>
        <div className="flex flex-col w-[336.44px] items-center h-[350.22px] gap-[9.78px]">
          <div
            className={`${
              active == "home" && "bg-[#539BBB]"
            } hover:bg-[#539BBB] w-[236.44px] h-[62.22px] px-[22.22px] rounded-[17.78px] flex items-center text-[17.78] font-light text-white gap-[15.11px]`}
          >
            <img className="w-[21.57px] h-[20.57px]" src={home} alt="" />
            Home
          </div>
          <div
            className={`${
              active == "activ" && "bg-[#539BBB]"
            } hover:bg-[#539BBB] w-[236.44px] h-[62.22px] px-[22.22px] rounded-[17.78px] flex items-center text-[17.78] font-light text-white gap-[15.11px]`}
          >
            <img className="w-[21.57px] h-[20.57px]" src={timer} alt="" />
            Activities
          </div>
          <div
            className={`${
              active == "analy" && "bg-[#539BBB]"
            } hover:bg-[#539BBB] w-[236.44px] h-[62.22px] px-[22.22px] rounded-[17.78px] flex items-center text-[17.78] font-light text-white gap-[15.11px]`}
          >
            <img className="w-[21.57px] h-[20.57px]" src={chart} alt="" />
            Analytics
          </div>
          <div
            className={`${
              active == "trans" && "bg-[#539BBB]"
            } hover:bg-[#539BBB] w-[236.44px] h-[62.22px] px-[22.22px] rounded-[17.78px] flex items-center text-[17.78] font-light text-white gap-[15.11px]`}
          >
            <img className="w-[21.57px] h-[20.57px]" src={rocket} alt="" />
            Transformations
          </div>
          <div
            className={`${
              active == "lib" && "bg-[#539BBB]"
            } hover:bg-[#539BBB] w-[236.44px] h-[62.22px] px-[22.22px] rounded-[17.78px] flex items-center text-[17.78] font-light text-white gap-[15.11px]`}
          >
            <img className="w-[21.57px] h-[20.57px]" src={layer} alt="" />
            Library
          </div>
        </div>
        <div className="border-t-[1px] py-[42.44px] w-[236.44px] h-[149.33px]">
          <div
            className={`hover:bg-[#539BBB] w-[236.44px] h-[62.22px] px-[22.22px] rounded-[17.78px] flex items-center text-[17.78] font-light text-white gap-[15.11px]`}
          >
            <img className="w-[21.57px] h-[20.57px]" src={setting} alt="" />
            Setting
          </div>
          <div
            className={`hover:bg-[#539BBB] w-[236.44px] h-[62.22px] px-[22.22px] rounded-[17.78px] flex items-center text-[17.78] font-light text-white gap-[15.11px]`}
          >
            <img className="w-[21.57px] h-[20.57px]" src={logout} alt="" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
// width: Hug (285.33px)px;
// height: Hug (800px)px;
// padding: 102.22px 0px 102.22px 0px;
// gap: 48px;
// border-radius: 35.56px 0px 0px 0px;
// opacity: 0px;
