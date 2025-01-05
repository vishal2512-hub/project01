<<<<<<< HEAD
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
       <div className="navbar">
      <h1>LOGO</h1>
      <ul className="menu-items">
        <li>MENS</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>CART</li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
=======
import { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import UserContext from "../Context/Usercontext";

const Navbar = () => {
  const [btnname, setbtnname] = useState("light");
  const user = useContext(UserContext);

  useEffect(() => {
  }, []);

  return (
    <div>
      <div className="flex justify-between px-10 py-5 shadow-sm" >
        <h1 className="font-bold text-2xl">AJIO</h1>
        <ul className="flex justify-between w-[60%]" >
          <li>
            <Link to="/mens">MENS</Link>
          </li>
          <li>
            <Link to="/women">WOMEN</Link>
          </li>
          <li>
            <Link to="/kids">KIDS</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
          <Link to="/grocery">GROCERY</Link>
          </li>
          <li>{user.name  }</li>
          <button className="bg-purple-600 px-6 py-2 rounded-lg  text-[#f0f0f0f0]"
            onClick={() => {
              btnname === "light" ? setbtnname("dark") : setbtnname("light");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
>>>>>>> f40fda7 (Initial commit)
