import React from "react";
import { Auth } from "./Auth";
import ScrollToTop from "./ScrollToTop";
import UploadForm from "./UploadForm";

function SubmitPage({loggedIn}) {

  return (
    <>
      <ScrollToTop />
      {!loggedIn ? (
        <Auth />
      ) : (
        <section className="submit-section">
          <h1 className="submit-title">Submit A Pet</h1>
          <p className="submit-description">
            Submit your animal for adoption by filling out our form with their
            information, including name, breed, age, gender, and other important
            details. Once approved, your pet will be featured in our "Featured
            Pets" section for one month, giving them maximum exposure to
            potential adopters. If you want to continue promoting your pet for
            adoption after that, you will need to resubmit.
          </p>

          <p className="asterisk-text">
            *All fields are required for submission
          </p>

          <UploadForm />
        </section>
      )}
    </>
  );
}

export default SubmitPage;
