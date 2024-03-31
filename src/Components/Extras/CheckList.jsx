import checked from "../../assets/Images/check.svg";
import PropTypes from 'prop-types';

const CheckList = ({ icon, heading, data }) => {
  return (
    <div className="w-[90%] md:w-[18.375rem] bg-darkGreen flex flex-col p-4 gap-4 text-white rounded-2xl pb-12">
      <div className="flex gap-2 pb-4 border-b-[1px] border-b-geeksterLightGreen">
        <img src={icon} alt="" />
        <p className="text-geeksterGreenPrimary text-medium font-medium">{heading}</p>
      </div>
      <div className="flex flex-col gap-2">
        {data.map((item, index) => (
          <div className="flex items-center justify-between" key={index}>
            <div className="flex items-center gap-3">
              <div className="bg-geeksterLightGreen rounded-sm p-1">
                <img src={checked} alt="" />
              </div>
              <p>{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


CheckList.propTypes = {
    icon: PropTypes.string, // add this line
    heading: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.string),
  };
  

export default CheckList;
