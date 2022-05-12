import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faStore,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-list">
          <div className="header-list-item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faStore} />
            <span>Attractions</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="header-title">A lifetime of discounts? It's Genius.</h1>
        <p className="header-desc">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Cashie Booking account.
        </p>
        <button className="header-btn">Sign In / Register</button>
        <div className="header-search">
          <div className="header-search-item">
            <FontAwesomeIcon icon={faBed} className="header-icon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="header-search-input"
            />
          </div>
          <div className="header-search-item">
            <FontAwesomeIcon icon={faCalendarDays} className="header-icon" />
            <span className="header-search-text">Date to Date</span>
          </div>
          <div className="header-search-item">
            <FontAwesomeIcon icon={faPerson} className="header-icon" />
            <span className="header-search-text">
              2 adults 2 childern 1 room
            </span>
          </div>
          <div className="header-search-item">
            <button className="header-btn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
