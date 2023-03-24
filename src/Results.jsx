import React from "react";
import { useState } from "react";
import PetCard from "./PetCard";
import Modal from "./Modal";
import Loader from "./Loader";

function Results(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const handlePetCardClick = (pet) => {
    setSelectedPet(pet);
    setShowModal(true);
    console.log(pet);
  };

  const handleModalClose = () => {
    setSelectedPet(null);
    setShowModal(false);
  };

  return (
    <>
      {/* <section className="results-section">
        <div className="petcard-container">
          {props.loading ? (
            <div className="empty">
              <Loader />
            </div>
          ) : props.pets ? (
            props.pets.map((pet) => (
              <PetCard
                pet={pet}
                key={pet.id}
                onClick={() => handlePetCardClick(pet)}
              />
            ))
          ) : (
            <h1 className="default-results-heading">
              Pets Available For Adoption
            </h1>
          )}
        </div>
        {showModal && (
          <Modal selectedPet={selectedPet} onClose={handleModalClose} />
        )}
      </section> */}

      <section className="results-section">
        {props.loading === true ? (
          <div className="empty">
            <Loader />
          </div>
        ) : props.loading === false &&
          props.pets !== null &&
          props.pets !== undefined ? (
          <div className="petcard-container">
            {props.pets.map((pet) => (
              <PetCard
                pet={pet}
                key={pet.id}
                onClick={() => handlePetCardClick(pet)}
              />
            ))}
          </div>
        ) : (
          <h1 className="default-results-heading">
            Pets Available For Adoption
          </h1>
        )}
        {showModal && (
          <Modal selectedPet={selectedPet} onClose={handleModalClose} />
        )}
      </section>
    </>
  );
}

export default Results;
