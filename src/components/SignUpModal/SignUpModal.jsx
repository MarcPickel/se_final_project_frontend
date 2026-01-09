import { useEffect } from "react";
import useFormAndValidation from "../../hooks/useFormAndValidation.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

import lincoln from "../../assets/boy-lincoln-reading-eastman-johnson.jpeg";

function SignUpModal({ isOpen, onClose, handleSignUp }) {
  const defaultValues = { email: "", password: "", name: "", image: "" };
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    if (isOpen) {
      setValues(defaultValues);
    }
  }, [isOpen, setValues]);

  function handleSubmit(evt) {
    evt.preventDefault();

    handleSignUp(values)
      .then(() => {
        onClose();
        resetForm();
      })
      .catch(console.error);
  }

  return (
    <ModalWithForm
      image={lincoln}
      alt="Boy Lincoln Reading, Eastman Johnson"
      name="signup"
      title="Sign Up"
      buttonText="Sign Up"
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      isValid={isValid}
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
        {errors.email && <span className="modal__error">{errors.email}</span>}
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
          minLength="6"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
      <label htmlFor="name-signup" className="modal__label">
        Name*
        <input
          id="name-signup"
          type="text"
          name="name"
          className="modal__input"
          placeholder="Name"
          required
          minLength="2"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <span className="modal__error">{errors.name}</span>}
      </label>
      <label htmlFor="image-signup" className="modal__label">
        Profile URL*
        <input
          id="image-signup"
          type="url"
          name="image"
          className="modal__input"
          placeholder="Image URL"
          required
          value={values.image}
          onChange={handleChange}
        />
        {errors.image && <span className="modal__error">{errors.image}</span>}
      </label>
    </ModalWithForm>
  );
}

export default SignUpModal;
