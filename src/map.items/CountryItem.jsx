import React from "react";
import {OverlayView} from "@react-google-maps/api";

import "./css/CountryItem.css";

const CountryItem = ({country={code: 'onu', lat: 0, lng: 0}}) => {
  return (
    <OverlayView mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} position={country.position}>
      <div className="countryItem">
        <img src="img/items/center_flag.png" className="pole" />
        <img src={`img/flags/${country?.code}.svg`} className="flag"/>
      </div>
    </OverlayView>
  );
};

export default CountryItem;
