import { useState } from "react";
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
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./Header.css";
import { format } from "date-fns";

const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false); // controls calendar visibility
  const [options, setOptions] = useState({
    adults: 2,
    children: 4,
    room: 1,
  });
  const [openOptions, setOpenOptions] = useState(false); // control search bar options

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
            <span
              onClick={() => setOpenDate(!openDate)}
              className="header-search-text"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="header-search-item">
            <FontAwesomeIcon icon={faPerson} className="header-icon" />
            <span className="header-search-text">
              {`${options.adults} adults : ${options.children} children : ${options.room}`}{" "}
              {options.room > 1 ? "rooms" : "room"}
            </span>
            <div className="options">
              <div className="option-item">
                <span classname="option-text">Adult</span>
                <div className="option-counter">
                  <button className="option-counter-btn">-</button>
                  <span className="option-counter-number">4</span>
                  <button className="option-counter-btn">+</button>
                </div>
              </div>
              <div className="option-item">
                <span classname="option-text">Children</span>
                <div className="option-counter">
                  <button className="option-counter-btn">-</button>
                  <span className="option-counter-number">4</span>
                  <button className="option-counter-btn">+</button>
                </div>
              </div>
              <div className="option-item">
                <span classname="option-text">Rooms</span>
                <div className="option-counter">
                  <button className="option-counter-btn">-</button>
                  <span className="option-counter-number">4</span>
                  <button className="option-counter-btn">+</button>
                </div>
              </div>
            </div>
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
