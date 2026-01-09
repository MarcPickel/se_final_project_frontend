import "./ModalWithForm.css";
import Modal from "../Modal/Modal.jsx";

function ModalWithForm({
  children,
  image,
  alt,
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  isValid,
}) {
  return (
    <Modal name={name} isOpen={isOpen} onClose={onClose}>
      <img className="modal__image" src={image} alt={alt} />
      <div className="modal__form-content">
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" name={`${name}`} onSubmit={onSubmit}>
          {children}
          <div>
            <button
              className="modal__submit-button"
              type="submit"
              disabled={!isValid}
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ModalWithForm;
