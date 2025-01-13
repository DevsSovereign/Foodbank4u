import PropTypes from "prop-types";

const ReviewCard = ({ text, name }) => {
  return (
    <section className="bg-black relative p-8 md:pt-14 lg:pt-10 lg:h-64 md:h-80 sm:h-60 cursor-pointer pl-16 md:pl-10 lg:pl-24 mx-3 rounded-lg text-white font-inter">
      <span className="absolute left-3 md:top-3 lg:left-5 lg:top-10">
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
