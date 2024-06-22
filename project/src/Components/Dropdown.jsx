import React, { useState } from "react";
import { ProductsDropdown } from "./Navitems";
import { Link } from "react-router-dom";
import "../css/Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "products-submenu clicked" : "products-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {ProductsDropdown .map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
