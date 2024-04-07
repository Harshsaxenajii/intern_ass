import React, { useState } from "react";
import vidImg from "../Images/Rene 1.png";
import play from "../Images/play.png";
import bell from "../Images/Bell.png";
import message from "../Images/message.png";

function SideBar() {
  // we can set the progress of video
  const [progress, setProgress] = useState(60);
  const [sec, setSec] = useState(36);
  const [min, setMin] = useState(2);
  return (
    <div className="w-[391px] border-l-[1px] bg-[#FFFFFF] h-[100vh] pt-[70px] pr-[17.78px] pb-[28.44px] pl-[17.78px]">
      <div className="justify-end flex gap-4 mb-8">
        <div className="w-[31.37px] h-[31.37px] flex justify-center items-center shadow-lg rounded-xl">
          <img className=" h-[17.74px]" src={bell} alt="" />
        </div>
        <div className="w-[31.37px] h-[31.37px] flex justify-center items-center shadow-lg rounded-xl">
          <img className=" h-[17.74px]" src={message} alt="" />
        </div>
      </div>
      <div className="w-[356.4px] h-[726px] flex flex-col gap-[21.33px]">
        {/* info section */}
        <div className="flex flex-col gap-[11.56px]">
          <div className="text-[23.11px] font-normal leading-[34px]">
            Get ready to transform
          </div>
          <div className="text-[15.69px] font-light leading-[26.15px]">
            Here's a video to get started. As your transformation progresses,
            you'll get fresh tips and insights here.
          </div>
        </div>
        {/* video section */}
        <div className="rounded-[7.64px] overflow-auto relative">
          <img src={vidImg} alt="" />
          <div className={`w-[${progress}%] h-[7.64px] bg-[#303030]`}></div>
          <div className="absolute w-[82.82px] h-[36.18px] rounded-xl text-white bottom-6 left-5 bg-[#000000]">
            <div className="w-full h-full flex justify-center items-center text-[16.55px]">
              <img src={play} className="w-[25.46px] h-[25.40px] p-1" alt="" />
              {min + ":" + sec}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
