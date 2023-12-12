import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";
import React from "react";

const NavBar = () => {
  const address = useAddress();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const [showDisconnect, setShowDisconnect] = React.useState<boolean>(false);

  const short = (addr?: string) => {
    if (!addr) return null;

    return `${addr.slice(0, 5)}…${addr.slice(-4)}`;
  };

  return (
    <nav className="bg-[#030D19] sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://salad.ventures" className="flex items-center">
          <img
            src="/images/sv-logo.svg"
            className="h-8 mr-3"
            alt="Salad Ventures Logo"
          />
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden text-[#A4FBFF]"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            showMobileMenu ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 items-center justify-center">
            <li>
              <div className="bg-gradient-to-bl from-button-start to-button-end rounded-xl border border-[#3AF0F0] border-opacity-50">
                <ConnectWallet
                  className="!font-bold !font-sora !uppercase !text-center !leading-6 !text-transparent !bg-clip-text !bg-gradient-to-b !from-white !to-[#5EFFF5]"
                  btnTitle="Connect to Wallet"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
