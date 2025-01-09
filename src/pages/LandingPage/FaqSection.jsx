/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const FaqSection = ({data}) => {
  const [showAnswer, setShowAnswer] = useState(
    data.map((_, index) => ({ show: index === 0 }))
  );

  const toggleAnswer = (index) => {
    setShowAnswer((prev) =>
      prev.map((item, idx) => ({
        show: idx === index ? !item.show : false,
      }))
    );
  };

  return (
    <section className="bg-black relative py-20">
      <section className="absolute md:top-[-10rem] z-10 md:left-[-15rem] left-[-20rem] top-[-15rem]">
        <div className="w-[50rem] h-[50rem] rounded-[50%] absolute bg-[#2BB32A14]"></div>
        <div className="w-[45rem] h-[45rem] rounded-[50%] absolute bg-[#2BB32A14]"></div>
        <div className="w-[40rem] h-[40rem] rounded-[50%] absolute bg-[#2BB32A14]"></div>
        <div className="w-[35rem] h-[35rem] rounded-[50%] absolute bg-[#2BB32A] opacity-10"></div>
      </section>

      <section className="flex items-center md:py-10 md:px-10 flex-col md:flex-row justify-between font-ppins gap-10 xl:w-10/12 mx-auto">
        <section className="text-white relative z-20 lg:w-2/5 md:w-auto sm:w-10/12 px-3 md:px-0">
          <h3 className="md:text-5xl text-3xl font-bold mb-5 md:leading-[3.5rem]">
            Foodbank Frequently Asked Questions
          </h3>
          <p className="opacity-70">
            Get instant clarity on Foodbank services. Browse our frequently
            asked questions for straightforward answers on eligibility,
            applications, loans, repayments and support. Find your solution now.
          </p>
        </section>
        <section>
          <ul className="bg-white py-10 px-5 lg:pr-8 rounded-lg border-t-8 border-secondary md:w-auto sm:w-2/3 sm:mx-auto mx-4">
            {data.map((faq, index) => (
              <li key={index} className="relative p-3 lg:w-[25rem] border-b">
                <h4 className="font-bold mb-3">{faq.question}</h4>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    showAnswer[index].show
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="opacity-70 md:text-sm text-xs pr-3">{faq.answer}</p>
                </div>
                <button
                  type="button"
                  className="absolute right-0 top-1/2"
                  onClick={() => toggleAnswer(index)}
                >
                  {showAnswer[index].show ? <FaAngleDown /> : <FaAngleRight />}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
};

export default FaqSection;
