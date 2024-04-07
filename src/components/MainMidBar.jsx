import React, { useState } from "react";
import close from "../Images/close.png";
import search from "../Images/search.png";

function MainMidBar() {
  const [searchValue, setSearchValue] = useState("");

  const clearSearch = () => {
    setSearchValue("");
  };

  return (
    <div className="w-full bg-[#F9F9F9] h-[100vh] flex justify-center">
      <div className="custWidth mx-6 h-[833px] pt-[106.67px] flex flex-col gap-[27.56px]">
        <div className="w-full flex justify-center items-center">
          <div className="w-[408px] h-[34.67px] border-[1px] border-black rounded-[2.48px] flex justify-between items-center">
            <img className="w-[14.86px] h-[14.86px] mx-1" src={search} alt="" />
            <input
              className="bg-transparent outline-none text-[11.14px] w-[348.52px] h-[29.71px]"
              placeholder="Search by profile, setting, artifact etc..."
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <img
              className="w-[14.86px] h-[14.86px] mx-1"
              src={close}
              alt=""
              onClick={clearSearch}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-[11.56px]">
            <div className="text-[23.11px] font-normal leading-[34px]">
              Set-up Catalix for success
            </div>
            <div className="text-[15.69px] font-light leading-[26.15px]">
              Get Catalix up to date or start your transformation by following
              the guide below
            </div>
          </div>
        </div>
        <div>
          <div className="flex-col flex gap-[40px] container w-[520.27px] h-[347px] bg-white rounded-[20px] py-[30px] px-[40px] items-center">
            <div className="w-[80px] h-[40px] rounded-[100px] bg-[#539BBB] flex justify-center items-center">
              2/6
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-[24px] font-normal leading-[30px]">
                Build your development value
              </div>
              <div className="text-[24px] font-normal leading-[30px]">
                stream map
              </div>
            </div>
            <div className="bg-[#2F667F] flex justify-center items-center rounded-[100px] gap-[8px] py-[10px] px-[24px] text-white">
              Start Building
            </div>
            <div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMidBar;
