import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <>

    
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link                
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link                
                to="/city"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                City
              </Link>
            </li>
            <li className="nav-item">
              <Link
                
                to="/news"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                News
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
      </>

  );
}

export default Navbar;
