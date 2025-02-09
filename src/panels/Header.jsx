import React from "react";
import {Navbar} from "react-bootstrap";
import CountryDropdown from "../coponents/CountryDropdown";

import mapManager from '../services/map_manager';

const Header = ({countries}) => {

  const onSelect = (country) => {
    mapManager.changeCurrentCountry(country);
  }

  return (
    <Navbar className="bg-dark text-white p-2" expand="lg">
      <div className="navbar-wrapper">
        <CountryDropdown countries={countries} onSelect={onSelect}></CountryDropdown>
      </div>
    </Navbar>
  );
};

export default Header;
