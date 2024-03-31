import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo.svg";
import Button from "../Extras/Button";
import NavBarLink from "../Extras/NavBarLink";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  const [sidebar, setSiderbar] = useState(false);
  return (
    <header className="flex w-full justify-around md:px-14 md:justify-between lg:justify-around items-center py-4 md:bg-transparent bg-[#0B130F] relative">
      <div>
        <Link to={"/"}>
          <img className="sm:w-auto sm:h-auto w-[6rem] h-full" src={logo} alt="" />
        </Link>
      </div>
      <nav className={`hidden md:flex flex-col gap-8 fixed top-0 ${sidebar ? "right-0" : "right-[-50%]"} transition-all duration-300 z-[10] w-[50%] lg:static py-8 px-2 lg:p-0 lg:bg-transparent bg-white h-[100vh] lg:h-auto`}>
        <ul className="flex flex-col lg:flex-row list-none gap-4 transition-all duration-300 ease-in-out">
          <li>
            <NavBarLink text={"Full Stack - MERN"} link="/" setSiderbar={setSiderbar} />
          </li>
          <li>
            <NavBarLink text={"Data Science & Gen AI"} link="/datascience" setSiderbar={setSiderbar} />
          </li>
          <li>
            <NavBarLink text={"Self Learn"} link="/selflearn" setSiderbar={setSiderbar} />
          </li>
          <li>
            <NavBarLink text={"Masterclass"} link="/masterclass" setSiderbar={setSiderbar} />
          </li>
        </ul>
        <RxCross2 className={`fixed lg:hidden  top-4 right-4 text-2xl ${sidebar ? "block" : "hidden"}`} onClick={() => {
          setSiderbar(false);
        }} />

        <div className="md:flex  items-center justify-around lg:hidden">
          <p className="font-medium text-geeksterGreenPrimary cursor-pointer text-sm md:block hidden">
            Sign In
          </p>
          <Button text={"Register"} />
        </div>
      </nav>
      <div className="flex items-center gap-8">
        <p className="font-medium text-geeksterGreenPrimary cursor-pointer text-sm md:block hidden">
          Sign In
        </p>
        <Button text={"Book Free Classes"} />
        <GiHamburgerMenu className={`absolute top-5 right-4 lg:hidden md:block hidden text-white text-2xl ${sidebar ? "hidden" : "block"}`} onClick={() => {
          setSiderbar(true);
        }} />
      </div>
    </header>
  );
};

export default Header;
