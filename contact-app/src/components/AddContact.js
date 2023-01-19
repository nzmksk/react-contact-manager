import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

function AddContact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const { addContactHandler } = useContactsCrud();

  const addContact = (event) => {
    event.preventDefault();
    const formData = Object.values(form);
    if (formData.some((value) => value === "")) {
      alert("All fields are mandatory!");
    } else {
      addContactHandler(form);
      setForm({ name: "", phoneNumber: "", email: "" });
      navigate("/");
    }
  };

  const handleFormChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="ui main">
      <h3 className="ui medium header">Add New Contact</h3>
      <form className="ui form" onSubmit={addContact}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
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
            value={form.phoneNumber}
            onChange={handleFormChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleFormChange}
          />
        </div>
        <Link to="/">
          <button
            className="ui animated grey button left floated"
            type="button"
          >
            <div className="visible content">Back</div>
            <div className="hidden content">
              <i className="caret left icon"></i>
            </div>
          </button>
        </Link>
        <button
          className="ui vertical animated blue button right floated"
          type="submit"
        >
          <div className="visible content">Add</div>
          <div className="hidden content">
            <i className="user plus icon"></i>
          </div>
        </button>
      </form>
    </div>
  );
};

export default AddContact;
