import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ExclusiveSection from "../LandingPage/ExclusiveSection";
import HeroSection from "./HeroSection";
import PartnershipSection from "./PartnershipSection";
import benefitsData from "./benefits.json";
import BackToTop from "../../components/BackToTop";

const RidersPage = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/get-in-touch/#${id}`;
    }
  };

  return (
    <section className="max-w-[1450px] mx-auto overflow-hidden">
      <Header
        customStyle={"absolute text-white"}
        textColor={"text-white"}
        isOtherPage={true}
      />
      <HeroSection />
      <ExclusiveSection
        data={benefitsData}
        mainText={"Benefits of Partnering with Us"}
        subText1={"Rider’s Benefit"}
        subText2={" with Foodbank"}
        details={
          "Join Foodbank's rider network and be part of a community that makes a difference! As a rider, you'll play a vital role in delivering food assistance to our beneficiaries."
        }
      />
      <PartnershipSection />
      <section
        className="flex border-t flex-col md:flex-row justify-between items-center py-10 px-10"
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
      <BackToTop />
      <Footer />
    </section>
  );
};

export default RidersPage;
