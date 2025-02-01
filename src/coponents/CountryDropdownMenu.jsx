import React from "react";
import {Image} from "react-bootstrap";

const CountryDropdownMenu = React.forwardRef(({ children, onClick, country }, ref) =>
    <div className="bg-dark text-white navbar" onClick={(e) => {
      e.preventDefault();
      onClick(e); // Pasar customData al
    }} ref={ref}>
      <Image className="navbar-brand" src={`img/flags/${country.code}.svg`} width={75} height={50}/>
      <label className="navbar-brand text-bg-dark">{country.name}</label>
      {children}
    </div>
  );

export default CountryDropdownMenu;
