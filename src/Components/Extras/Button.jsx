import PropTypes from 'prop-types';

const Button = ({ text }) => {
  return (
    <button className="bg-geeksterGreenPrimary text-white font-medium py-1 px-2 text-[0.875rem] md:text-[1rem] md:px-4 cursor-pointer rounded">
        {text}
    </button>
  )
}


Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button
