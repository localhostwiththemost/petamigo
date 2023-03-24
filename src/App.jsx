import React from "react";
import { useState, useEffect } from "react";
import Results from "./Results";
import Facts from "./Facts";
import "./sass/main.css";
import { PETFINDER_API_KEY, PETFINDER_API_SECRET } from "./env";

function App() {
  const [selected, setSelected] = useState("dog");
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(null);

  const key = PETFINDER_API_KEY;

  const secret = PETFINDER_API_SECRET;

  const searchPets = (location) => {
    setLoading(true);
    fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        key +
        "&client_secret=" +
        secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        const locationQ = !location ? "" : `&location=${location}`;
        const petType = !selected ? "" : `&type=${selected}`;

        return fetch(
          `https://api.petfinder.com/v2/animals?limit=50${petType}${locationQ}`,
          {
            headers: {
              Authorization: data.token_type + " " + data.access_token,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
      })
      .then((res) => res.json())
      .then(function (data) {
        console.log(data.animals);
        setLoading(false);
        setPets(data.animals);
      });
  };

  return (
    <>
      <header>
        <nav>
          <h1 className="nav-title">
            PetAmig
            <span className="title-icon">
              <ion-icon name="paw"></ion-icon>
            </span>
          </h1>
        </nav>

        <div className="header-content-container">
          <div className="hero-container">
            <h2 className="hero-text">Meet Your New Best Friend Today!</h2>
            <p className="hero-description">
              If you're looking for a furry companion to bring joy and love into
              your life, you've come to the right place. We have a wide variety
              of cats, dogs, and other animals just waiting to find their
              forever homes.
            </p>

            <p className="hero-description">
              Adopting a pet is a big decision, but it's also a rewarding one.
              Not only will you be giving an animal a second chance at a happy
              life, but you'll also be gaining a loyal companion who will always
              be by your side.
            </p>

            <p className="hero-description">
              Our adoption process is simple and straightforward, and our team
              is here to help you every step of the way. From choosing the right
              pet to providing ongoing support and resources, we're committed to
              making sure both you and your new furry friend have a smooth
              transition.
            </p>

            <p className="hero-description">
              So take a look at our available pets, and let's find your perfect
              match!
            </p>

            <div className="button-container">
              <button
                className={`hero-btn ${selected === "dog" ? "selected" : ""}`}
                onClick={() => setSelected("dog")}
              >
                Dog
              </button>
              <button
                className={`hero-btn ${selected === "cat" ? "selected" : ""}`}
                onClick={() => setSelected("cat")}
              >
                Cat
              </button>
              <button
                className={`hero-btn ${selected === "bird" ? "selected" : ""}`}
                onClick={() => setSelected("bird")}
              >
                Bird
              </button>
              <button
                className={`hero-btn ${
                  selected === "rabbit" ? "selected" : ""
                }`}
                onClick={() => setSelected("rabbit")}
              >
                Rabbit
              </button>
            </div>

            <div className="icon-container">
              <div className="search">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    searchPets(searchTerm);
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter City & State or Zipcode"
                    maxLength="50"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    spellCheck="false"
                  />
                  <ion-icon name="search-outline"></ion-icon>
                </form>
              </div>
            </div>
          </div>
        </div>

        <img
          src="src/images/bandana-compressed.webp"
          alt="A German Shepherd"
          className="hero-img"
        />
      </header>

      <Results pets={pets} loading={loading} />

      <Facts />

      <section className="featured-section">
        <div className="heading-container">
          <h1 className="featured-heading">Featured Pets</h1>
        </div>
        {/* <p className="featured-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          libero impedit? Nam quo iure possimus vero magnam nisi sapiente ipsam.
        </p> */}
      </section>

      <section className="about-section">
        <div className="text-container">
          <p className="about-text">
            Hello, I'm <strong>Joe</strong>, the founder of <em>PetAmigo</em>.
            As a lifelong pet lover, I created this site to honor the memory of
            my beloved past pets and to help provide a better future for all
            animals. Did you know that millions of animals end up in shelters
            every year? Sadly, many of them never make it out alive. According
            to{" "}
            <a
              href="https://americanhumane.org"
              target="_blank"
              className="about-link"
            >
              americanhumane.org
            </a>
            , over half of all dogs and almost three-quarters of all cats that
            enter shelters are euthanized. These heartbreaking statistics
            highlight the urgent need for us to work together to find homes for
            these vulnerable animals. That's why <em>PetAmigo</em> is committed
            to connecting pets in need with loving families and individuals who
            can provide them with the care and attention they deserve. Join us
            in our mission to make a difference in the lives of our furry and
            feathered friends!
          </p>
        </div>

        <img
          src="src/images/nosy-compressed.webp"
          alt="A very nosy german shepherd"
          className="nosy-img"
        />
      </section>
    </>
  );
}

export default App;
