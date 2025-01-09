import TransformCard from "../../components/landingPage/TransformCard";

const TransformSection = () => {
  const data = [
    {
      img: "/assets/icons/contact.png",
      title: "Apply For Food loan",
      details:
        "Foodbank offers adaptable loan solutions for stress-free meals. Enjoy flexible repayment plans ",
    },
    {
      img: "/assets/icons/book.png",
      title: "Nutrition Support",
      details:
        "Foodbank's expert nutritional support empowers healthy eating. Receive personalized guidance.",
    },
    {
      img: "/assets/icons/chat.png",
      title: "Partnerships",
      details:
        "We team up with local food banks, grocery stores, nutritionists and financial institutions.",
    },
    {
      img: "/assets/icons/time.png",
      title: "Community Support",
      details:
        "Foodbank's community support ensures no one faces food insecurity alone. ",
    },
  ];
  return (
    <section className="py-20 relative bg-white z-20">
      <h3 className="text-center text-secondary font-ppins">
        DEDICATED FEATURES
      </h3>
      <p className="text-center font-bold sm:text-3xl text-xl lg:w-1/2 sm:w-2/3 mx-auto my-2 px-5 font-mplus">
        Transformative Solutions for Healthy Eating and Financial Stability
      </p>

      <section className="flex xl:w-[1200px] px-3 py-10 sm:flex-nowrap flex-wrap justify-center mx-auto">
        <section>
          <TransformCard
            imgPath={data[0].img}
            title={data[0].title}
            details={data[0].details}
          />
          <TransformCard
            imgPath={data[1].img}
            title={data[1].title}
            details={data[1].details}
          />
        </section>
        <section>
          <TransformCard
            imgPath={data[2].img}
            title={data[2].title}
            details={data[2].details}
          />
          <TransformCard
            imgPath={data[3].img}
            title={data[3].title}
            details={data[3].details}
          />
        </section>
      </section>
    </section>
  );
};

export default TransformSection;
