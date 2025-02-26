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
      <ModalContent className="mx-3 p-6 rounded-md shadow-lg flex flex-col justify-center items-center bg-white w-[80%] md:w-[55%] lg:w-[50%] xl:w-[50%] relative">
        <IoClose
          onClick={closeModal}
          className="w-8 h-8 cursor-pointer absolute top-3 right-3"
        />
        <h1 className="font-semibold text-center pt-6 text-2xl">
          Download the FoodBank App to Enjoy Seamless Food Access!
        </h1>
        <p className="text-center my-4">
          Get the best experience by using our mobile app. Order and manage your
          food deliveries effortlessly—all in one place!
        </p>
        <section className="flex flex-col justify-center md:justify-start gap-2 my-2 items-center sm:flex-row md:gap-8">
          <div className="bg-black p-2 rounded-xl w-[10rem]">
            <a
              href="https://play.google.com/store/apps/details?id=com.foodbank4u.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2"
            >
              <FaGooglePlay className="w-8 h-8 text-secondary" />
              <p className="text-white text-xs">
                Get it on <br />
                <span className="font-semibold text-lg">Google Play</span>
              </p>
            </a>
          </div>
          <div className="bg-black p-2 rounded-xl w-[10rem]">
            <a
              href="https://apps.apple.com/us/app/foodbankapp/id6608982689"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2"
            >
              <FaApple className="w-8 h-8 text-secondary" />
              <p className="text-white text-xs">
                Download on the <br />
                <span className="font-semibold text-lg">Apple Store</span>
              </p>
            </a>
          </div>
        </section>
      </ModalContent>
    </Modal>
  );
};

export default GetStartedModal;
