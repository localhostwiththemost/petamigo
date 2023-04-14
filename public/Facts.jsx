import React from "react";
import { useState, useEffect } from "react";

function Facts() {
  const [fact, setFact] = useState("");

  const getFact = async () => {
    let response = await fetch(`https://dogapi.dog/api/v2/facts?limit=1`);
    const data = await response.json();
    //console.log(data);

    const fact = data.data[0].attributes.body;

    setFact(fact);
  };

  useEffect(() => {
    getFact();
  }, []);

  return (
    <>
      <section className="facts-section">
        <div className="facts-container">
          <picture>
            <source media="(max-width: 600px)" srcSet="src/images/winter-compressed-small.webp" />
            <source
              media="(min-width: 601px)"
              srcSet="src/images/winter-compressed.webp"
            />
            <img
              src="images/winter-compressed.webp"
              alt="A German Shepherd"
            />
          </picture>

          <p className="facts-text">{fact}</p>
        </div>
      </section>
    </>
  );
}

export default Facts;
