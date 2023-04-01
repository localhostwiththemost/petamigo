import React from "react";
import UploadForm from "./UploadForm";

function SubmitPage() {
  return (
    <>
      <section className="submit-section">
        <h1 className="submit-title">Submit A Pet</h1>
        <p className="submit-description">
          If you have an animal that you would like to submit for adoption, you
          can easily do so by filling out our submission form. This form allows
          you to upload data about your pet, including their name, breed, age,
          gender, and any other important information you would like to share.
        </p>

        <p className="submit-description">
          Once your submission is approved, your pet's information will be
          displayed in our "Featured Pets" section for one month, giving them
          maximum exposure to potential adopters. After that, the listing will
          be taken down, and you will need to resubmit if you would like to
          continue promoting your pet for adoption.
        </p>

        <p className="submit-description">
          We believe that every animal deserves a loving home, and we're
          committed to making the adoption process as easy and seamless as
          possible. So, if you're looking to give a furry friend a forever home,
          or if you have a pet that needs a new family, we encourage you to use
          our adoption website and take the first step in finding your perfect
          match.
        </p>

        <UploadForm />
      </section>
    </>
  );
}

export default SubmitPage;
