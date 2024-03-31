import logo from "../../assets/Images/Logo.svg";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import FooterLinks from "../Extras/FooterLinks";
import { Link } from "react-router-dom";



const Footer = () => {
    const footerData = [
        {
            title: "ABOUT GEEKSTER",
            data: [
                "Home",
                "Contact Us",
                "FAQs",
                "Privacy Policy",
                "Terms of Use",
                "Refund Policy"
              ]
        },
        {
            title: "COURSES",
            data: [
                "Full Stack - MERN",
                "Data Science & AI",
                "FELLOWSHIP",
                "MERN"
              ]
        },
        {
            title: "EXPLORE",
            data: [
                "Become a mentor",
                "Hire From Us",
                "Masterclass"
              ]
        }
    ]
  return (
    <footer className="w-full px-12 flex-col md:flex-row lg:px-24 py-8 bg-darkBluePrimary gap-8 md:gap-0 flex flex-wrap justify-between">
        <div className="md:w-[30%] flex flex-col items-start gap-8">
            <div className="cursor-pointer">
                <Link to={"/"}><img src={logo} alt="" /></Link>
            </div>
            <div className="flex items-center justify-center gap-4 text-halfWhite">
                <FaYoutube className="cursor-pointer" />
                <FaFacebookSquare className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
                <FaLinkedin className="cursor-pointer" />
            </div>
            <p className="text-[2rem] w-[65%] md:w-[60%] text-white font-bold">With you, every step of the way</p>
            <button className="flex items-center text-white gap-2 border-[1px] border-geeksterGreenPrimary px-4 py-2 rounded-[5rem] hover:text-geeksterGreenPrimary hover:border-white transition-all duration-300 ease-in-out">Start Learning <BsArrowRight /></button>
        </div>
        <div className="w-[70%] flex flex-wrap md:justify-around gap-8">
            {
                footerData.map((item, index) => {
                    return <FooterLinks key={index + "footerLinks"} item={item} />
                })
            }
        </div>
    </footer>
  )
}

export default Footer
