import React from "react";

function Modal({ selectedPet, onClose }) {
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
                    selectedPet.primary_photo_cropped
                      ? selectedPet.primary_photo_cropped.small
                      : "https://via.placeholder.com/400"
                  }
                  alt={`${selectedPet.name} - ${selectedPet.breeds.primary}`}
                />

                <div className="pet-info__container">
                  <div className="pet-info__description">
                    <h1 className="pet-info__name">{selectedPet.name}</h1>
                    <h2 className="pet-info">{selectedPet.gender}</h2>
                    <h2 className="pet-info">
                      {selectedPet.breeds.secondary
                        ? `${selectedPet.breeds.primary}/${selectedPet.breeds.secondary}`
                        : `${selectedPet.breeds.primary}`}
                    </h2>
                    <h2 className="pet-info">{`${selectedPet.contact.address.city}, ${selectedPet.contact.address.state}`}</h2>
                    <h2 className="pet-info">
                      Email:{" "}
                      <a
                        href={`mailto:${selectedPet.contact.email}`}
                        className="pet-info__link"
                      >
                        {selectedPet.contact.email}
                      </a>
                    </h2>
                    <h2 className="pet-info">
                      Phone:{" "}
                      {selectedPet.contact.phone ? (
                        <a
                          href={`tel:${selectedPet.contact.phone}`}
                          className="pet-info__link"
                        >
                          {selectedPet.contact.phone}
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </h2>
                  </div>
                  <a
                    href={selectedPet.url}
                    target="_blank"
                    className="learnmore-link"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
