import PropTypes from 'prop-types';

const FooterLinks = ({ item }) => {
  return (
    <div className='flex flex-col items-start gap-3 text-white'>
        <h1 className='text-[1rem] font-semibold text-halfWhite cursor-default  '>{item.title}</h1>
        <div className='flex flex-col items-start gap-2'>
            {
                item.data.map((link, idx) => {
                    return <p key={idx + link} className='font-regular cursor-pointer'>{link}</p>
                })
            }
        </div>
    </div>
  )
}

FooterLinks.propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
  };

export default FooterLinks
