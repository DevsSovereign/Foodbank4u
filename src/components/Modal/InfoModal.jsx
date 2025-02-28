import Modal, { ModalContent } from "./Modal";

// eslint-disable-next-line react/prop-types
const InfoModal = ({ closeModal, info }) => {
  return (
    <Modal
      open={true}
      onClose={closeModal}
      className="flex items-center justify-center"
    >
      <ModalContent className="mx-3 p-6 rounded-md shadow-lg flex flex-col justify-center items-center bg-white w-[80%] md:w-[55%] lg:w-[50%] xl:w-[50%] relative">
        <h1 className="font-semibold text-center py-6 text-2xl">{info}!</h1>
        <button type="button" className="bg-secondary text-white p-2 w-20 rounded-md" onClick={closeModal}>
          Ok
        </button>
      </ModalContent>
    </Modal>
  );
};

export default InfoModal;
