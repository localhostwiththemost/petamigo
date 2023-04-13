import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

export const Auth = () => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="auth-section">
        <div className="auth-content">
          <p className="auth-text">
            To submit a pet for adoption, please sign in using your Google
            account.
          </p>

          <button className="google-btn" onClick={signInWithGoogle}>
            <img
              className="google-icon"
              src="src/images/google-icon.webp"
              alt="Google logo"
            />{" "}
            Sign In With Google
          </button>
        </div>
      </section>
    </>
  );
};
