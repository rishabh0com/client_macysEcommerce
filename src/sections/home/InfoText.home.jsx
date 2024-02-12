import React from "react";
import styles from "../../styles/mainHomeSection.module.css"

const InfoText = () => {
  return (
    <div>
      {/* information text section */}
      <div
        className="informationTextSection"
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f8f9fa",
          height: "5vw",
          justifyContent: "center",
        }}>
        <p className={styles.a}>
          Macys.com is a U.S. website. All offers are based on USD, US times &
          dates. International exchange will be applied.
        </p>
      </div>
    </div>
  );
};

export default InfoText;
