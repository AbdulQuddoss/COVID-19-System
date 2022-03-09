import React from "react";
import "../presontation/header.css";
import Logo from "../img/img-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./sign-in";

const Header = () => {
  return (
       <div>
         <Header1 />
         <Header2 />
         <Header3 />
       </div>
  );
};

const Header1 = () => {
  return(
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            Pakistan
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Provinces
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Punjab
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Sindh
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      khyber pakhtunkhwa
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Balochistan
                    </Link>
                  </li>
                </ul>
              </li>
              <div className="btnDiv">
                  <li><button type="btn" className="btn btn-primary controlLi"><Link className="controlBtn" to = "/signin">Sign In</Link></button></li>
                  <li><button type="btn" className="btn btn-primary controlLi"><Link className="controlBtn" to = "/signup">Sign Up</Link></button></li>
                  <li><button type="btn" className="btn btn-primary controlLi"><Link className="controlBtn" to = "/logout">Logout</Link></button></li>
                  </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const Header2 = () => {
  return(
    <div>
       <div className="logo">
        <div className="col1">
          <img src={Logo} alt="Loading..." width="80" height="80" />
          <p className="logo-title">
            COVID-19 Prediction and Information System
          </p>
        </div>
        <div className="col2"></div>
      </div>
    </div>
  );
};

const Header3 = () => {
  return(
    <div>
      <nav className="navbar navbar-expand-lg text-light thirdNav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style = {{color: "white"}}>
          <FontAwesomeIcon icon = {faHome}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" id = "thirdNavItems">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/datatable">
                  Information
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/prediction">
                  Prediction
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/video">
                  Videos
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
