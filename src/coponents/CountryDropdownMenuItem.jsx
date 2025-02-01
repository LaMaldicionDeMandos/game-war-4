import React from "react";
import {Image} from "react-bootstrap";

const CountryDropdownMenuItem = React.forwardRef(({ children, onClick, onSelect, country }, ref) =>
    <div className="bg-dark text-bg-dark navbar" onClick={(e) => {
      e.preventDefault();
      onSelect(country);
      onClick(e);
    }} ref={ref}>
      <Image className="" src={`img/flags/${country.code}.svg`} width={30} height={20}/>
      <label className="navbar-brand text-bg-dark">{country.name}</label>
      {children}
    </div>
  );

export default CountryDropdownMenuItem;
