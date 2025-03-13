import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HowItWorks from "./HowItWorks";

const Index = () => {
  return (
    <section className="max-w-[1450px] mx-auto relative overflow-hidden">
      <Header
        customStyle={"absolute text-white"}
        textColor={"text-white"}
        isOtherPage={true}
      />
      <section
        id="hero"
        className="bg-[#00180E] z-20 relative flex items-center justify-center h-screen"
      >
        <section className="bg-[url('/assets/dietitianImage.png')] bg-fixed bg-cover w-full h-full">
          <section
            className="text-white flex h-full flex-col justify-center items-center text-center"
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h1 className="lg:text-7xl md:text-5xl text-4xl mb-5 font-bold">
              Contact Our Dietitian
            </h1>
            <p className="md:text-2xl text-lg w-3/5">
              Have questions about nutrition? Contact our dietitian for expert
              guidance and personalized advice.
            </p>
          </section>
        </section>
      </section>

      <HowItWorks />

      <section
        className="flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto gap-10 py-10 md:px-10"
        data-aos="fade"
        data-aos-offset="100"
        data-aos-delay="10"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <section className="md:w-9/12">
          <h3 className="md:text-4xl text-3xl font-bold">
            Experience the Convenience of Our{" "}
            <span className="text-secondary">Foodbank </span>and{" "}
            <span className="text-secondary">Dietician Services</span>
          </h3>
          <p
            className="leading-7 mt-5"
            data-aos="fade"
            data-aos-offset="100"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Our Foodbank is dedicated to providing essential food support to
            individuals and families in need, ensuring access to nutritious
            meals for a healthier community. Whether you require emergency food
            assistance or ongoing support, our platform makes it easy to find
            help when you need it most. In addition, our expert dieticians are
            available to offer personalized nutritional guidance tailored to
            your needs. Whether you're managing a specific health condition,
            seeking meal planning advice, or looking for ways to improve your
            overall well-being, our dieticians provide expert consultations to
            help you make informed dietary choices. Access the support you need
            with ease—because everyone deserves nutritious food and expert
            health guidance.
          </p>
        </section>
        <figure
          className="md:h-[640px] border"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img
            className="h-full object-cover"
            src={"/assets/workout.png"}
            alt="a working smiling at the gym"
          />
        </figure>
      </section>

      <Footer />
    </section>
  );
};

export default Index;
