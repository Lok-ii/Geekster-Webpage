import PropTypes from 'prop-types';

const Select = ({ exception, data, highQ, setHighQ}) => {
  return (
    <select
      className={`w-full h-[2.5rem] px-4 ${
        highQ === "default" ? "text-inputPlaceholder" : "text-black"
      } outline-none bg-input rounded-[0.25rem]`}
      type="text"
      placeholder="Highest Qualification*"
      required
      onChange={(e) => setHighQ(e.target.value)}
    >
      <option className="text-inputPlaceholder" value="default" defaultValue={true}>
        {exception}
      </option>
      {
        data && data.map((item, idx) => {
            return <option key={idx} className="text-black" value="">
        {item}
      </option>
        })
      }
    </select>
  );
};


Select.propTypes = {
    exception: PropTypes.string,
    data: PropTypes.array,
    highQ: PropTypes.string,
    setHighQ: PropTypes.func,
  };
  

export default Select;
