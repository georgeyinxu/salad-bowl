"use client";

import { headerStyles } from "@/styles/header";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useState } from "react";

export default function Home() {
  const address = useAddress();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <main
      style={{
        backgroundImage: `url('/images/why-sald.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center py-10 md:min-h-screen">
        <img
          src="/images/sv-logo.svg"
          alt="salad ventures logo"
          className="w-[164px] md:w-[240px]"
        />
        <h1
          className="font-sora font-bold text-[24px] sm:text-[30px] xl:text-[42px] md:tracking-[0.2em] mt-6 text-center"
          style={headerStyles}
        >
          SALAD BOWL
        </h1>
        <h2 className="font-sora font-semibold text-[18px] md:text-[24px] w-[80%] md:w-full md:tracking-[5%] md:leading-[25.2px] text-white mt-6 text-center">
          Stake your $SALD to earn rewards!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[95%] mt-8">
          <div className="bg-[#082748] border-2 border-[#00FFF0] bg-opacity-80 rounded-xl py-8 px-6 mx-4">
            <div className="flex justify-between items-center">
              <h3 className="font-sora font-semibold text-[16px] md:text-xl text-white">
                Total Staked
              </h3>
            </div>
            <h2 className="font-sora font-semibold text-white text-[18px] md:text-2xl mt-4">
              0<span className="text-[14px] md:text-[18px] pl-2">$SALD</span>
            </h2>
          </div>
          <div className="bg-[#082748] border-2 border-[#00FFF0] bg-opacity-80 rounded-xl py-8 px-6 mx-4">
            <div className="flex justify-between items-center">
              <h3 className="font-sora font-semibold text-[16px] md:text-xl text-white">
                Estimated Rewards
              </h3>
            </div>
            <div className="flex justify-between items-center mt-4">
              <h2 className="font-sora font-semibold text-white text-[18px] md:text-2xl">
                0
                <span className="text-[14px] md:text-[18px] pl-2">$GREENS</span>
              </h2>
            </div>
          </div>
          <div className="bg-[#082748] border-2 border-[#00FFF0] bg-opacity-80 rounded-xl py-8 px-6 mx-4 md:row-span-2 col-span-1 md:col-span-2 lg:col-span-1">
            {address ? (
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-sora font-semibold text-[16px] md:text-xl text-white">
                    Your Staking Dashboard
                  </h3>
                </div>
                <div className="flex flex-col xl:flex-row items-start justify-between xl:items-center mt-2">
                  <h4
                    className="font-sora font-semibold text-[16px]"
                    style={headerStyles}
                  >
                    Staked
                  </h4>
                  <h2 className="font-sora font-semibold text-[16px] md:text-[18px] text-white">
                    10,000{" "}
                    <span className="text-[14px] md:text-[18px]">$SALD</span>
                  </h2>
                </div>
                <div className="flex flex-col xl:flex-row items-start justify-between xl:items-center mt-2">
                  <h4
                    className="font-sora font-semibold text-[16px]"
                    style={headerStyles}
                  >
                    Rewards
                  </h4>
                  <h2 className="font-sora font-semibold text-[16px] md:text-[18px] text-white">
                    10,000{" "}
                    <span className="text-[14px] md:text-[18px]">$GREENS</span>
                  </h2>
                </div>
                <div className="flex flex-col xl:flex-row items-start justify-between xl:items-center mt-2">
                  <h4
                    className="font-sora font-semibold text-[16px]"
                    style={headerStyles}
                  >
                    APR
                  </h4>
                  <h2 className="font-sora font-semibold text-[16px] md:text-[18px] text-white">
                    188 %
                  </h2>
                </div>
                <div className="flex flex-col xl:flex-row items-start justify-between xl:items-center mt-2">
                  <h4
                    className="font-sora font-semibold text-[16px]"
                    style={headerStyles}
                  >
                    Available to Stake
                  </h4>
                  <h2 className="font-sora font-semibold text-[16px] md:text-[18px] text-white">
                    5,000{" "}
                    <span className="text-[14px] md:text-[18px]">$SALD</span>
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-6">
                  <label className="shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-full w-full border-2 border-[#00FFF0] bg-[#082748]">
                    <input
                      type="checkbox"
                      className="sr-only flex items-center justify-center"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <p
                      className={`space-x-[6px] rounded-full py-2.5 text-lg font-medium w-full text-center ${
                        !isChecked ? "text-primary bg-[#f4f7ff]" : ""
                      }`}
                    >
                      Stake
                    </p>
                    <p
                      className={`space-x-[6px] rounded-full py-2.5 text-lg font-medium w-full text-center ${
                        isChecked
                          ? "text-primary bg-[#f4f7ff]"
                          : "text-body-color"
                      }`}
                    >
                      Unstake
                    </p>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <img src="/images/$sald-token.svg" alt="$SALD Token" />
                    </div>
                    <input
                      type="number"
                      id="stake-input"
                      className="block w-full p-4 pl-16 pr-24 text-lg text-white font-semibold font-sora rounded-[40px] bg-[#020F36] placeholder:text-white focus:ring-[#00FFF0] focus:outline-none focus:border-ring-[#00FFF0] focus:ring-2"
                      required
                    />
                    <div className="absolute right-2.5 bottom-2.5 pr-2 py-2 bg-[#020F36] rounded-sm z-10">
                      <h2
                        className="font-semibold text-lg"
                        style={headerStyles}
                      >
                        $SALD
                      </h2>
                    </div>
                  </div>
                  <button
                    className="font-bold font-sora text-[16px] md:text-xl md:text-[16px] px-3 py-4 text-black bg-gradient-to-b from-white to-btn-blue-end uppercase text-center leading-6 rounded-[40px] w-full"
                  >
                    { isChecked ? "UNSTAKE" : "STAKE"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-bl from-button-start to-button-end rounded-2xl border-2 border-[#3AF0F0] border-opacity-50 flex items-center justify-center">
                <ConnectWallet
                  className="!font-bold !font-sora !uppercase !text-center !leading-6 !text-transparent !bg-clip-text !bg-gradient-to-b !from-white !to-[#5EFFF5]"
                  btnTitle="Connect to Wallet"
                />
              </div>
            )}
          </div>
          <div className="bg-[#082748] border-2 border-[#00FFF0] bg-opacity-80 rounded-xl py-8 px-6 mx-4 md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-8">
              <div className="md:mt-4">
                <h3
                  className="font-sora font-semibold text-[16px] md:text-xl"
                  style={headerStyles}
                >
                  Staking Token
                </h3>
                <h2 className="font-sora font-semibold text-[18px] md:text-2xl text-white">
                  $SALD
                </h2>
              </div>
              <div className="md:mt-4">
                <h3
                  className="font-sora font-semibold text-[16px] md:text-xl"
                  style={headerStyles}
                >
                  Reward Token
                </h3>
                <h2 className="font-sora font-semibold text-[18px] md:text-2xl text-white">
                  $GREENS
                </h2>
              </div>
              <div className="md:mt-4">
                <h3
                  className="font-sora font-semibold text-[16px] md:text-xl"
                  style={headerStyles}
                >
                  Reward Token Supply
                </h3>
                <h2 className="font-sora font-semibold text-[18px] md:text-2xl text-white truncate">
                  1,000,000,000
                </h2>
              </div>
              <div className="md:mt-4">
                <h3
                  className="font-sora font-semibold text-[16px] md:text-xl"
                  style={headerStyles}
                >
                  Unlocks In
                </h3>
                <h2 className="font-sora font-semibold text-[18px] md:text-2xl text-white">
                  88 days <span className="font-thin">(Estimated)</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
