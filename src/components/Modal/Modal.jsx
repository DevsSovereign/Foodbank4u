/* eslint-disable react/prop-types */
import React from "react";
import { gsap } from "gsap";

const Modal = React.forwardRef(
  ({ children, open, onClose, className }, ref) => {
    const modalRef = React.useRef(null);
    const animateOpen = () => {
      gsap.to(modalRef.current, {
        duration: 0.3,
        scale: 1,
        opacity: 1,
      });
    };
    const animateClose = () => {
      gsap.to(modalRef.current, {
        duration: 0.3,
        scale: 0,
        opacity: 0,
        onComplete: onClose,
      });
    };

    React.useEffect(() => {
      if (typeof window !== "undefined") {
        gsap.set(modalRef.current, { scale: 0, opacity: 0 });
        if (open) {
          animateOpen();
        } else {
          animateClose();
        }
      }
    }, [open]);
    return (
      <>
        <div
          ref={ref}
          onClick={onClose && animateClose}
          className={`modal-content  !mt-0 !mx-0 !mb-0 backdrop-blur-sm bg-[#0000000F] z-50  m-0 h-screen w-screen fixed top-0 left-0 ${
            open
              ? "flex"
              : "transform scale-0 transition-transform duration-300 ease-out animation-fade-in"
          }`}
        >
          <div
            ref={modalRef}
            className={`${className} w-screen h-screen modal-content `}
          >
            {children}
          </div>
        </div>
      </>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;

export const ModalContent = ({ children, className }) => {
  return (
    <div
      className={` rounded-2xl scroll-smooth ${className}`}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      {children}
    </div>
  );
};
