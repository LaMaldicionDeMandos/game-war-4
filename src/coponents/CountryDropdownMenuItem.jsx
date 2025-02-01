import React from "react";
import {Image} from "react-bootstrap";

const CountryDropdownMenuItem = React.forwardRef(({ children, onClick, flag, name }, ref) =>
    <div className="bg-dark text-bg-dark navbar" onClick={(e) => {
      e.preventDefault();
      onClick(e); // Pasar customData al hacer clic
    }} ref={ref}>
      <Image className="" src={`img/flags/${flag}.svg`} width={30} height={20}/>
      <label className="navbar-brand text-bg-dark">{name }</label>
      {children}
    </div>
  );

export default CountryDropdownMenuItem;
