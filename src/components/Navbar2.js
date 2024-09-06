// import React from 'react'
// import { Link } from 'react-router-dom'
// export default function Navbar2() {
//   return (
//     <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//   <div className="container-fluid">
//     <Link className="navbar-brand fs-1 fst-italic" to="/">GNITS Campus Placement Hub</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         {/* <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li> */}
//         <li className="nav-item">
//           <Link className="nav-link" to="/">Logout</Link>
//         </li>     
        
//       </ul>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }
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