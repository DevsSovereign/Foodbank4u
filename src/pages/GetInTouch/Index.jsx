import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";

const Index = () => {
  const [pageNo, setPageNo] = useState(1);
  const [inputValue, setInputValue] = useState({
    name: "",
    contactPerson: "",
    email: "",
    phoneNo: "",
    foodProduct: "",
    whyFoodbank: "",
    additionalInfo: "",
    terms: false,
    agree: false,
  });

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
    <section className="max-w-[1450px] mx-auto relative overflow-hidden">
      <Header
        customStyle={"absolute text-white"}
        textColor={"text-white"}
        isOtherPage={true}
      />
      <section id="hero" className="bg-black relative flex items-center justify-center h-screen">
        <section className="bg-[url('/assets/wave.png')] bg-fixed bg-cover w-full h-full">
          <section className="text-white flex h-full flex-col justify-center items-center text-center">
            <h1 className="lg:text-7xl md:text-5xl text-4xl mb-5 font-bold">
              Get In Touch
            </h1>
            <p className="text-lg">
              Partner with FoodBank to combat hunger, provide essential
              nutrition and foster community well-being through collaborative
              efforts
            </p>
          </section>
        </section>
      </section>

      <section id="partnershipForm" className="flex flex-col my-10">
        {pageNo !== 0 && (
          <button
            type="button"
            className="bg-secondary w-fit mx-auto font-semibold p-2 text-white"
          >
            Partnership Form
          </button>
        )}

        <section>
          {pageNo !== 0 && (
            <section className="flex justify-center my-10 gap-3">
              <div
                className={`border-2 border-dashed cursor-pointer w-fit rounded-[50%] px-5 py-3 text-center ${
                  pageNo === 1 && "border-secondary"
                }`}
                onClick={() => setPageNo(1)}
              >
                1
              </div>
              <div
                className={`border-2 border-dashed cursor-pointer w-fit rounded-[50%] px-5 py-3 text-center ${
                  pageNo === 2 && "border-secondary"
                }`}
                onClick={pageNo > 1 ? () => setPageNo(2) : undefined}
              >
                2
              </div>
              <div
                className={`border-2 border-dashed cursor-pointer w-fit rounded-[50%] px-5 py-3 text-center ${
                  pageNo === 3 && "border-secondary"
                }`}
              >
                3
              </div>
            </section>
          )}
          {pageNo === 1 && (
            <section className="w-3/5 mx-auto">
              <label htmlFor="name">Name</label>
              <input
                className="block border p-4 text-sm w-full rounded-lg my-2"
                type="text"
                name="name"
                id="name"
                value={inputValue.name}
                onChange={(e) =>
                  setInputValue((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Enter your company name"
              />

              <label htmlFor="contactPerson">Contact Person</label>
              <input
                className="block border p-4 text-sm w-full rounded-lg my-2"
                type="text"
                name="contactPerson"
                id="contactPerson"
                value={inputValue.contactPerson}
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...prev,
                    contactPerson: e.target.value,
                  }))
                }
                placeholder="Enter company representative"
              />

              <label htmlFor="email">Email</label>
              <input
                className="block border p-4 text-sm w-full rounded-lg my-2"
                type="email"
                name="email"
                id="email"
                value={inputValue.email}
                onChange={(e) =>
                  setInputValue((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="Enter company email address"
              />

              <label htmlFor="phoneNo">Phone No</label>
              <input
                className="block border p-4 text-sm w-full rounded-lg my-2"
                type="text"
                name="phoneNo"
                id="phoneNo"
                value={inputValue.phoneNo}
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...prev,
                    phoneNo: e.target.value,
                  }))
                }
                placeholder="Enter company phone number"
              />
            </section>
          )}

          {pageNo === 2 && (
            <section className="w-3/5 mx-auto">
              <label htmlFor="foodProduct">Food Products/Services</label>
              <input
                className="block border p-4 text-sm w-full rounded-lg my-2"
                type="text"
                name="foodProduct"
                id="foodProduct"
                value={inputValue.foodProduct}
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...prev,
                    foodProduct: e.target.value,
                  }))
                }
                placeholder="Describe"
              />

              <label htmlFor="whyFoodbank">Why Partner with Food Bank?</label>
              <input
                className="block border p-4 text-sm w-full rounded-lg my-2"
                type="text"
                name="whyFoodbank"
                id="whyFoodbank"
                value={inputValue.whyFoodbank}
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...prev,
                    whyFoodbank: e.target.value,
                  }))
                }
                placeholder="Tell us"
              />

              <label htmlFor="additional">Additional Information</label>
              <textarea
                name="additional"
                id="additional"
                className="block w-full border p-4 rounded-lg text-sm my-2"
                rows={5}
                value={inputValue.additionalInfo}
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...prev,
                    additionalInfo: e.target.value,
                  }))
                }
                placeholder="Additional note"
              ></textarea>
            </section>
          )}

          {pageNo === 3 && (
            <section className="w-3/5 mx-auto">
              <div className="flex gap-3 my-10 items-start">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="mt-2"
                  value={inputValue.terms}
                  onChange={() => setInputValue((prev) => !prev)}
                />
                <label htmlFor="terms">
                  I have read, understood and agree to Food Bank&apos;s Terms
                  and Conditions, including consent for promotional emails,
                  secure data storage and compliance with applicable
                  regulations.
                </label>
              </div>
              <div className="flex gap-3 my-10 items-start">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  className="mt-2"
                  value={inputValue.agree}
                  onChange={() => setInputValue((prev) => !prev)}
                />
                <label htmlFor="agree">
                  By submitting this form, I agree to Food Bank&apos;s terms
                  regarding communication, data privacy and promotional content.
                </label>
              </div>
            </section>
          )}
        </section>
        {pageNo > 0 && pageNo < 3 && (
          <button
            type="button"
            className="bg-secondary text-white px-10 py-2 w-fit mx-auto my-4"
            onClick={() => setPageNo((prev) => prev + 1)}
          >
            Next
          </button>
        )}
        {pageNo === 3 && (
          <button
            type="button"
            className="bg-secondary text-white px-10 py-2 w-fit mx-auto my-4"
            onClick={() => setPageNo(0)}
          >
            Submit
          </button>
        )}
        {pageNo === 0 && (
          <section className="mt-20 px-5">
            <figure className="max-w-80 mx-auto">
              <img src="/assets/sentMsg.png" alt="messsage sent" />
            </figure>
            <p className="text-center my-10 text-lg font-semibold">
              Sent Successfully
            </p>
          </section>
        )}
      </section>

      <Footer />
    </section>
  );
};

export default Index;
