import PropTypes from "prop-types";

const ListCard = ({ title, imgPath, details }) => {
  return (
    <section className="w-[30rem] p-4 font-ppins">
      <figure className="w-14 bg-[#E2F3EC] p-3 rounded-md">
        <img src={imgPath} alt={title} />
      </figure>
      <h3 className="font-semibold my-3">{title}</h3>
      <p className="text-sm">{details}</p>
    </section>
  );
};

ListCard.propTypes = {
  title: PropTypes.string,
  imgPath: PropTypes.string,
  details: PropTypes.string,
};

export default ListCard;
