import sparkles from "../../assets/Images/sparkles.svg";
import developer_mode_tv_green from "../../assets/Images/developer_mode_tv_green.svg";
import assignment_turned_in from "../../assets/Images/assignment_turned_in.svg";
import forum from "../../assets/Images/forum.svg";
import target from "../../assets/Images/target.svg";
import CheckList from "../Extras/CheckList";

const GeeksterWay = () => {
  const checkListData = [
    {
      image: developer_mode_tv_green,
      heading: "Code Everyday",
      data: [
        "Practioner-led Live Classes",
        "Booster Revision Sessions",
        "Full Day Doubt Support",
      ],
    },
    {
      image: assignment_turned_in,
      heading: "Personalized Progress Evaluation",
      data: ["Weekly Test", "1:1 Mentorship", "Soft Skills"],
    },
    {
      image: forum,
      heading: "Interview Preparation Every Month",
      data: ["Mock Interviews", "Hackathon", "Real World Projects"],
    },
    {
      image: target,
      heading: "Intensive Placement Assistance",
      data: ["Resume Building", "Interview Preparation", "Job Referrals"],
    },
  ];

  return (
    <div className="geekster-way w-full flex flex-col items-center justify-center mt-8 md:mt-32 gap-8 md:gap-12 py-8 md:py-16 bg-darkerGreen">
      <div className="w-full flex flex-col items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-white text-center text-[1.5rem] md:text-[2rem] font-semibold">
            Learn the Geekster Way
          </h1>
          <img className="hidden md:block" src={sparkles} alt="" />
        </div>
        <p className="hidden md:block text-xl text-center text-halfWhite w-[25%] md:w-[70%]">
          Build your skills step-by-step with our momentum-driven approach.
        </p>
        <p className="md:hidden block text-md text-center text-halfWhite w-[90%]">Build your skills step-by-step with Geekster&apos;s momentum-driven approach.</p>
      </div>
      <div className="w-full flex justify-center flex-wrap gap-4">
        {checkListData.map((item, index) => {
          return (
            <CheckList
              key={index + "checkList"}
              icon={item.image}
              heading={item.heading}
              data={item.data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GeeksterWay;
