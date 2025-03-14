import { FaApple, FaGooglePlay } from "react-icons/fa";
import Modal, { ModalContent } from "./Modal";
import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const GetStartedModal = ({ closeModal }) => {
  return (
    <Modal
      open={true}
      onClose={closeModal}
      className="flex items-center justify-center"
    >
      <ModalContent className="mx-3 p-6 rounded-md shadow-lg flex flex-col justify-center items-center bg-white w-[80%] md:w-[55%] lg:w-[50%] xl:w-[50%] relative text-black">
        <IoClose
          onClick={closeModal}
          className="w-8 h-8 cursor-pointer absolute top-3 right-3"
        />
        <h1 className="font-semibold text-center pt-6 md:text-2xl text-xl">
          Download the FoodBank App to Enjoy Seamless Food Access!
        </h1>
        <p className="hidden md:block text-center my-4">
          Get the best experience by using our mobile app. Order and manage your
          food deliveries effortlessly—all in one place!
        </p>
        <section className="flex flex-col justify-center md:justify-start gap-2 my-2 items-center sm:flex-row md:gap-8">
          <div className="bg-black p-2 rounded-xl md:w-[10rem] w-[8rem]">
            <a
              href="https://play.google.com/store/apps/details?id=com.foodbank4u.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2"
            >
              <FaGooglePlay className="w-8 h-8 text-secondary" />
              <p className="text-white text-xs">
                Get it on <br />
                <span className="font-semibold md:text-lg">Google Play</span>
              </p>
            </a>
          </div>
          <div className="bg-black p-2 rounded-xl  md:w-[10rem] w-[8rem]">
            <a
              href="https://apps.apple.com/us/app/foodbankapp/id6608982689"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2"
            >
              <FaApple className="w-8 h-8 text-secondary" />
              <p className="text-white text-xs">
                Download on <br />
                <span className="font-semibold md:text-lg">Apple Store</span>
              </p>
            </a>
          </div>
        </section>
        <p>Or Scan</p>
        <section className="flex gap-5 justify-between md:w-1/2 mt-2 ">
          <figure className="md:w-32 w-20">
            <img
              src="/assets/androidCode"
              alt="QR code for android"
              className="w-full"
            />
            <figcaption className="font-semibold text-center text-xs md:text-sm">
              For Android
            </figcaption>
          </figure>
          <figure className="md:w-32 w-20">
            <img
              src="/assets/iosCode"
              alt="QR code for ios"
              className="w-full"
            />
            <figcaption className="font-semibold text-center text-xs md:text-sm">
              For iOS
            </figcaption>
          </figure>
        </section>
      </ModalContent>
    </Modal>
  );
};

export default GetStartedModal;
