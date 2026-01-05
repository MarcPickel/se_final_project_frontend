import useForm from "../../hooks/useForm.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

import lincoln from "../../assets/boy-lincoln-reading-eastman-johnson.jpeg";

function SignUpModal({ isOpen, onClose, handleSignUp }) {
  const defaultValues = { email: "", password: "", name: "", image: "" };
  const { values, handleChange, handleReset } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();

    handleSignUp(values)
      .then(() => {
        onClose();
        handleReset(evt);
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
      <label htmlFor="name-signup" className="modal__label">
        Name*
        <input
          id="name-signup"
          type="name"
          name="name"
          className="modal__input"
          placeholder="Name"
          required
          value={values.name}
          onChange={handleChange}
        />
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
      </label>
    </ModalWithForm>
  );
}

export default SignUpModal;
