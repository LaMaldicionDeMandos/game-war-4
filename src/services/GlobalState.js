import {createGlobalState} from "react-hooks-global-state";

const initialState = {
  countries: [],
  currentCountry: undefined
  /*
  mapCenter: { lat: 0, lng: 0 },
  currentDate: '1900-01-01 00:00:00',
  currentEvent: undefined,
  mapItems: undefined
 */
}

const { setGlobalState, useGlobalState } = createGlobalState(initialState);

export { useGlobalState, setGlobalState };

//export const MAP_CENTER = 'mapCenter';
//export const MAP_ITEMS = 'mapItems';
//export const CURRENT_DATE = 'currentDate';
//export const CURRENT_EVENT = 'currentEvent';
export const CURRENT_COUNTRY = 'currentCountry';
export const COUNTRIES = 'countries';
