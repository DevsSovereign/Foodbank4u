const HowItWorks = () => {
  return (
    <section>
      <article className="text-center py-10">
        <h4 className="font-semibold">Innovative</h4>
        <h3 className="font-bold text-secondary my-2 text-3xl min-[810px]:text-4xl">
          How It Works
        </h3>
        <p>
          Discover the key services and processes that drive our Foodbank’s
          impact, ensuring food support for those in need and fostering
          community growth
        </p>
      </article>
      <section className="w-fit mx-auto">
        <div className="flex justify-between px-2 mt-16">
          <h3 className="font-semibold sm:text-xl text-sm w-20 sm:w-44 pr-1">
            Reach Out
          </h3>

          <section className="border-l-2 border-black w-3/4 px-5 mb-3 relative">
            <div className="h-11 border-l-2 border-black absolute -top-[4.3rem] -left-[2px]"></div>
            <div className="w-3 h-3 rounded-[50%] bg-black absolute -top-[1.2rem] -left-[7px]"></div>

            <p>Fill out our online form or call us to request a consultation</p>
            <button className="p-2 my-2 mb-10 border text-sm border-black w-32">
              Book
            </button>

            <figure className="md:w-[20rem] sm:w-[15rem] w-[10rem]">
              <img
                src="/assets/doctor.png"
                alt="a stethoscope hanging on the neck of a doctor"
                className="h-full w-full"
              />
            </figure>
          </section>
        </div>
        <div className="flex justify-between px-2 mt-16">
          <h3 className="font-semibold sm:text-xl text-sm w-20 sm:w-44 pr-1">
            Get Matched
          </h3>

          <section className="border-l-2 border-black w-3/4 px-5 mb-3 relative">
            <div className="h-11 border-l-2 border-black absolute -top-[4.3rem] -left-[2px]"></div>
            <div className="w-3 h-3 rounded-[50%] bg-black absolute -top-[1.2rem] -left-[7px]"></div>

            <p>
              We’ll connect you with a qualified dietitian based on your needs
            </p>
            <button className="p-2 my-2 mb-10 border text-sm border-black w-32">
              Book
            </button>

            <figure className="md:w-[20rem] sm:w-[15rem] w-[10rem]">
              <img
                src="/assets/injection.png"
                alt="a patient being injected on the arm"
                className="h-full w-full"
              />
            </figure>
          </section>
        </div>
        <div className="flex justify-between px-2 mt-16">
          <h3 className="font-semibold sm:text-xl text-sm w-20 sm:w-44 pr-1">
            Consult and Plan
          </h3>

          <section className="border-l-2 border-black w-3/4 px-5 mb-3 relative">
            <div className="h-11 border-l-2 border-black absolute -top-[4.3rem] -left-[2px]"></div>
            <div className="w-3 h-3 rounded-[50%] bg-black absolute -top-[1.2rem] -left-[7px]"></div>

            <p>Receive expert advice and a personalized nutrition plan.</p>
            <button className="p-2 my-2 mb-10 border text-sm border-black w-32">
              Book
            </button>

            <figure className="md:w-[20rem] sm:w-[15rem] w-[10rem]">
              <img
                src="/assets/doctorOnPhone.png"
                alt="doctor smiling on a call"
                className="h-full w-full"
              />
            </figure>
          </section>
        </div>
      </section>
    </section>
  );
};

export default HowItWorks;
