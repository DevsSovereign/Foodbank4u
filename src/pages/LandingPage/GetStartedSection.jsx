import { FaApple, FaGooglePlay } from "react-icons/fa";

const GetStartedSection = () => {
  return (
    <section className="bg-black text-white py-20 font-ppins">
      <h3 className="text-center font-bold sm:text-3xl text-xl">
        Get Started with Foodbank
      </h3>
      <p className="text-center text-sm opacity-70 my-2">
        Quick, hassle-free grocery loan application and management
      </p>

      <figure className="md:hidden mt-10 sm:w-[30rem] mx-auto">
        <img src="/assets/mockup.png" alt="mockup" />
      </figure>

      <section className="md:py-20 py-5 md:my-20 my-5 relative flex justify-between w-11/12 mx-auto gap-3">
        <article>
          <ul className="flex flex-col md:justify-between md:gap-20 gap-7">
            <li className="flex gap-3 items-center md:w-[15rem] my-2">
              <div className="text-xs hidden bg-secondary opacity-30 w-8 h-8 rounded-[50%] md:flex items-center justify-center">
                <p className="text-xs">1</p>
              </div>
              <div>
                <h5 className="font-bold mb-2 text-sm">Sign-up</h5>
                <p className="opacity-70  text-xs">
                  Join Foodbank today and unlock stress-free grocery shopping!
                  Register now.
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-center md:w-[15rem] my-2">
              <div className="text-xs hidden bg-secondary opacity-30 w-8 h-8 rounded-[50%] md:flex items-center justify-center">
                <p className="text-xs">2</p>
              </div>
              <div>
                <h5 className="font-bold mb-2 text-sm">Complete KYC</h5>
                <p className="opacity-70  text-xs">
                  Access nutritious meals with ease. with Foodbank&apos;s
                  flexible food loans.
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-center md:w-[15rem] my-2">
              <div className="text-xs hidden bg-secondary opacity-30 w-8 h-8 rounded-[50%] md:flex items-center justify-center">
                <p className="text-xs">3</p>
              </div>
              <div>
                <h5 className="font-bold mb-2 text-sm">
                  Cart - CheckOut & Rece ive Order
                </h5>
                <p className="opacity-70 text-xs">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
              </div>
            </li>
          </ul>
        </article>
        <figure className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:block hidden">
          <img src="/assets/mockup.png" alt="mockup" />
        </figure>
        <article>
          <ul className="flex flex-col md:justify-between md:gap-20 gap-7">
            <li className="flex gap-3 items-center md:w-[15rem] my-2">
              <div className="text-xs hidden bg-secondary opacity-30 w-8 h-8 rounded-[50%] md:flex items-center justify-center">
                <p className="text-xs">1</p>
              </div>
              <div>
                <h5 className="font-bold mb-2 text-sm">Grocery Shopping</h5>
                <p className="opacity-70  text-xs">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-center md:w-[15rem] my-2">
              <div className="text-xs hidden bg-secondary opacity-30 w-8 h-8 rounded-[50%] md:flex items-center justify-center">
                <p className="text-xs">2</p>
              </div>
              <div>
                <h5 className="font-bold mb-2 text-sm"> Flexible Repayment</h5>
                <p className="opacity-70  text-xs">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-center md:w-[15rem] my-2">
              <div className="text-xs hidden bg-secondary opacity-30 w-8 h-8 rounded-[50%] md:flex items-center justify-center">
                <p className="text-xs">3</p>
              </div>
              <div>
                <h5 className="font-bold mb-2 text-sm">Ongoing Support</h5>
                <p className="opacity-70  text-xs">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
              </div>
            </li>
          </ul>
        </article>
      </section>
      <section className="flex flex-col justify-center gap-4 mt-2 items-center sm:flex-row md:gap-8">
        <div className="bg-black p-2 border rounded-sm w-[12rem]">
          <a
            href="https://play.google.com/store/apps/details?id=com.foodbank4u.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2"
          >
            <FaGooglePlay className="w-9 h-9 text-secondary" />
            <p className="text-white text-xs">
              Get it on <br />
              <span className="text-lg">Google Play</span>
            </p>
          </a>
        </div>
        <div className="bg-black p-2 border rounded-sm w-[12rem]">
          <a
            href="https://apps.apple.com/us/app/foodbankapp/id6608982689"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2"
          >
            <FaApple className="w-10 h-10 text-secondary" />
            <p className="text-white text-xs">
              Download on the <br />
              <span className="text-lg">Apple Store</span>
            </p>
          </a>
        </div>
      </section>
    </section>
  );
};

export default GetStartedSection;
