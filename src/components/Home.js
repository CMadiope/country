import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const noCountries = countries.status || countries.message;

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

    if (data.status === 404) {
      setCountries([]);
      return;
    }

    setCountries(data);
  };

  const searchCountries = (e) => {
    const searchValue = countriesInputRef.current.value;

    if (searchValue.trim()) {
      const fetchData = async () => {
        const response = await fetch(
          `https://restcountries.com/v2/name/${searchValue}`
        );
        const data = await response.json();
        setCountries(data);
      };
      try {
        fetchData();
      } catch (error) {
        console.log(error);
      }
    } else {
      fetchData();
    }
  };

  const selectRegion = (e) => {
    const selectValue = regionRef.current.value;

    if (selectValue.trim()) {
      const fetchData = async () => {
        const response = await fetch(
          `https://restcountries.com/v2/region/${selectValue}`
        );
        const data = await response.json();
        
        if (selectValue === 'All') {
          try {
            fetchData();
          } catch (error) {
            console.log(error);
          }
          return;
        }

        setCountries(data);
      };
      try{
        fetchData()
      } catch (error) {
        console.log(error);
      }
    }
  };

  const showDetail = (code) => {
    navigate(`/${code}`);
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
                  <input
                    type='text'
                    placeholder='Search for a country'
                    ref={countriesInputRef}
                    onChange={searchCountries}
                  />
                </div>
                <div className={`select-region ${darkMode ? "darkMode" : ""}`}>
                  <select ref={regionRef} onChange={selectRegion}>
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
                {!noCountries ? (
                  countries.map((country) => (
                    <Country
                      key={country.alpha3Code}
                      darkMode={darkMode}
                      code={country.alpha3Code}
                      capital={country.capital}
                      population={country.population}
                      flag={country.flag}
                      region={country.region}
                      name={country.name}
                      showDetail= {showDetail}
                    />
                  ))
                ) : (
                  <p>No countries found...</p>
                )}
              </div>
            </div>
          }
        />
        <Route
          path='/:countryCode'
          element={<CountryDetail darkMode={darkMode} countries={countries} refetch={fetchData}/>}
        />
      </Routes>
    </div>
  );
};

export default Home;
