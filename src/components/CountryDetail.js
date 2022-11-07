import React from "react";
import { BiArrowBack } from "react-icons/bi";

const CountryDetail = ({ darkMode }) => {
  return (
    <div className='country-detail'>
      <button className={`back ${darkMode ? "darkMode" : ""}`}>
        <BiArrowBack />
        <p>Go back</p>
      </button>

      <div className='country-detail-body'>
        <div className='img-container'>
          <img src='https://flagcdn.com/as.svg' alt='' />
        </div>
        <div className='info'>
          <h2>Name</h2>
          <div className='info-container'>
            <div className='lft-info'>
              <p>
                Native Name:{""}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  Test
                </span>
              </p>
              <p>
                Population:{""}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  Test
                </span>
              </p>
              <p>
                Region:{""}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  Test
                </span>
              </p>
              <p>
                Sub region:{""}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  Test
                </span>
              </p>
            </div>
            <div className='right-info'>
              <p>
                Capital:{""}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  Test
                </span>
              </p>
              <p>
                Top-level Domain:{""}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  Test
                </span>
              </p>
              <p>
                Currencies:{""}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  Test
                </span>
              </p>
              <p>
                Languages:{""}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  Test
                </span>
              </p>
            </div>
          </div>
          Border Countries:
          <div className={`border-country ${darkMode ? "darkMode" : ""}`}>
            <p>test</p>
          </div>
          <div className={`border-country ${darkMode ? "darkMode" : ""}`}>
            <p>test</p>
          </div>
          <div className={`border-country ${darkMode ? "darkMode" : ""}`}>
            <p>test</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
