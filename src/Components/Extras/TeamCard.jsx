import PropTypes from "prop-types";
import { FaPlay } from "react-icons/fa";

const TeamCard = ({ data }) => {
  return (
    <div className="w-[6rem] md:w-[10rem] h-[15rem] md:h-[25rem] flex flex-col items-center relative">
      <div className="w-full h-[6rem] md:h-[10rem] rounded-lg absolute top-16 md:top-8 left-0 right-0 z-[1]">
        <img src={data.image} className="rounded-lg object-cover w-full h-full" alt="" />
        <button className="absolute top-[55%] right-[40%] w-8 h-8 flex items-center justify-center bg-geeksterGreenPrimary rounded-[50%]">
          <FaPlay className="text-white text-sm pl-1" />
        </button>
      </div>
      <div className="bg-greenGray pt-14 md:pt-24 px-1 md:px-4 w-[140%] h-[10rem] md:h-[13rem] flex flex-col items-center gap-4 absolute top-28 rounded-lg">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-[1rem] md:text-[1.25rem] font-semibold">{data.name}</h1>
          <p className="text-xs">{window.innerHeight > 640 ? data.title : data.titleSmall}</p>
        </div>
        <div className="flex items-center w-[60%] h-[1.5rem]">
          <img src={data.company} className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    titleSmall: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamCard;
