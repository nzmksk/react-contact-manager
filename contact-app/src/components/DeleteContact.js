import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

function DeleteContact() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, name, phoneNumber, email } = location.state.contact;
  const { removeContactHandler } = useContactsCrud();

  const removeContact = () => {
    removeContactHandler(id);
    navigate("/");
  };

  return (
    <>
      <div className="ui warning message">
        <div className="header">
          Are you sure you want to{" "}
          <span style={{ color: "red" }}>
            <em>delete</em>
          </span>{" "}
          this contact?
        </div>
        <hr />
        Name: {name}
        <br />
        Phone Number: {phoneNumber}
        <br />
        Email: {email}
      </div>
      <Link to="/">
        <button className="ui animated button grey left floated" type="button">
          <div className="visible content">Back</div>
          <div className="hidden content">
            <i className="caret left icon"></i>
          </div>
        </button>
      </Link>
      <button
        className="ui vertical animated button red right floated"
        onClick={removeContact}
        type="button"
      >
        <div className="visible content">Delete</div>
        <div className="hidden content">
          <i className="trash alternate outline icon"></i>
        </div>
      </button>
    </>
  );
}

export default DeleteContact;
