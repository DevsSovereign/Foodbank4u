import { FaApple, FaGooglePlay } from "react-icons/fa";

const InquirySection = () => {
  return (
    <section className="md:px-20 px-3 py-10 font-ppins">
      <h3 className="md:text-5xl text-3xl text-center font-bold mb-5">Subscribe to Our Newsletter?</h3>
      <p className="text-center opacity-70 md:w-1/2 mx-auto">
      Stay updated with our latest news, exclusive offers, and insightful tips. Subscribe now and never miss an update!
      </p>

      <section className="md:w-1/2 mx-auto my-20">
        <input
          type="email"
          name="inquiry"
          id="inquiry"
          className="border p-3 w-full my-4 text-sm"
          placeholder="Enter email address"
        />
        <div className="w-fit mx-auto mb-3">
          <button
            type="button"
            className="bg-secondary text-white p-3 rounded-md "
          >
            Subcribe
          </button>
        </div>
        <p className="text-center opacity-70">
          We’ll never share your details with third parties. <br />View our Privacy
          Policy for more info.
        </p>
      </section>
      <section>
        <figure className="w-fit mx-auto">
          <img src="/assets/videoImg.png" alt="" />
        </figure>
        <section className="flex flex-col md:flex-row justify-between my-10">
          <p className="md:text-5xl text-2xl font-bold lg:w-1/2 text-center md:text-left mb-3 md:mb-0">
            Ready to launch your next project?
          </p>
          <div>
            <section className="flex flex-col justify-center md:justify-start gap-2 mt-2 items-center lg:flex-row md:gap-4">
              <div className="bg-black p-2 rounded-xl w-[12rem]">
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
              <div className="bg-black p-2 rounded-xl w-[12rem]">
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
          </div>
        </section>
      </section>
    </section>
  );
};

export default InquirySection;
