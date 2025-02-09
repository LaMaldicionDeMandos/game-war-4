import React from "react";
import {OverlayView} from "@react-google-maps/api";

import "./css/CityItem.css";

const CityItem = ({city}) => {
  return (
    <OverlayView mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} position={city.position}>
      <div className="cityItem">
        <img src="img/items/city_y.png" className="building" />
        <img src={`img/flags/${city.country}.svg`} className="flag"></img>
      </div>
    </OverlayView>
  );
};

export default CityItem;
