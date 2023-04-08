import React from "react";

function FeaturedPetModal({ selectedPet, onClose }) {
  return (
    <>
      <div className="modal-bg">
        <div className="modal">
          <ion-icon name="close-outline" onClick={onClose}></ion-icon>
          <div className="modal-content">
            {selectedPet && (
              <div className="modal-pet-info">
                <img
                  src={
                    selectedPet.imageUrl
                      ? selectedPet.imageUrl
                      : "https://via.placeholder.com/400"
                  }
                  alt={`${selectedPet.name} - ${selectedPet.breed}`}
                />

                <div className="featured-pet-info__container">
                  <div className="pet-info__description">
                    <h1 className="pet-info__name">{selectedPet.name}</h1>
                    <h2 className="pet-info">{selectedPet.gender}</h2>
                    <h2 className="pet-info">{selectedPet.breed}</h2>
                    <h2 className="pet-info">{`${selectedPet.city}, ${selectedPet.state}`}</h2>
                    <h2 className="pet-info">
                      Email:{" "}
                      <a
                        href={`mailto:${selectedPet.email}`}
                        className="pet-info__link"
                      >
                        {selectedPet.email}
                      </a>
                    </h2>
                    <h2 className="pet-info">
                      Phone:{" "}
                      {selectedPet.phone ? (
                        <a
                          href={`tel:${selectedPet.phone}`}
                          className="pet-info__link"
                        >
                          {selectedPet.phone}
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </h2>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedPetModal;
