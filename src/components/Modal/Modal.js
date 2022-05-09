import { useEffect } from "react";
import s from "./Modal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ closeModal, children }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  })
  
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

    return createPortal(
      <div className={s.Overlay} onClick={handleBackdropClick}>
        <div className={s.Modal}>{children}</div>
      </div>,
      modalRoot
    );
}


  // componentDidMount() {
  //   window.addEventListener("keydown", handleKeyDown);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("keydown", handleKeyDown);
  // }