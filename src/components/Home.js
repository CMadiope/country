import React from "react";
import "../App.css";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <div className='header'>
        <h3>Where to the world?</h3>
        <div className='theme-switch'>
          <BsMoon />
          <p>Dark Mode</p>
        </div>
      </div>
      <div className='app-body'>
        <div className='inputs'>
          <div className="search-input">
            <input type="text" placeholder="Search for a country"/>
          </div>
          <div className="select-region">
            <select >
              <option >All</option>
              <option >Africa</option>
              <option >Americas</option>
              <option >Asia</option>
              <option >Europe</option>
              <option >Oceania</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
