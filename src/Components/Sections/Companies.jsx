import CompanyCard from "../Extras/CompanyCard";
import paypal_logo_blue from "../../assets/Images/paypal_logo_blue.svg";
import rakuten_logo from "../../assets/Images/rakuten_logo.svg";
import google_logo from "../../assets/Images/google_logo.svg";
import amazon_logo_black from "../../assets/Images/amazon_logo_black.svg";
import goldman_sachs_logo from "../../assets/Images/goldman_sachs_logo.svg";
import hcl_logo from "../../assets/Images/hcl_logo.svg";
import cognizant_logo from "../../assets/Images/cognizant_logo.svg";
import accenture_logo from "../../assets/Images/accenture_logo.svg";
import bosch_logo from "../../assets/Images/bosch_logo.svg";
import ola_logo from "../../assets/Images/ola_logo.svg";
import oracle_logo_red from "../../assets/Images/oracle_logo_red.svg";
import { MdOutlineCall } from "react-icons/md";

const Companies = () => {
  const company1 = [
    paypal_logo_blue,
    ola_logo,
    oracle_logo_red,
    cognizant_logo,
    rakuten_logo,
    bosch_logo,
    amazon_logo_black,
    google_logo,
  ];
  const company2 = [
    accenture_logo,
    rakuten_logo,
    google_logo,
    goldman_sachs_logo,
    hcl_logo,
    cognizant_logo,
    amazon_logo_black,
    bosch_logo,
  ];
  const company3 = [
    cognizant_logo,
    hcl_logo,
    google_logo,
    accenture_logo,
    bosch_logo,
    rakuten_logo,
    goldman_sachs_logo,
    amazon_logo_black,
  ];
  const company4 = [
    accenture_logo,
    cognizant_logo,
    rakuten_logo,
    google_logo,
    hcl_logo,
    amazon_logo_black,
    bosch_logo,
    goldman_sachs_logo,
  ];

  return (
    <div className="w-full relative flex flex-col items-center gap-12 my-16">
      <h1 className="text-white text-[1.2rem] md:text-[2rem] font-semibold w-[90%] md:w-[70%] text-center">
        800+ Companies have hired Geekster Learners
      </h1>
      <div className="w-full flex flex-col md:items-center gap-8 pl-8 overflow-x-auto">
        <div className="md:w-auto w-[1000px] flex items-center gap-6 lg:flex-wrap">
          {company1 &&
            company1.map((item, idx) => {
              return <CompanyCard image={item} key={idx + "companyCard"} />;
            })}
        </div>
        <div className="md:w-auto w-[1000px] flex items-center gap-6 lg:flex-wrap pl-12">
          {company2 &&
            company2.map((item, idx) => {
              return <CompanyCard image={item} key={idx + "companyCard"} />;
            })}
        </div>
        <div className="md:w-auto w-[1000px] flex items-center gap-6 lg:flex-wrap">
          {company3 &&
            company3.map((item, idx) => {
              return <CompanyCard image={item} key={idx + "companyCard"} />;
            })}
        </div>
        <div className="md:w-auto w-[1000px] flex items-center gap-6 lg:flex-wrap pl-12">
          {company4 &&
            company4.map((item, idx) => {
              return <CompanyCard image={item} key={idx + "companyCard"} />;
            })}
        </div>
      </div>
      <div className="w-[80%] flex items-center justify-between md:justify-center md:flex-wrap">
        <div className="px-2 md:px-16 text-center flex flex-col items-center border-r-input border-r-[3px]">
          <h1 className=" whitespace-nowrap text-yellowText text-[1.6rem] md:text-[2rem] font-semibold">
            33 LPA
          </h1>
          <p className="text-halfWhite font-light">Highest Salary</p>
        </div>
        <div className="px-2 md:px-16 text-center flex flex-col items-center border-r-input border-r-[3px]">
          <h1 className=" whitespace-nowrap text-yellowText text-[1.6rem] md:text-[2rem] font-semibold">
            8 LPA
          </h1>
          <p className="text-halfWhite font-light">Average Salary</p>
        </div>
        <div className="px-2 md:px-16 text-center flex flex-col items-center">
          <h1 className=" whitespace-nowrap text-yellowText text-[1.6rem] md:text-[2rem] font-semibold">
            800+
          </h1>
          <p className="text-halfWhite font-light">Hiring Partners</p>
        </div>
      </div>
      <div className="w-[90%] flex items-center justify-center gap-3 md:gap-8">
        <button className="md:hidden whitespace-nowrap text-[0.75rem] bg-geeksterGreenPrimary border-[1px] border-geeksterGreenPrimary text-white py-2 px-6 rounded-lg transition-all ease-in-out duration-300 hover:bg-transparent hover:text-geeksterGreenPrimary flex items-center gap-2">
          Request Callback
        </button>
        <button className="border-[1px] text-[0.75rem] md:text-[0.875rem] whitespace-nowrap border-geeksterGreenPrimary text-geeksterGreenPrimary py-2 px-6 rounded-lg hover:bg-geeksterGreenPrimary hover:text-white transition-all ease-in-out duration-300">
          View all companies
        </button>
        <button className="hidden text-[0.875rem] bg-geeksterGreenPrimary border-[1px] border-geeksterGreenPrimary text-white py-2 px-6 rounded-lg transition-all ease-in-out duration-300 hover:bg-transparent hover:text-geeksterGreenPrimary md:flex items-center gap-2">
          <span>Talk to Counsellor</span> <MdOutlineCall />
        </button>
      </div>
      <div className="md:block hidden bottomBackShadow absolute top-[30%] right-[14%] w-[15rem] h-[25rem] bg-bottomShadowLinear"></div>
      <div className="md:block hidden bottomBackShadow absolute top-[30%] left-[14%] w-[15rem] h-[25rem] bg-leftShadowLinear"></div>
    </div>
  );
};

export default Companies;
