import ListCard from "../../components/ListCard";

const ExclusiveSection = () => {
  const data = [
    {
      img: "/assets/icons/food.png",
      title: "Food Security",
      details:
        "Foodbank ensures uninterrupted nutrition, shielding you from financial uncertainty. Our flexible loans provide stable access to wholesome meals, unaffected by life's financial ups and downs. ",
    },
    {
      img: "/assets/icons/money.png",
      title: "Financial Flexibility",
      details:
        "Foodbank offers convenient grocery loans to bridge financial gaps. Repay in flexible, manageable installments tailored to your budget. Our loans eliminate emergency food expenses' financial strain, ensuring consistent access to nutritious meals.",
    },
    {
      img: "/assets/icons/smile.png",
      title: "Convenience",
      details:
        "Foodbank streamlines your experience with a seamless online platform. Quickly apply for grocery loans, manage repayments and shop from partner stores – all in one convenient place",
    },
    {
      img: "/assets/icons/community.png",
      title: "Community Support",
      details:
        "Join Foodbank's supportive community, connecting individuals committed to food security. Share experiences, insights and resources with like-minded members. Together, break financial and nutritional barriers.",
    },
  ];
  return (
    <section className="py-10">
      <section className="sm:p-10 p-5 flex flex-col md:gap-0 gap-5 md:flex-row justify-between md:items-center">
        <h3 className="font-ppins text-4xl font-medium">
          <span className="font-mplus text-sm font-normal">
            Benefits of Choosing Foodbank
          </span>
          <br />
          <span className="text-secondary">Exclusive Benefit</span>
          <br className="sm:block hidden" /> of Foodbank
        </h3>

        <article className="border-l-2 border-secondary md:w-1/2 px-3 leading-7">
          Choosing Foodbank unlocks comprehensive food support. Enjoy flexible
          loans, expert nutrition guidance, convenient shopping and community
          resources, ensuring stress-free meals and enhanced well-being.
        </article>
      </section>
      <section className="flex flex-col lg:flex-nowrap md:flex-wrap md:flex-row gap-3 items-center py-5 px-3 justify-between lg:w-auto md:w-[45rem] mx-auto">
        {data.map((item, index) => (
          <ListCard
            key={index}
            imgPath={item.img}
            title={item.title}
            details={item.details}
          />
        ))}
      </section>
    </section>
  );
};

export default ExclusiveSection;
