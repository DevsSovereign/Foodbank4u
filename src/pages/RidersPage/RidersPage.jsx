import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ExclusiveSection from "../LandingPage/ExclusiveSection";
import FaqSection from "../LandingPage/FaqSection";
import HeroSection from "./HeroSection";
import PartnershipSection from "./PartnershipSection";
import faqData from "./faqData.json";
import benefitsData from "./benefits.json";

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
      <FaqSection data={faqData} />
      <section className="flex flex-col md:flex-row justify-between items-center py-10 px-10">
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

export default RidersPage;
