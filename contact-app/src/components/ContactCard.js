import image from "../images/default_image.png";
import { Link } from "react-router-dom";

function ContactCard(props) {
  const { id, name, phoneNumber, email } = props.contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={image} alt="user" />
      <div className="content">
        <Link to={`/view-contact/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div>
            {phoneNumber}
            <br />
            {email}
          </div>
        </Link>
      </div>
      <Link to={`/delete-contact/${id}`} state={{ contact: props.contact }}>
        <i
          className="red trash alternate outline icon right floated"
          style={{ cursor: "pointer" }}
        ></i>
      </Link>
      <Link to={`edit-contact/${id}`} state={{ contact: props.contact }}>
        <i
          className="green edit icon right floated"
          style={{ cursor: "pointer" }}
        ></i>
      </Link>
    </div>
  );
}

export default ContactCard;
