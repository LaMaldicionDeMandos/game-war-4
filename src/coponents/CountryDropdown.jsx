import React, {useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "react-bootstrap";
import CountryDropdownMenu from "./CountryDropdownMenu";
import CountryDropdownMenuItem from "./CountryDropdownMenuItem";

const CountryDropdown = ({countries, onSelect = () => {}}) => {
  countries = [{code: 'onu', name: 'ONU', position: {lat: 0, lng: 0}}].concat(countries);
  const [currentCountry, setCurrentCountry] = useState(countries[0]);
  const onSelectCurrentCountry = (country) => {
    setCurrentCountry(country);
    onSelect(country);
  };
  const countryItems = countries.map(country =>
    <DropdownItem key={country._id} as={CountryDropdownMenuItem} country={country} onSelect={onSelectCurrentCountry} />);
  return (
    <Dropdown>
      <DropdownToggle as={CountryDropdownMenu} country={currentCountry}></DropdownToggle>
      <DropdownMenu>
        {countryItems}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CountryDropdown;
