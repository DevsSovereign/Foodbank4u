import PropTypes from "prop-types";

const ReviewCard = ({ text, name }) => {
  return (
    <section className="bg-black relative p-10 w-[37rem] pl-24 mx-3 rounded-lg text-white font-inter">
      <span className="absolute left-5">
        <img src="/assets/icons/quotes.png" alt="" />
      </span>
      <p>{text}</p>
      <span className="flex items-center gap-3 mt-3">
        <div className="border-b-2 w-10"></div>
        <p>{name}</p>
      </span>
    </section>
  );
};

ReviewCard.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
};

export default ReviewCard;
