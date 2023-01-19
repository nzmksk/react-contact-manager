import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const EditContact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, name, phoneNumber, email } = location.state.contact;
  const [editForm, setEditForm] = useState({
    name: name,
    phoneNumber: phoneNumber,
    email: email,
  });
  const { updateContactHandler } = useContactsCrud();

  const updateContact = (event) => {
    event.preventDefault();
    const newFormData = Object.values(editForm);
    if (newFormData.some((value) => value === "")) {
      alert("All fields are mandatory!");
    } else {
      updateContactHandler({id, ...editForm});
      setEditForm({ name: "", phoneNumber: "", email: "" });
      navigate("/");
    }
  };

  const handleFormChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="ui main">
      <h3 className="ui medium header">Edit Contact</h3>
      <form className="ui form" onSubmit={updateContact}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={editForm.name}
            onChange={handleFormChange}
          />
        </div>
        <div className="field">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            pattern="^\+?[1-9]?\d{10,11}$"
            title="Please insert 10-11 digits number"
            placeholder="Phone Number"
            value={editForm.phoneNumber}
            onChange={handleFormChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={editForm.email}
            onChange={handleFormChange}
          />
        </div>
        <Link to="/">
          <button
            className="ui vertical animated grey button left floated"
            type="button"
          >
            <div className="visible content">Cancel</div>
            <div className="hidden content">
              <i className="close icon"></i>
            </div>
          </button>
        </Link>
        <button
          className="ui animated green button right floated"
          type="submit"
        >
          <div className="visible content">Update</div>
          <div className="hidden content">
            <i className="caret right icon"></i>
          </div>
        </button>
      </form>
    </div>
  );
};

export default EditContact;
