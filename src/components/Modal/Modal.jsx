import "./Modal.css";

import { useEffect } from "react";

function Modal({ name, isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen || !onClose) return;

    const handleEscape = (e) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div
      className={`modal  ${isOpen && "modal_opened"} modal_type_${name}`}
      onClick={handleOverlay}
    >
      <div className="modal__container">
        {children}
        <button className="modal__close" type="button" onClick={onClose} />
      </div>
    </div>
  );
}

export default Modal;
