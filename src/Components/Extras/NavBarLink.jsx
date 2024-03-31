import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const NavBarLink = ({ text, link, setSiderbar }) => {
  return (
    <NavLink
      to={link}
      onClick={() => setSiderbar(false)}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending no-underline lg:text-white whitespace-nowrap md:text-[0.8rem] xl:text-[1rem]"
          : isActive
          ? "active border-b-2 pb-2 border-b-geeksterGreenPrimary no-underline lg:text-white font-bold whitespace-nowrap md:text-[0.8rem] xl:text-[1rem]"
          : "no-underline lg:text-white whitespace-nowrap md:text-[0.8rem] xl:text-[1rem]"
      }
    >
      {text}
    </NavLink>
  );
};


NavBarLink.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    setSiderbar: PropTypes.func.isRequired,
  };

export default NavBarLink;
