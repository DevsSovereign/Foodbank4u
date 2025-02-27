import ReviewCard from "../../components/landingPage/ReviewCard";
import testimonyData from "./testimony.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ReviewSection = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20">
      <h3 className="text-center text-secondary font-ppins">TESTIMONIALS</h3>
      <p className="text-center font-bold sm:text-3xl text-xl lg:w-1/2 sm:w-2/3 mx-auto my-2 px-5 font-ppins">
        HONEST REVIEWS AND SUCCESS STORIES
      </p>
      <section className="py-10 ">
      <Slider {...settings}>
        {testimonyData.map((testimony, index) => (
          <section key={index}>
            <ReviewCard text={testimony.text} name={testimony.name} />
          </section>
        ))}
          </Slider>
      </section>
    </section>
  );
};

export default ReviewSection;
