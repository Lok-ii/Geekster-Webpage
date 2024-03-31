import { useEffect } from "react";
import TeamCard from "../Extras/TeamCard";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const OurTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const [teamCarousel, setTeamCarousel] = useState(0);
  const [height, setHeight] = useState(true)

  useEffect(() => {
    const getTeamData = async () => {
      const teamMembers = [
        {
          image: "bitto.svg",
          name: "Bitto Aggarwal",
          title: "Software Development Engineer",
          titleSmall: "SDE",
          company: "amazon_logo.svg",
        },
        {
          image: "vikas.png",
          name: "Vikas Ranjan",
          title: "Software Development Engineer",
          titleSmall: "SDE",
          company: "zomato_logo.svg",
        },
        {
          image: "rajneesh.png",
          name: "Rajneesh Kumar",
          title: "SWE - II",
          titleSmall: "SWE - II",
          company: "google_logo.svg",
        },
        {
          image: "ashish.png",
          name: "Ashish",
          title: "Software Development Engineer",
          titleSmall: "SDE",
          company: "uber_logo.svg",
        },
        {
          image: "bitto.svg",
          name: "Bitto Aggarwal",
          title: "Software Development Engineer",
          titleSmall: "SDE",
          company: "amazon_logo.svg",
        },
        {
          image: "vikas.png",
          name: "Vikas Ranjan",
          title: "Software Development Engineer",
          titleSmall: "SDE",
          company: "zomato_logo.svg",
        },
        {
          image: "rajneesh.png",
          name: "Rajneesh Kumar",
          title: "SWE - II",
          titleSmall: "SWE - II",
          company: "google_logo.svg",
        },
        {
          image: "ashish.png",
          name: "Ashish",
          title: "Software Development Engineer",
          titleSmall: "SDE",
          company: "uber_logo.svg",
        },
      ];

      const importedTeam = await Promise.all(
        teamMembers.map(async (team) => {
          const teamImage = await import(`../../assets/Images/${team.image}`);
          const companyImage = await import(
            `../../assets/Images/${team.company}`
          );
          return {
            image: teamImage.default,
            name: team.name,
            title: team.title,
            titleSmall: team.titleSmall,
            company: companyImage.default,
          };
        })
      );

      setTeamData(importedTeam);
    };
    getTeamData();
  }, []);

  return (
    <div className="relative w-full mt-12 flex flex-col items-center gap-12 text-white">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-[2rem] font-semibold">Our Team of Experts</h1>
        <div className="flex items-center gap-1">
          <span className="text-halfWhite text-center">
            Aspire, Learn and Grow with awesome mentors 🌟
          </span>{" "}
          {/* <span>🌟</span> */}
        </div>
      </div>
      <div className="w-[90%] lg:w-[70%] md:pl-24 xl:pl-24 md:overflow-x-hidden relative">
        <div
          className={`w-full md:w-[2000px] overflow-hidden ${height ? "h-[32rem] sm:h-[18rem] md:h-[20rem]" : "h-auto" } flex flex-wrap md:flex-nowrap pb-12 md:pb-0 md:pl-[2rem] md:justify-between justify-center gap-x-16 md:gap-0 transition-x-[${teamCarousel}%] transition-all duration-300`}
        >
          {teamData.map((team, idx) => {
            return <TeamCard key={idx + "teamData"} data={team} />;
          })}
        </div>
      </div>
      <MdKeyboardArrowLeft
        className="hidden md:block absolute text-halfWhite cursor-pointer top-[55%] md:left-[10%] lg:left-[16%] text-[2.5rem]"
        onClick={() => {
          setTeamCarousel((prev) => prev + 25);
        }}
      />
      <MdKeyboardArrowRight
        className="hidden md:block absolute text-halfWhite cursor-pointer top-[55%] right-[12%] text-[2.5rem]"
        onClick={() => {
          setTeamCarousel((prev) => prev - 25);
        }}
      />
      <div className="centerBackShadow absolute top-[40%] left-[25%] md:left-[45%] w-[10rem] h-[20rem] md:w-[15rem] md:h-[15rem] bg-geeksterGreenPrimary"></div>
      <button className="border-[1px] text-[0.875rem] flex items-center gap-2 border-geeksterGreenPrimary text-geeksterGreenPrimary py-2 px-10 rounded-lg hover:bg-geeksterGreenPrimary hover:text-white transition-all ease-in-out duration-300 md:hidden" onClick={() => setHeight((prev) => !prev)}>
        {height ? "View More" : "View Less" } {height ? <MdKeyboardArrowDown className="text-[1.2rem]" /> : <MdKeyboardArrowUp className="text-[1.2rem]" /> }
      </button>
    </div>
  );
};

export default OurTeam;
