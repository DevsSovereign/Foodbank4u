import PropTypes from 'prop-types'

const TransformCard = ({imgPath, title, details}) => {
  return (
    <section className='flex gap-4 items-center max-w-[30rem] p-4 font-ppins'>
      <figure className="w-14 bg-[#E2F3EC] p-3 rounded-md">
        <img src={imgPath} alt={title} />
      </figure>
      <div>
      <h3 className="font-semibold my-3">{title}</h3>
      <p className="text-sm">{details}</p>
      </div>
    </section>
  )
}

TransformCard.propTypes = {
  imgPath: PropTypes.string,
  title: PropTypes.string,
  details: PropTypes.string,
}

export default TransformCard