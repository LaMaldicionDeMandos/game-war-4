import React from "react";
import {CURRENT_COUNTRY, useGlobalState} from "../services/GlobalState";

import CountryItem from "./CountryItem";

import map_manager from "../services/map_manager";
import CityItem from "./CityItem";

const MapItemsProvider = () => {
  const [currentCountry] = useGlobalState(CURRENT_COUNTRY);

  const cities = map_manager.getCities().map((city) => <CityItem key={city._id} city={city} />);
  return (
    <>
      <CountryItem  country={currentCountry} />
      {cities}
    </>
  );
};

export default MapItemsProvider;
