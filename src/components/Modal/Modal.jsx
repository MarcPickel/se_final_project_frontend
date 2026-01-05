import { useEffect } from "react";

function Modal({ name, image, alt, onClose, children }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal modal_type_${name}`} onClick={handleOverlay}>
      <img className="modal__image" src={image} alt={alt} />
      <button className="modal__close" type="button" onClick={onClose} />
      <div className="modal__container">{children}</div>
    </div>
  );
}

export default Modal;
