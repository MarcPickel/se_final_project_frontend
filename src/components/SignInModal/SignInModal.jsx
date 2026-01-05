import useForm from "../../hooks/useForm.js";

function SignInModal() {
  const defaultValues = { email: "", password: "" };
  const { values, handleChange, handleReset } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();

    handleSignIn(values)
      .then(() => {
        onClose();
        handleReset(evt);
      })
      .catch(console.error);
  }

  return (
    <ModalWithForm
      name="signin"
      title="Sign In"
      buttonText={buttonText}
      onClose={onClose}
      onSignInClick={onSignInClick}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <label htmlFor="email-signup" className="modal__label">
        Email*
        <input
          id="email-signup"
          type="email"
          name="email"
          className="modal__input"
          placeholder="Email"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password-signup" className="modal__label">
        Password*
        <input
          id="password-signup"
          type="password"
          name="password"
          className="modal__input"
          placeholder="Password"
          required
          value={values.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default SignInModal;
