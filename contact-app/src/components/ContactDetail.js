import image from "../images/default_image.png";
import { Link, useLocation } from "react-router-dom";

function ContactDetail() {
  const location = useLocation();
  const { id, name, phoneNumber, email } = location.state.contact;

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={image} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">
            Phone number: {phoneNumber}
            <br />
            Email: {email}
          </div>
        </div>
        <div className="extra content">
          <Link to="/">
            <span
              className="left floated caret left icon"
              style={{ marginRight: "10px" }}
            >
              <i className="caret left icon"></i>
              Back
            </span>
          </Link>
          <Link
            to={`/edit-contact/${id}`}
            state={{ contact: location.state.contact }}
          >
            <span className="edit icon onHoverGreen">
              <i className="edit icon"></i>
              Edit
            </span>
          </Link>
          <Link
            to={`/delete-contact/${id}`}
            state={{ contact: location.state.contact }}
          >
            <span className="right floated trash icon onHoverRed">
              <i className="trash alternate outline icon"></i>
              Delete
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
