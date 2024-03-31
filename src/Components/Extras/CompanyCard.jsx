import PropTypes from 'prop-types';

const CompanyCard = ({image}) => {
  return (
    <div className="bg-white w-[6rem] lg:w-auto flex items-center justify-center rounded-lg p-4 max-h-12 overflow-hidden">
      <img src={image} className='object-contain' alt="" />
    </div>
  )
}

CompanyCard.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CompanyCard
