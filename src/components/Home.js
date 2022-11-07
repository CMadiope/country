import { useState, useEffect, useRef } from "react";

import React from "react";
import "../App.css";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import Country from "./Country";
import { Routes, Route } from "react-router-dom";
import CountryDetail from "../components/CountryDetail";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const countriesInputRef = useRef();
  const regionRef = useRef();

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    setCountries(data);
  };

  const searchCountries = (e) => {
    const searchValue = countriesInputRef.current.value;

    if (searchValue.trim()){
      const fetchData =  async () => {
        const response = await fetch(
          `https://restcountries.com/v2/name/${searchValue}`
        );
        const data = await response.json();
        setCountries(data);
      }
      try {
        fetchData()
      } catch (error) {
        console.log(error);
      }
      
    }else{
        fetchData()
      }
  }

  return (
    <div className={`app ${darkMode ? "darkMode" : ""}`}>
      <div className={`header ${darkMode ? "darkMode" : ""}`}>
        <h3 className='logo'>Where to the world?</h3>
        <div className='theme-switch' onClick={switchMode}>
          <BsMoon />
          <p>Dark Mode</p>
        </div>
      </div>
      <Routes>
        <Route
          path='/'
          element={
            <div className='app-body'>
              <div className='inputs'>
                <div className={`search-input ${darkMode ? "darkMode" : ""}`}>
                  <BsSearch className='search-icon' />
                  <input type='text' placeholder='Search for a country' ref={countriesInputRef} onChange={searchCountries}/>
                </div>
                <div className={`select-region ${darkMode ? "darkMode" : ""}`}>
                  <select ref={regionRef}>
                    <option>All</option>
                    <option>Africa</option>
                    <option>Americas</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                  </select>
                </div>
              </div>
              <div className='countries'>
                {countries.map((country) => (
                  <Country
                    key={country.aplha3Code}
                    darkMode={darkMode}
                    code={country.alpha3Code}
                    capital={country.capital}
                    population={country.population}
                    flag={country.flag}
                    region={country.region}
                    name={country.name}
                  />
                ))}
              </div>
            </div>
          }
        />
        <Route
          path='country-detail'
          element={<CountryDetail darkMode={darkMode} />}
        />
      </Routes>
    </div>
  );
};

export default Home;
