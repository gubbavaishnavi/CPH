import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <img
            src="../images/logo.png"
            alt="GNITS Logo"
            className="navbar-brand-logo"
            style={styles.divv}/>
          <div className="container-fluid">
            <Link className="navbar-brand fs-1 fst-italic ms-auto me-auto"to="/">Campus Placement Hub</Link>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/alumniSupport" style={{ color: 'rgba(0,0,0,0.5)' }}>
                  Chatrooms
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ color: 'rgba(0,0,0,0.5)' }}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

const styles={
  divv:{
    marginRight:'200px'
  }
};