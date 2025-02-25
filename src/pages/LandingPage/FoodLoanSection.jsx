import { BsAndroid2 } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const FoodLoanSection = () => {
  return (
    <>
      <section className="mt-24 relative">
        <div className="bg-secondary h-10 absolute w-full z-40 -top-10 transform rotate-1"></div>
        <div className="bg-secondary h-10 absolute w-full -top-10 z-40 transform -rotate-1 flex items-center">
          <Marquee>
            <p className="font-ppins tracking-widest text-2xl text-white text-nowrap mr-6">
              LICENSED BY FCCPC, NDPC, LENDER LICENSE AND CAC.
            </p>
            <p className="font-ppins tracking-widest text-2xl text-white text-nowrap mr-6">
              LICENSED BY FCCPC, NDPC, LENDER LICENSE AND CAC.
            </p>
          </Marquee>
        </div>
      </section>
      <section className="bg-black z-10 relative lg:p-10 md:p-5 py-10 w-full lg:mr-5 flex flex-col lg:gap-10 gap-5 md:flex-row items-center">
        <section className="text-white block font-mplus md:mx-0 mx-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl lg:mr-10 font-semibold">
            <span className="text-secondary">Food Loan</span> Options Tailored
            to You. Repay with ease.
          </h2>
          <p className="py-5 md:w-[20rem] lg:text-lg">
            Projected Rider Partnerships (2025) 5,000+ riders across urban and
            rural areas. Deliver 1M+ meals annually. Expand to 15+ new
            locations. 95% deliveries within 24 hours.
          </p>
          <section className="flex gap-4 my-4">
            <div className="border-r pr-3">
              <span className="text-secondary font-ppins sm:text-2xl lg:text-3xl">
                5 Million +
              </span>
              <br />
              <p className="sm:text-sm text-xs">Projected User Base by 2026</p>
            </div>
            <div className="pl-2">
              <span className="text-secondary font-ppins sm:text-2xl lg:text-3xl">
                1 Million +
              </span>
              <br />
              <p className="sm:text-sm text-xs">
                Projected Rider Engagement by 2026
              </p>
            </div>
          </section>
        </section>

        <section className="font-inter flex flex-col relative md:h-[20rem] lg:gap-10 gap-5 md:flex-row items-center md:items-baseline">
          <div className="p-5 w-fit h-fit text-white text-center rounded-md md:text-left my-auto bg-gradient-to-br from-slate-300 to-black">
            <h3 className="text-lg ">For Android</h3>
            <p className="text-sm">Android 8.0+</p>

            <button
              type="button"
              className="p-2 px-8 rounded-full my-5 text-sm text-white bg-secondary"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.foodbank4u.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </button>
            <div className="flex justify-between items-center">
              <figure className="w-14">
                <img
                  src="/assets/androidCode"
                  className="w-full"
                  alt="qr code to download for android"
                />
              </figure>
              <BsAndroid2 className="w-7 h-7" />
            </div>
          </div>
          <div className="p-5 w-fit h-fit text-white text-center rounded-md md:text-left bg-gradient-to-br from-slate-300 to-black">
            <h3 className="text-lg ">For iOS</h3>
            <p className="text-sm">iOS 14.6+</p>

            <button
              type="button"
              className="p-2 px-8 rounded-full my-5 text-sm text-white bg-secondary"
            >
              <a
                href="https://apps.apple.com/us/app/foodbankapp/id6608982689"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </button>
            <div className="flex gap-3 justify-between items-center">
              <figure className="w-14">
                <img
                  src="/assets/iosCode"
                  className="w-full"
                  alt="qr code to download for ios"
                />
              </figure>
              <FaApple className="w-7 h-7" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default FoodLoanSection;
