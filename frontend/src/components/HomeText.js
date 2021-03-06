import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

const HomeText = ({ headerText }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <hr
          className="my-hr"
          style={{
            width: "25%",
            color: "#388761",
            height: "2px",
            marginRight: "20px",
          }}
        />

        <MDBIcon icon="star" style={{ color: "#F0393F", fontSize: "20px" }} />

        <hr
          className="my-hr"
          style={{
            width: "25%",
            color: "#388761",
            height: "2px",
            marginLeft: "20px",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Kalpurush",
          fontWeight: "bold",
        }}
      >
        <h1 className="text-21">{headerText}</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <hr
          className="my-hr"
          style={{
            width: "25%",
            color: "#388761",
            height: "2px",
            marginRight: "20px",
          }}
        />

        <MDBIcon icon="star" style={{ color: "#F0393F", fontSize: "20px" }} />

        <hr
          className="my-hr"
          style={{
            width: "25%",
            color: "#388761",
            height: "2px",
            marginLeft: "20px",
          }}
        />
      </div>
    </>
  );
};

export default HomeText;
