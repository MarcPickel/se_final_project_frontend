import { useEffect } from "react";
import useFormAndValidation from "../../hooks/useFormAndValidation.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

import clergyman from "../../assets/young-clergyman-reading-martin-rorbye.jpg";

function SignInModal({ isOpen, onClose, handleSignIn }) {
  const defaultValues = { email: "", password: "" };
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    if (isOpen) {
      setValues(defaultValues);
    }
  }, [isOpen, setValues]);

  function handleSubmit(evt) {
    evt.preventDefault();

    handleSignIn(values)
      .then(() => {
        onClose();
        resetForm();
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
      isValid={isValid}
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
        {errors.email && <span className="modal__error">{errors.email}</span>}
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
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
    </ModalWithForm>
  );
}

export default SignInModal;
