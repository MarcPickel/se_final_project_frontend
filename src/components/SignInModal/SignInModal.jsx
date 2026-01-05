import useForm from "../../hooks/useForm.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

import clergyman from "../../assets/young-clergyman-reading-martin-rorbye.jpg";

function SignInModal({ isOpen, onClose, handleSignIn }) {
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
      image={clergyman}
      alt="Young Clergyman Reading, Martin Rorbye"
      name="signin"
      title="Sign In"
      buttonText="Sign In"
      onClose={onClose}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <label htmlFor="email-signin" className="modal__label">
        Email*
        <input
          id="email-signin"
          type="email"
          name="email"
          className="modal__input"
          placeholder="Email"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password-signin" className="modal__label">
        Password*
        <input
          id="password-signin"
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
