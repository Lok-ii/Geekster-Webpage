import orangeLines from "../../assets/Images/orangeLines.svg";
import video from "../../assets/Images/video.png";
import { FaPlay } from "react-icons/fa";

const VideoSection = () => {
  return (
    <div className="w-full relative flex flex-col-reverse md:flex-row items-center gap-8 bg-darkBlueSecondary mt-8 md:mt-24 md:px-14 xl:px-28 py-12">
      <div className=" flex flex-col pl-6 md:pl-0 md:items-start gap-8">
        <div className="w-full flex flex-col md:flex-row md:items-center lg:justify-center xl:justify-start justify-start gap-4 text-white">
          <div className="w-[90%] md:w-auto flex flex-col justify-center items-center xl:items-start">
            <h1 className="w-full md:w-auto flex items-center gap-2 text-[1.7rem] md:text-[3rem] font-bold text-geeksterGreenPrimary whitespace-nowrap">
              {window.innerWidth > 640
                ? `India's 1st`
                : "India's 1st AI Powered"}
            </h1>
            <img className="hidden md:block" src={orangeLines} alt="" />
          </div>
          <p className="text-[1rem] whitespace-nowrap md:whitespace-normal md:text-[1.25rem] w-[90%] md:w-[50%]">
            {window.innerWidth > 640
              ? "AI Powered Full Stack Web Development Courses"
              : "Full Stack Web Development Courses"}
            {/* <span className="hidden md:block"></span>
            <span className="md:hidden block"></span> */}
          </p>
        </div>
        <p className="text-grayPrimary text-[0.78rem] md:text[1rem] w-[90%] md:w-[70%]">
          Future-Proof Your Career with AI Powered Web Development and Lead in
          an AI-Dominant World
        </p>
      </div>
      <div className="static xl:absolute w-[90%] md:w-[50%] md:top-[-25%] md:right-[2%] xl:right-[0%] h-[50%] md:h-[150%]">
        <img className="w-full h-full object-contain" src={video} alt="" />
        <button className="absolute top-[25%] md:top-[40%] right-[45%] md:right-[15%] xl:right-[50%] w-8 h-8 md:w-16 md:h-16 flex items-center justify-center bg-geeksterGreenPrimary rounded-[50%]">
          <FaPlay className="text-white text-sm md:text-2xl pl-1" />
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
