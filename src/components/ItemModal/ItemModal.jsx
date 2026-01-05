import "./ItemModal.css";

import Modal from "../Modal/Modal.jsx";

function ItemModal({ card, isOpen, onClose }) {
  // Extract data from card object or use defaults
  const image = card?.cover || "";
  const alt = card?.title || "Book cover";
  const title = card?.title || "";
  const author = card?.author || "";
  const description = card?.description || "";

  return (
    <Modal name="preview" isOpen={isOpen} onClose={onClose}>
      <img className="modal__image" src={image} alt={alt} />
      <div className="modal__content">
        <h2 className="modal__book-title">{title}</h2>
        <p className="modal__author">{author}</p>
        <p className="modal__description">{description}</p>
      </div>
    </Modal>
  );
}

export default ItemModal;
