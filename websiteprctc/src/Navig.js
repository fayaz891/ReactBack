import React from "react";
import { NavLink } from "react-router-dom";
import {Button} from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PhotoOutlinedIcon from "@material-ui/icons/PhotoOutlined";
import ContactPhoneOutlinedIcon from "@material-ui/icons/ContactPhoneOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function Navig() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  ICE-CREAM
                </NavLink>
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={<HomeOutlinedIcon/>}
                        >
                          Home
                        </Button>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/gallery">
                        <Button variant="outlined" color="primary" startIcon={<PhotoOutlinedIcon/>}>
                          Gallery
                        </Button>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        <Button variant="outlined" color="primary" startIcon={<ContactPhoneOutlinedIcon/>}>
                          Contact
                        </Button>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/About">
                        <Button variant="outlined" color="primary" startIcon={<InfoOutlinedIcon/>}>
                          About
                        </Button>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navig;
