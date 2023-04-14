import {  collection, addDoc } from "firebase/firestore";


// Add a document to the "petCollection" collection
async function addPet(db, pet) {
  const petsCollection = collection(db, "petCollection");
  await addDoc(petsCollection, pet);
}


export {addPet};