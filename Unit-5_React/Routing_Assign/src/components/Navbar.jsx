import { Link } from "react-router-dom";

import "./mystyle.css"


export const Navbar = () => {



  return (
    <div className="navbar">
      <Link className="nav"  to="/">Home</Link>
      <Link className="nav" to="/products" >
        Products list
      </Link>
    </div>
  );
};

// const StyledLink = styled(Link)``
