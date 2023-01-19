import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="ui menu">
      <Link to="/">
        <h1 className="ui centered header">
          <i className="address book icon blue"></i>
          <div className="content">Contact Manager</div>
        </h1>
      </Link>
    </div>
  );
}

export default Header;
