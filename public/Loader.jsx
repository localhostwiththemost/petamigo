import React from "react";
import { useState } from "react";
import { css } from "@emotion/react";
import { GridLoader } from "react-spinners";

const override = css`
  display: "block",
  margin: "0 auto",
  borderColor: "#5175f8",
`;

function Loader() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#5175f8");

  return (
    <>
      <GridLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}

export default Loader;