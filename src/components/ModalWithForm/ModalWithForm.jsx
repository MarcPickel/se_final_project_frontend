function ModalWithForm() {
  const isRegistered = name === "signup";
  const isLoggedIn = name === "signin";

  return (
    <div className="modal__form-content">
      <h2 className="modal__title">{title}</h2>
      <button onClick={onClose} className="modal__close" type="button" />
      <form className="modal__form" name={`${name}`} onSubmit={onSubmit}>
        {children}
        <div>
          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
          {isRegistered && isOpen ? (
            <button
              onClick={onLoginClick}
              className="modal__auth-button modal__auth-button_isVisible"
              type="button"
            >
              {logText}
            </button>
          ) : (
            <></>
          )}
          {isLoggedIn && isOpen ? (
            <button
              onClick={onRegisterClick}
              className="modal__auth-button modal__auth-button_isVisible"
              type="button"
            >
              {regText}
            </button>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
}

export default ModalWithForm;
