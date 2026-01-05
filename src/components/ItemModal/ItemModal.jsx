import "./ItemModal.css";

import Modal from "../Modal/Modal.jsx";

function ItemModal({ image, alt, title, author, description }) {
  return (
    <Modal>
      <img className="modal__image" src={image} alt={alt} />
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <p className="modal__author">{author}</p>
        <p className="modal__description">{description}</p>
      </div>
    </Modal>
  );
}

export default ItemModal;
