import ReviewCard from "../../components/landingPage/ReviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import data from "./testimony.json";

const ReviewSection = () => {
  const [testimonies, setTestimonies] = useState([]);
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

  useEffect(() => {
    const getTestimonies = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/testimonies`
        );
        setTestimonies(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getTestimonies();
  }, []);

  return (
    <section
      className="py-20"
      data-aos="zoom-in"
      data-aos-offset="100"
      data-aos-delay="10"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h3 className="text-center text-secondary font-ppins">TESTIMONIALS</h3>
      <p className="text-center font-bold sm:text-3xl text-xl lg:w-1/2 sm:w-2/3 mx-auto my-2 px-5 font-ppins">
        HONEST REVIEWS AND SUCCESS STORIES
      </p>
      <section className="py-10 ">
        {testimonies && testimonies.length > 2 ? (
          <Slider {...settings}>
            {testimonies.map((testimony, index) => (
              <section key={index}>
                <ReviewCard text={testimony.content} name={testimony.name} />
              </section>
            ))}
          </Slider>
        ) : testimonies && testimonies.length > 0 && testimonies.length < 3 ? (
          <section
            className={`grid grid-cols-${testimonies.length} w-2/3 mx-auto gap-4`}
          >
            {testimonies.map((testimony, index) => (
              <ReviewCard
                key={index}
                text={testimony.content}
                name={testimony.name}
              />
            ))}
          </section>
        ) : (
          <div className="border w-2/3 mx-auto h-40 flex justify-center items-center shadow-md">
            <p className="text-3xl font-semibold text-center">Testimonies</p>
          </div>
        )}
      </section>
    </section>
  );
};

export default ReviewSection;
