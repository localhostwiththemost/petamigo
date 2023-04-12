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

  // const logOut = async () => {
  //   try {
  //     await signOut(auth);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <section className="auth-section">
        <p className="auth-text">To submit a pet for adoption, please sign in using your Google account.</p>
        
        <button className="google-btn" onClick={signInWithGoogle}>
          <img
            className="google-icon"
            src="src/images/google-icon.webp"
            alt="Google logo"
          />{" "}
          Sign In With Google
        </button>
      </section>
      {/* <button onClick={logOut}>Sign Out</button> */}
    </>
  );
};
