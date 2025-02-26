/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const FaqSection = () => {
  const [faqData, setFaqData] = useState([]);
  const [showAnswer, setShowAnswer] = useState([]);

  useEffect(() => {
    const getFaqs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/getFaqs`);
        setFaqData(res.data.faqs);

        setShowAnswer(res.data.faqs.map((_, index) => ({ show: index === 0 })));
      } catch (error) {
        console.error(error);
      }
    };
    
    getFaqs();
  }, []);

  const toggleAnswer = (index) => {
    setShowAnswer((prev) =>
      prev.map((item, idx) => ({
        show: idx === index ? !item.show : false,
      }))
    );
  };

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section id="faq" className="bg-black relative py-20">
      <section className="absolute md:top-[-10rem] z-10 md:left-[-15rem] left-[-20rem] top-[-15rem]">
        <div className="w-[50rem] h-[50rem] rounded-[50%] absolute bg-[#2BB32A14]"></div>
        <div className="w-[45rem] h-[45rem] rounded-[50%] absolute bg-[#2BB32A14]"></div>
        <div className="w-[40rem] h-[40rem] rounded-[50%] absolute bg-[#2BB32A14]"></div>
        <div className="w-[35rem] h-[35rem] rounded-[50%] absolute bg-[#2BB32A] opacity-10"></div>
      </section>

      <section className="flex items-center md:py-10 md:px-10 flex-col md:flex-row justify-between font-ppins gap-10 xl:w-10/12 mx-auto">
        <section className="text-white relative z-20 lg:w-2/5 md:w-auto sm:w-10/12 px-3 md:px-0">
          <h3 className="md:text-5xl text-3xl font-bold md:mb-20 mb-5 md:leading-[3.5rem]">
            Foodbank Frequently Asked Questions
          </h3>
          <p className="opacity-70">
            Get instant clarity on Foodbank services. Browse our frequently
            asked questions for straight forward answers on eligibility,
            applications, loans, repayments and support. Find your solution now.
          </p>
        </section>
        <section>
          <ul className="bg-white py-10 px-5 lg:pr-8 rounded-lg border-t-8 border-secondary md:w-[28rem] sm:w-2/3 sm:mx-auto mx-4">
            {faqData.length > 0 ? (
              faqData.map((faq, index) => (
                <li key={index} className="relative p-3 lg:w-[25rem] border-b">
                  <h4 className="font-bold mb-3">{faq.title}</h4>
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      showAnswer[index].show
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="opacity-70 md:text-sm text-xs pr-3">
                      {faq.content}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="absolute right-0 top-1/2"
                    onClick={() => toggleAnswer(index)}
                  >
                    {showAnswer[index].show ? (
                      <FaAngleDown />
                    ) : (
                      <FaAngleRight />
                    )}
                  </button>
                </li>
              ))
            ) : (
              <p className="text-center">Loading</p>
            )}
          </ul>
        </section>
      </section>
    </section>
  );
};

export default FaqSection;
