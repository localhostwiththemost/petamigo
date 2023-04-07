import React, { useState } from "react";
import { addPet } from "./petCollection.js";
import { db } from "./firebase.js";

function UploadForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fileUpload, setFileUpload] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let petData = { name, gender, breed, city, email, phone };
    if (fileUpload) {
      const reader = new FileReader();
      reader.readAsDataURL(fileUpload);
      reader.onload = () => {
        petData.imageUrl = reader.result;
        addPet(db, petData);
      };
      reader.onerror = (error) => {
        console.error("Error: ", error);
      };
    } else {
      addPet(db, petData);
    }
    setName("");
    setGender("");
    setBreed("");
    setCity("");
    setEmail("");
    setPhone("");
    setFileUpload(null);
    setFileUrl("");
  };

  return (
    <>
      <form className="upload-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          value={gender}
          placeholder="Gender"
          onChange={(e) => setGender(e.target.value)}
          required
        />
        <input
          type="text"
          value={breed}
          placeholder="Breed"
          onChange={(e) => setBreed(e.target.value)}
          required
        />
        <input
          type="text"
          value={city}
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          value={phone}
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setFileUpload(e.target.files[0])}
          required
        />

        <button>Submit</button>
      </form>
    </>
  );
}

export default UploadForm;
