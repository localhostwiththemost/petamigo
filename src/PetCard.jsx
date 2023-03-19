import React from "react";

function PetCard({
  pet: { id, primary_photo_cropped, name, breeds, contact },
}) {
  // Split the string into an array of words
  let nameArr = name.split(" ");

  // Take the first word
  let firstWordName = nameArr[0];

  return (
    <>
      <div className="pet-card">
        <div>
          <img
            src={
              primary_photo_cropped
                ? primary_photo_cropped.small
                : "https://via.placeholder.com/400"
            }
            alt="A pet available for adoption"
            className="pet-img"
          />
        </div>

        <div className="pet-info__container">
          <h1 className="pet-name">{firstWordName}</h1>
          <h2>{breeds.primary}</h2>
          <h2>{contact.address.city}, {contact.address.state}</h2>
        </div>
      </div>
    </>
  );
}

export default PetCard;
