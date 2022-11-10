import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../App.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import MoreT from "./MoreT";
import LoginT from "./LoginT";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const handleClose = () => setNav(!nav);
  return (
    <div className="bg-sky-600	flex items-center justify-evenly h-20 pl-8 ">
      <div className="-m-24  flex-col items-center pl-28  ">
        <img
          className="object-contain pt-4 items-center w-32 sm:text-4xl "
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
          alt="flipkart-logo"
        />
        <div className="flex items-center ">
          <span
            className="underline "
            style={{
              paddingBottom: "6px",
              fontSize: "11px",
              paddingRight: "2px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Explore
          </span>
          <span
            className="underline"
            style={{
              paddingBottom: "6px",
              color: "#F9E107",
              fontSize: "11px",
              fontStyle: "italic",
            }}
          >
            Plus
          </span>
          <img
            className="object-contain w-4 pb-2"
            width="10"
            src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
            alt="flip-star"
          />
        </div>
      </div>

      <div className=" ml-12 bg-white bord rounded h-8 hidden md:flex ">
        <input
          placeholder="Search for Products , brands and more"
          type="text"
          style={{
            width: "400px",
          }}
        />
        <SearchIcon />
      </div>
      <div className="cursor-pointer hidden md:flex ">
        <Tippy className="bg-zinc-200" content={<LoginT />} interactive={true}>
          <button className="border-none p-2 text-sm w-32 text-cyan-600 fonr-bold bg-white cursor-pointer">
            Login
          </button>
        </Tippy>
      </div>
      <div className=" items-center cursor-pointer text-white hidden md:flex ">
        <Tippy content={<MoreT />} interactive={true}>
          <span>More</span>
        </Tippy>
        <ExpandMoreIcon />
      </div>
      <div className="hidden md:flex">
        <div className="last-app ">
          <ShoppingCartIcon />
          <p className="text-white font font-semibold">cart</p>
        </div>
      </div>
      <div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5 " /> : <XIcon className="w-5" />}
        </div>
        <div className="w-20">
          <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full "}>
            <li className="border-b-2 border-zinc-300 w-full">
              <div className="cursor-pointer  ">
                <Tippy content={<LoginT />} interactive={true}>
                  <button className="border-none text-sm w-12 text-cyan-600 font-bold items-center bg-white cursor-pointer">
                    Login
                  </button>
                </Tippy>
              </div>
            </li>
            <li className="border-b-2 border-zinc-300 w-full">
              <div className=" items-center cursor-pointer text-white  ">
                <Tippy content={<MoreT />} interactive={true}>
                  <span className="text-cyan-600">More</span>
                </Tippy>
                <ExpandMoreIcon />
              </div>
            </li>
            <li>
              <div className=" items-center bg-white bord rounded pr-4 ">
                <input
                  className="rounded-sm pt-2  border-none pr-4 "
                  placeholder="Search here"
                  type="text"
                  style={{
                    width: "200px",
                  }}
                />
                <SearchIcon />
              </div>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
