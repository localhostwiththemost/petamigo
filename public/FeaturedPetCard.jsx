import React from "react";

function FeaturedPetCard({ pet, onClick }) {
  return (
    <>
      <div className="pet-card" key={pet.id} onClick={onClick}>
        <div>
          <img
            src={
              pet.imageUrl
                ? `${pet.imageUrl}`
                : "https://via.placeholder.com/400"
            }
            alt="A pet available for adoption"
            className="pet-img"
          />
        </div>

        <div className="card-info__container">
          <h1 className="pet-name">{pet.name}</h1>
          <h2 className="pet-breed">{pet.breed}</h2>
          <h2 className="pet-location">
            {pet.city}, {pet.state}
          </h2>
        </div>
      </div>
    </>
  );
}

export default FeaturedPetCard;
