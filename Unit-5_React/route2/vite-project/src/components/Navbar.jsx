import styled from 'styled-components'
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return (<NavbarStle>
             <Link className="nav"  to="/">Time Management Tool</Link>
    </NavbarStle>)
}
 
const NavbarStle = styled.div`
    padding:10px;
    border-bottom:1px solid blue;
    background-color: #fff;
    text-shadow: 2px 2px #ff0000;
    font-size: 30px;
    text-align: center;
    text-decoration:none;
 $>.nav{
      text-decoration:none;
 }
`
export default Navbar 