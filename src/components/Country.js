import React from "react";
import "../App.css";

const Country = ({
  darkMode,
  population,
  flag,
  region,
  capital,
  name,
  showDetail,
  code,
}) => {
  const showDetailHandler = () => {
    showDetail(code);
  };

  return (
    <div
      className={`country ${darkMode ? "darkMode" : ""}`}
      onClick={showDetailHandler}
    >
      <div className='flag-container'>
        <img src={flag} alt='' />
      </div>
      <div className='details'>
        <h3 className='name'>{name}</h3>
        <p>
          Population: {""}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {population}
          </span>
        </p>
        <p>
          Region: {""}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {region}
          </span>
        </p>
        <p>
          Capital: {""}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {capital}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Country;
