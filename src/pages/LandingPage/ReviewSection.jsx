import ReviewCard from "../../components/landingPage/ReviewCard";
import testimonyData from "./testimony.json";

const ReviewSection = () => {
  const galleryImages = [
    "/assets/schoolBoys.jpeg",
    "/assets/children.jpeg",
    "/assets/schoolBoys.jpeg",
    "/assets/children.jpeg",
    "/assets/schoolBoys.jpeg",
    "/assets/children.jpeg",
  ];
  return (
    <section className="py-20">
      <h3 className="text-center text-secondary font-ppins">TESTIMONIALS</h3>
      <p className="text-center font-bold sm:text-3xl text-xl lg:w-1/2 sm:w-2/3 mx-auto my-2 px-5 font-ppins">
        HONEST REVIEWS AND SUCCESS STORIES
      </p>
      <section className="flex py-20 w-[1400px]">
        {testimonyData.map((testimony, index) => (
          <ReviewCard key={index} text={testimony.text} name={testimony.name} />
        ))}
      </section>

      <section className="grid md:grid-rows-2 md:grid-cols-3 grid-rows-3 grid-cols-2 gap-10">
        {galleryImages.map((img, index) => (
          <figure key={index} className="sm:w-[25rem] w-[20rem]">
            <img src={img} alt="" />
          </figure>
        ))}
      </section>
    </section>
  );
};

export default ReviewSection;
