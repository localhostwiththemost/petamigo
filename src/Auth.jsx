
import { auth, googleProvider } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export const Auth = () => {

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };
  


  return (
    <>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={logOut}>Sign Out</button>
    </>
  );
};
