import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function Nav({ loggedIn }) {
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav>
      <Link to="/" className="logo-link">
        <h1 className="nav-title">
          PetAmig
          <span className="title-icon">
            <ion-icon name="paw"></ion-icon>
          </span>
        </h1>
      </Link>

      {loggedIn ? (
        <button className="google-btn" onClick={logOut}>
          {" "}
          <img
            className="google-icon"
            src="images/google-icon.webp"
            alt="Google logo"
          />
          Sign Out
        </button>
      ) : (
        ""
      )}

      <Link to="/submit-pet" className="nav-link">
        <h2 href="#">Submit Pet</h2>
      </Link>
    </nav>
  );
}

export default Nav;
