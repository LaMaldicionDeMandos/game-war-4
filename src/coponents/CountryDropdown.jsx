import React, {useEffect, useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "react-bootstrap";
import CountryDropdownMenu from "./CountryDropdownMenu";
import CountryDropdownMenuItem from "./CountryDropdownMenuItem";

const CountryDropdown = ({countries}) => {
  countries = [{code: 'onu', name: 'ONU'}].concat(countries);
  const [currentCountry, setCurrentCountry] = useState(countries[0]);

  const countryItems = countries.map(country =>
    <DropdownItem key={country._id} as={CountryDropdownMenuItem} flag={country.code} name={country.name} />);
  return (
    <Dropdown>
      <DropdownToggle as={CountryDropdownMenu} flag={currentCountry.code} name={currentCountry.name}></DropdownToggle>
      <DropdownMenu>
        {countryItems}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CountryDropdown;
