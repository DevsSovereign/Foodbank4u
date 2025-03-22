import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FaqSection from "../LandingPage/FaqSection";

const Index = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/get-in-touch/#${id}`;
    }
  };

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
        <section className="bg-[url('/assets/faqImage.svg')] bg-fixed bg-cover w-full h-full">
          <section
            className="text-white flex h-full flex-col justify-center items-center text-center"
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h1 className="lg:text-7xl md:text-5xl text-4xl mb-5 font-bold">
              Frequently Asked Questions
            </h1>
            <p className="md:text-2xl text-lg w-3/5">
              Find answers to common questions about Foodbank and get the
              information you need quickly.
            </p>
          </section>
        </section>
      </section>

      <FaqSection />
      <section
        className="flex flex-col md:flex-row justify-between items-center py-10 px-10"
        data-aos="fade"
        data-aos-offset="100"
        data-aos-delay="10"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h3 className="md:text-4xl text-2xl md:w-1/2 text-center mb-5 md:text-left md:mb-0 md:leading-[3.5rem] font-bold">
          Partner With Foodbank Today and feed the Nation
        </h3>
        <button
          type="button"
          className="w-40 bg-secondary text-white p-3 rounded-md"
          onClick={() => scrollToSection("partnershipForm")}
        >
          Apply Now
        </button>
      </section>
      <Footer />  
    </section>
  );
};

export default Index;
