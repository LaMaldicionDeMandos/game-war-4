import React from "react";
import {Image} from "react-bootstrap";

const CountryDropdownMenu = React.forwardRef(({ children, onClick, flag, name }, ref) =>
    <div className="bg-dark text-white navbar" onClick={(e) => {
      e.preventDefault();
      onClick(e); // Pasar customData al hacer clic
    }} ref={ref}>
      <Image className="navbar-brand" src={`img/flags/${flag}.svg`} width={75} height={50}/>
      <label className="navbar-brand text-bg-dark">{name }</label>
      {children}
    </div>
  );

export default CountryDropdownMenu;
