import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/" className="logo-link" >
      <h1 className="nav-title">
        PetAmig
        <span className="title-icon">
          <ion-icon name="paw"></ion-icon>
        </span>
      </h1>
      </Link>

      <Link to="/submit-pet" className="nav-link">
        <h2 href="#" >
          Submit Pet
        </h2>
      </Link>
    </nav>
  );
}

export default Nav;
