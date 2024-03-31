import memory from "../../assets/Images/memory.svg";
import iitGuwahati from "../../assets/Images/iit-guwahati.svg";
import nsdc from "../../assets/Images/NSDC.svg";
import workspace from "../../assets/Images/workspace_premium.svg";
import business_center from "../../assets/Images/business_center.svg";
import developer_mode_tv from "../../assets/Images/developer_mode_tv.svg";
import recaptcha from "../../assets/Images/RecaptchaLogo.svg";
import { useEffect, useState } from "react";
import Select from "../Extras/Select";
import { MdKeyboardArrowRight } from "react-icons/md";
import bg_lines from "../../assets/Images/bg_lines.svg";

const Hero = () => {
  const [highQ, setHighQ] = useState("default");
  const [year, setYear] = useState("default");
  const [learnerImages, setLearnerImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const learnersImageData = [
        {
          image: "amazon 1.png",
          logo: "amazon_logo.svg",
        },
        {
          image: "airtel.png",
          logo: "airtel_logo.svg",
        },
        {
          image: "oracle.png",
          logo: "oracle_logo.svg",
        },
        {
          image: "amazon 2.png",
          logo: "amazon_logo.svg",
        },
        {
          image: "paypal 1.png",
          logo: "paypal_logo.svg",
        },
        {
          image: "amazon 3.png",
          logo: "amazon_logo.svg",
        },
        {
          image: "paypal 2.png",
          logo: "paypal_logo.svg",
        },
        {
          image: "zolo.png",
          logo: "zolo_logo.svg",
        },
        {
          image: "shiprocket.png",
          logo: "shiprocket_logo.svg",
        },
        {
          image: "idfc.png",
          logo: "idfc_logo.png",
        },
      ];
      const importedImages = await Promise.all(
        learnersImageData.map(async (imageData) => {
          const image = await import(`../../assets/Images/${imageData.image}`);
          const imageLogo = await import(
            `../../assets/Images/${imageData.logo}`
          );
          return { image: image.default, logo: imageLogo.default };
        })
      );
      setLearnerImages(importedImages);
    };

    importImages();
  }, []);

  return (
    <div className="w-full flex flex-col gap-24 items-center">
      <div className="w-full relative flex items-start justify-between flex-col gap-8 md:gap-0 md:flex-row px-8 lg:px-28">
        <div className="flex flex-col w-full md:w-[50%] lg:w-[55%] items-start gap-4">
          <div className="flex gap-2 bg-white py-[0.2rem] px-3 rounded shadow-aiPowered">
            <img src={memory} alt="" />
            <p className="text-darkBluePrimary text-[0.875rem] font-semibold">
              AI Powered
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-[1.275rem] md:text-[3rem]">
              Fullstack Web Development
            </span>{" "}
            <span className="text-white font-bold text-[1.3rem] md:text-[2.275rem]">
              with placement assistance
            </span>
          </div>
          <div className="flex flex-col pt-2 gap-4 items-start">
            <p className="font-bold text-geeksterGreenPrimary text-[1.25rem]">
              In collaboration with:
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-3 bg-white rounded-lg py-4 md:py-2 px-2 md:px-4 font-medium text-black ">
                <img
                  className="w-6 h-6 lg:w-auto lg:h-auto"
                  src={iitGuwahati}
                  alt=""
                />
                <p className="text-[0.8rem] whitespace-nowrap md:text-[1rem]">
                  IIT Guwahati
                </p>
              </div>
              <div className=" bg-white rounded-lg py-2 sm:px-4">
                <img className="md:w-auto md:px-6 md:h-6 lg:h-10" src={nsdc} alt="" />
              </div>
            </div>
            <div className="flex flex-col pt-4 items-start gap-3">
              <div className="flex items-start md:items-center gap-[0.5625rem] text-grayPrimary">
                <img src={workspace} alt="" />
                <p>Learn DSA, MERN, AWS to become top 1% developer</p>
              </div>
              <div className="flex items-start md:items-center gap-[0.5625rem] text-grayPrimary">
                <img src={business_center} alt="" />
                <p>
                  Curriculum design and delivered by experts from Google
                  Microsoft and Amazon
                </p>
              </div>
              <div className="flex items-start md:items-center gap-[0.5625rem] text-grayPrimary">
                <img src={developer_mode_tv} alt="" />
                <p>Build projects like Google Drive, Amazon, Myntra, boAT</p>
              </div>
            </div>
            <div className="mt-4 w-full p-5 md:p-4 rounded-lg flex flex-wrap justify-center items-center gap-6 bg-[#142522]">
              <div className="flex flex-col items-center md:border-r-[1px] md:pr-6 border-r-grayPrimary ">
                <span className="text-geeksterGreenPrimary font-semibold">
                  10000+
                </span>
                <span className="text-halfWhite text-xs">
                  Live Learning Hours
                </span>
              </div>
              <div className="flex flex-col items-center md:border-r-[1px] md:pr-10 border-r-grayPrimary ">
                <span className="text-geeksterGreenPrimary font-semibold">
                  800+
                </span>
                <span className="text-halfWhite text-xs">Hiring Partners</span>
              </div>
              <div className="flex flex-col items-center md:border-r-[1px] md:pr-10 border-r-grayPrimary ">
                <span className="text-geeksterGreenPrimary font-semibold">
                  33 LPA
                </span>
                <span className="text-halfWhite text-xs">
                  Highest CTC Offered
                </span>
              </div>
              <div className="flex flex-col items-center border-r-grayPrimary ">
                <span className="text-geeksterGreenPrimary font-semibold">
                  8LPA
                </span>
                <span className="text-halfWhite text-xs">Average CTC</span>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-[30%] md:w-[40%] py-4 bg-white md:flex flex-col items-center gap-4 rounded-lg hidden">
          <p className="text-2xl text-center">
            Book a{" "}
            <span className="font-bold text-geeksterGreenPrimary">FREE</span>{" "}
            Demo Class!
          </p>
          <form
            action=""
            className="flex flex-col gap-3 w-full px-8 items-center"
          >
            <input
              className="w-full h-[2.5rem] pl-4 text-inputPlaceholder outline-none bg-input rounded-[0.25rem]"
              type="text"
              placeholder="Full Name*"
              required
            />
            <div className="flex w-full h-[2.5rem] gap-3 items-center self-start">
              <input
                className="w-[15%] px-2 h-full text-inputPlaceholder text-center outline-none bg-input rounded-[0.25rem]"
                type="text"
                placeholder="+91"
                readOnly
                disabled
              />
              <input
                className="w-[85%] h-full pl-4 text-inputPlaceholder outline-none bg-input rounded-[0.25rem]"
                type="number"
                placeholder="Phone Number*"
              />
            </div>
            <input
              className="w-full h-[2.5rem] pl-4 text-inputPlaceholder outline-none bg-input rounded-[0.25rem]"
              type="text"
              placeholder="Email*"
              required
            />
            <Select
              exception="Highest Qualification*"
              data={[
                "B.Tech/ BE / BCA",
                "M.tech / MCA",
                "Graduate (Non-Technical)",
                "Others",
              ]}
              highQ={highQ}
              setHighQ={setHighQ}
            />
            <Select
              exception="Year of Completion*"
              data={[
                "After 2024",
                "2024",
                "2023",
                "2022",
                "2021",
                "Before 2021",
              ]}
              highQ={year}
              setHighQ={setYear}
            />
            <div className="captcha w-[80%] flex items-center justify-between bg-halfBlack px-4 py-2">
              <div className="flex items-center gap-4">
                <input
                  className="w-6 h-6"
                  type="checkbox"
                  name="captchaBox"
                  id="captchaBox"
                />
                <label htmlFor="captchaBox">I&apos;m not a robot</label>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10">
                  <img className="w-full h-full" src={recaptcha} alt="" />
                </div>
                <p className="text-inputPlaceholder text-[0.5rem]">
                  Privacy - Terms
                </p>
              </div>
            </div>
            <button className="bg-geeksterGreenPrimary w-full flex items-center justify-center text-[1.1.25rem] font-medium tracking-widest text-white py-3 cursor-pointer rounded-lg">
              <span>Let&apos;s do it </span>
              <MdKeyboardArrowRight className="text-[1.7rem]" />
            </button>
          </form>
          <p className="w-[80%] text-xs text-center">
            By continuing, you confirm that you have read and agreed to
            Geekster&apos;s{" "}
            <span className="text-geeksterGreenPrimary cursor-pointer">
              Terms of Policy
            </span>{" "}
            and{" "}
            <span className="text-geeksterGreenPrimary cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
        <button className="bg-geeksterGreenPrimary self-center text-white font-medium py-2 text-[1rem] px-4 cursor-pointer rounded md:hidden">
          Book a Free Demo Class
        </button>
        <div className="backShadow hidden md:block  absolute top-[30%] right-[14%] w-[15rem] h-[25rem] bg-shadowLinear"></div>
        <div className="smallBackShadow absolute top-[60%] right-[25%] w-[10rem] h-[10rem] bg-geeksterGreenPrimary"></div>
      </div>
      <div className="w-full flex flex-col gap-10 items-center">
        <p className="w-[90%] lg:w-[45%] text-center font-medium text-white text-[1.2rem] md:text-[2rem]">
          🔥 Our Learners are excelling at top-tier product companies!
        </p>
        <div className="overflow-x-auto flex w-[90%] items-center justify-start xl:justify-center">
          <div className="w-[2000px] md:w-auto flex items-center gap-4">
            {learnerImages &&
              learnerImages.map((imageData, idx) => {
                return (
                  <div
                    key={idx + "learnerImages"}
                    className="bg-darkBlueSecondary w-24  py-4 flex flex-col items-center justify-center gap-3 rounded-[0.25rem]"
                  >
                    <div>
                      <img src={imageData.image} alt="" />
                    </div>
                    <img src={imageData.logo} alt="" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="absolute top-[70%] right-0 z-[-2]">
        <img src={bg_lines} alt="" />
      </div>
    </div>
  );
};

export default Hero;
