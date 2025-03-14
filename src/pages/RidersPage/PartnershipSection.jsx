const PartnershipSection = () => {
  return (
    <section className="bg-white relative z-20 md:p-10 px-3 py-20">
      <h3 className="text-center text-4xl mb-3">
        Requirements for Partnership
      </h3>
      <p className="opacity-70 text-center">
        To ensure a seamless partnership, please note the following
        requirements:
      </p>
      <section className="flex flex-col md:flex-row justify-between my-10 lg:gap-40 md:gap-20 md:w-fit items-center mx-auto">
        <figure
          className="md:w-[350px] md:h-[450px] mb-10 md:mb-0"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img
            src="/assets/guy.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </figure>
        <section>
          <ul className="flex flex-col gap-10">
            <li
              className="font-semibold text-lg flex items-center gap-3"
              data-aos="slide-left"
              data-aos-offset="100"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="bg-secondary w-6 text-sm text-center h-6 rounded-[50%] text-white">
                1
              </div>
              Valid driver&apos;s license and vehicle insurance
            </li>
            <li
              className="font-semibold text-lg flex items-center gap-3"
              data-aos="slide-left"
              data-aos-offset="100"
              data-aos-delay="10"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <div className="bg-secondary w-6 text-sm text-center h-6 rounded-[50%] text-white">
                2
              </div>
              Reliable vehicle (car, bike, or scooter)
            </li>
            <li
              className="font-semibold text-lg flex items-center gap-3"
              data-aos="slide-left"
              data-aos-offset="100"
              data-aos-delay="10"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out"
            >
              <div className="bg-secondary w-6 text-sm text-center h-6 rounded-[50%] text-white">
                3
              </div>
              Smartphone with GPS and internet connectivity
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default PartnershipSection;
