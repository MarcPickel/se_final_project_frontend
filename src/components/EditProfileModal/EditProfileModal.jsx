import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useForm from "../../hooks/useForm.js";
import { getToken } from "../../utils/token.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";
import { useContext, useEffect } from "react";

import rudolph from "../../assets/rudolph-ii-giuseppe-arcimboldi.jpg";

function EditProfileModal({ isOpen, onClose, handleEditProfile, editProfile }) {
  const defaultValues = { name: "", image: "" };
  const { userData } = useContext(CurrentUserContext);

  const { values, setValues, handleChange, handleReset } =
    useForm(defaultValues);
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
        handleReset(evt);
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
    </ModalWithForm>
  );
}

export default EditProfileModal;
