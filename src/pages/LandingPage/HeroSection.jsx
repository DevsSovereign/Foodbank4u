import { FaApple, FaGooglePlay } from "react-icons/fa"

const HeroSection = () => {
  return (
    <>
            <section className="bg-white pl-3 pt-3 pb-3 md:pb-0 mb-5 md:mb-0 flex relative">
        <section className="flex flex-col gap-3 w-[500px] md:w-[380px] lg:w-[580px] mx-auto items-center md:items-start mt-6 md:ml-3 relative z-10">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl md:leading-[70px] leading-[40px] sm:leading-[50px] text-center md:text-left">
            Eat Well Today, Pay Later: Flexible Food Loans for All
          </h1>
          <span className="absolute lg:top-[4.5rem] top-[14rem] -left-5 lg:w-[24rem] w-[15rem] md:block hidden">
            <img src="/assets/Vector.png" alt="vector" />
          </span>
          <p className="text-center md:text-left md:mr-10 my-5">
            Access nutritious meals, stress-free. Foodbank&apos;s innovative app
            offers flexible food loans, empowering you to eat well today and pay
            later. Join thousands securing food stability.
          </p>
          <figure className="md:hidden">
            <img
              src="/assets/IphoneImg.svg"
              alt="hand holding mobile phone with foodbank app on screen"
            />
          </figure>
          <section className="w-full md:mt-5 lg:mt-20">
            <p className="font-medium text-lg md:text-xl text-left md:mb-5">
              Download App From
            </p>
            <section className="flex flex-col justify-center md:justify-start gap-2 mt-2 items-center sm:flex-row md:gap-8">
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
            <section className="gap-10 pt-10 hidden md:flex">
              <div className="flex relative w-20">
                <figure className="absolute -top-3">
                  <img src="/assets/image1.png" alt="" />
                </figure>
                <figure className="absolute -top-3 w-12 right-0">
                  <img src="/assets/image2.png" alt="" />
                </figure>
                <figure className="absolute -top-3 -right-8">
                  <img src="/assets/image3.png" alt="" />
                </figure>
              </div>
              <div>
                <p>Join Active users</p>
              </div>
            </section>
          </section>
        </section>

        <section className="absolute hidden md:block w-[35rem] z-0 right-0">
          <figure className="">
            <img
              src="/assets/IphoneDesktopImg.png"
              alt="hand holding mobile phone with foodbank app on screen"
            />
          </figure>
        </section>
      </section>
    </>
  )
}

export default HeroSection