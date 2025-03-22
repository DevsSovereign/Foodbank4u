import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FoodLoanSection from "./FoodLoanSection";
import HeroSection from "./HeroSection";
import ExclusiveSection from "./ExclusiveSection";
import GetStartedSection from "./GetStartedSection";
import TransformSection from "./TransformSection";
import ReviewSection from "./ReviewSection";
import InquirySection from "./InquirySection";
import benefitsData from "./benefits.json";
import BackToTop from "../../components/BackToTop";

const LandingPage = () => {
  return (
    <section className="max-w-[1450px] mx-auto relative overflow-hidden">
      <Header />
      <section className="absolute md:top-[-18rem] md:left-[-10rem] left-[-20rem] top-[-15rem]">
        <div className="w-[50rem] h-[50rem] z-20 rounded-[50%] absolute bg-[#2BB32A] opacity-[0.05]"></div>
        <div className="w-[45rem] h-[45rem] z-20 rounded-[50%] absolute bg-[#2BB32A] opacity-[0.05]"></div>
        <div className="w-[40rem] h-[40rem] z-20 rounded-[50%] absolute bg-[#2BB32A] opacity-[0.05]"></div>
        <div className="w-[35rem] h-[35rem] z-20 rounded-[50%] absolute bg-[#2BB32A] opacity-10"></div>
      </section>
      <HeroSection />
      <FoodLoanSection />
      <ExclusiveSection
        data={benefitsData}
        mainText={"Benefits of Choosing Foodbank"}
        subText1={"Exclusive Benefit"}
        subText2={"of Foodbank"}
        details={
          "Choosing Foodbank unlocks comprehensive food support. Enjoy flexible loans, expert nutrition guidance, convenient shopping and community resources, ensuring stress-free meals and enhanced well-being."
        }
      />
      <GetStartedSection />
      <TransformSection />
      <ReviewSection />
      <hr />
      <InquirySection />
      <BackToTop />
      <Footer />
    </section>
  );
};

export default LandingPage;
