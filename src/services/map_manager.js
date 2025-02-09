import worldService from './world.service';
import {CURRENT_COUNTRY, setGlobalState} from "./GlobalState";

class MapManager {
  constructor() {
    this.currentCountry = null;
    this.cities = [];
  }

  changeCurrentCountry = (country) => {
    this.currentCountry = country;
    const all = !country || country.code === 'onu';
    this.#getCities(country, all)
      .then(() => this.#setCurrentCountry(country))
      .then(() => this);
  };

  getCities = () => this.cities;

  #setCurrentCountry = (country) => {
    setGlobalState(CURRENT_COUNTRY, country);
  }

  #getCities = (country, isOnu = false) => {
    if (isOnu) {
      return worldService.getAllCities().then(_cities => {
        this.cities = _cities;
        return this;
      });
    }
    return Promise.resolve(this);
  }
}

const service = new MapManager();
export default service;
