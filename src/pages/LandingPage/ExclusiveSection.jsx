/* eslint-disable react/prop-types */
import ListCard from "../../components/ListCard";

const ExclusiveSection = ({data, mainText, subText1, subText2, details}) => {
  return (
    <section className="py-10">
      <section className="sm:p-10 p-5 flex flex-col md:gap-0 gap-5 md:flex-row justify-between md:items-center">
        <h3 className="font-ppins text-4xl font-medium">
          <span className="font-mplus text-sm font-normal">
            {mainText}
          </span>
          <br />
          <span className="text-secondary">{subText1}</span>
          <br className="sm:block hidden" /> {subText2}
        </h3>

        <article className="border-l-2 border-secondary md:w-1/2 px-3 leading-7">
          {details}
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
