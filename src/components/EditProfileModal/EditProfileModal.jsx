import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useFormAndValidation from "../../hooks/useFormAndValidation.js";

import { getToken } from "../../utils/token.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";
import { useContext, useEffect } from "react";

import rudolph from "../../assets/rudolph-ii-giuseppe-arcimboldi.jpg";

function EditProfileModal({ isOpen, onClose, handleEditProfile, editProfile }) {
  const { userData } = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();
  const token = getToken();

  useEffect(() => {
    if (isOpen && userData)
      setValues({
        name: userData.name || "",
        image: userData.image || "",
      });
  }, [isOpen, userData]);

  function handleSubmit(evt) {
    evt.preventDefault();
    editProfile(values, token)
      .then((userData) => {
        handleEditProfile(userData);
        onClose();
        resetForm();
      })
      .catch(console.error);
  }

  return (
    <ModalWithForm
      image={rudolph}
      alt="Rudolph II, Giuseppe Arcimboldi"
      name="edit-profile"
      title="Edit Profile"
      buttonText="Save Changes"
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      isValid={isValid}
    >
      <label htmlFor="name-edit" className="modal__label">
        Name*
        <input
          id="name-edit"
          type="name"
          name="name"
          className="modal__input"
          placeholder="Name"
          required
          value={values.name}
          onChange={handleChange}
        />
      </label>
      {errors.name && <span className="modal__error">{errors.name}</span>}
      <label htmlFor="image-edit" className="modal__label">
        Profile URL*
        <input
          id="image-edit"
          type="url"
          name="image"
          className="modal__input"
          placeholder="Image URL"
          required
          value={values.image}
          onChange={handleChange}
        />
      </label>
      {errors.image && <span className="modal__error">{errors.image}</span>}
    </ModalWithForm>
  );
}

export default EditProfileModal;
