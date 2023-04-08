import React, { useState, useEffect } from "react";
import FeaturedPetCard from "./FeaturedPetCard";
import FeaturedPetModal from "./FeaturedPetModal";
import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";

function FeaturedPets() {
  const [featuredPets, setFeaturedPets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const petCollectionRef = collection(db, "petCollection");

  const handlePetCardClick = (pet) => {
    setSelectedPet(pet);
    setShowModal(true);
    console.log(pet);
  };

  const handleModalClose = () => {
    setSelectedPet(null);
    setShowModal(false);
  };

  useEffect(() => {
    const getFeaturedPets = async () => {
      try {
        const data = await getDocs(petCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFeaturedPets(filteredData);
       // console.log(featuredPets);
      } catch (err) {
        console.log(err);
      }
    };

    getFeaturedPets();
  }, []);

  console.log(featuredPets);

  return (
    <>
      <section className="featured-section">
        <div className="heading-container">
          <h1 className="featured-heading">Featured Pets</h1>
        </div>

        <div className="petcard-container">
          {featuredPets.length > 0
            ? featuredPets.map((pet) => {
                return (
                  <FeaturedPetCard
                    key={pet.id}
                    pet={pet}
                    onClick={() => handlePetCardClick(pet)}
                  />
                );
              })
            : ""}
        </div>

        {showModal && (
          <FeaturedPetModal
            selectedPet={selectedPet}
            onClose={handleModalClose}
          />
        )}
      </section>
    </>
  );
}

export default FeaturedPets;
