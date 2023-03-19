import React from "react";
import PetCard from "./PetCard";

function Results(props) {
  return (
    <>
      <section className="results-section">
        <div className="petcard-container">
        {props.pets ? (
          props.pets.map((pet) => <PetCard pet={pet} key={pet.id} />)
        ) : (
          <h1 className="default-results-heading">
            Pets Available For Adoption
          </h1>
        )}
      </div>
      </section>
    </>
  );
}

export default Results;
