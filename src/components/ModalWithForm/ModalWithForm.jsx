function ModalWithForm() {
  return (
    <div className="modal__form-content">
      <h2 className="modal__title">{title}</h2>
      <form className="modal__form" name={`${name}`} onSubmit={onSubmit}>
        {children}
        <div>
          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalWithForm;
