import image from "../images/default_image.png";

function ContactCard(props) {
  const { id, name, phoneNumber, email } = props.contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={image} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>
          {phoneNumber}
          <br />
          {email}
        </div>
      </div>
      <i
        className="red trash alternate icon"
        style={{cursor: 'pointer'}}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
}

export default ContactCard;
