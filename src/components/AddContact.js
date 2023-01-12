import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    phoneNumber: "",
    email: "",
  };

  addContact = (event) => {
    event.preventDefault();
    const stateVals = Object.values(this.state);
    if (stateVals.some((value) => value === "")) {
      alert("All fields are mandatory!");
    } else {
      this.props.addContactHandler(this.state);
      this.setState({ name: "", phoneNumber: "", email: "" });
    }
  };

  render() {
    return (
      <div className="ui main">
        <h3 className="ui medium header">Add New Contact</h3>
        <form className="ui form" onSubmit={this.addContact}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="number"
              name="phone_number"
              placeholder="Phone Number"
              value={this.state.phoneNumber}
              onChange={(e) => {
                this.setState({ phoneNumber: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <button className="ui primary button">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
