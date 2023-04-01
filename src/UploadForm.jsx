import React from "react";
import { useState } from "react";
import { addPet } from "./petCollection.js";
import { db } from "./firebase.js";

function UploadForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPet(db, { name, gender, breed, city, email, phone });
    setName("");
    setGender("");
    setBreed("");
    setCity("");
    setEmail("");
    setPhone("");
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={gender}
        placeholder="Gender"
        onChange={(e) => setGender(e.target.value)}
      />
      <input
        type="text"
        value={breed}
        placeholder="Breed"
        onChange={(e) => setBreed(e.target.value)}
      />
      <input
        type="text"
        value={city}
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={phone}
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />
    <button>Submit</button>
    </form>
  );
}

export default UploadForm;
