import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Graphics from "./panels/Graphics";
import MapPanel from "./panels/MapPanel";
import worldService from './services/world.service';
import {COUNTRIES, CURRENT_COUNTRY, setGlobalState, useGlobalState} from "./services/GlobalState";
import {Image, Navbar, NavbarBrand} from "react-bootstrap";
import CountryDropdownMenu from "./coponents/CountryDropdownMenu";
import CountryDropdown from "./coponents/CountryDropdown";

const App = () => {
  const [countries] = useGlobalState(COUNTRIES);
  const [currentCountry] = useGlobalState(CURRENT_COUNTRY);
  useEffect(() => {
    console.log('GET COUNTRIES');
    worldService.getAllCountries()
      .then(_countries => {
        setGlobalState(COUNTRIES, () => _countries);
      });
  }, []);

  const onSelect = (country) => console.log(`Select country ${country.name}`);
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar className="bg-dark text-white p-2" expand="lg">
        <div className="navbar-wrapper">
          <CountryDropdown countries={countries} onSelect={onSelect}></CountryDropdown>
        </div>
      </Navbar>
      {/* Barra superior */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar izquierda */}
        <div className="bg-light border-end p-2" style={{ width: "250px" }}>
          Sidebar Izquierda
        </div>

        {/* Contenido principal */}
        <div className="flex-grow-1 d-flex flex-column">
          <div className="flex-grow-1 bg-secondary"  style={{maxHeight: "500px"}}>
            <MapPanel />
          </div>

          {/* Panel de gráficos */}
          <Graphics />
        </div>

        {/* Sidebar derecha */}
        <div className="bg-light border-start p-2" style={{ width: "250px" }}>
          Sidebar Derecha
        </div>
      </div>

      {/* Input tipo consola */}
      <div className="bg-transparent text-white p-2">
        <input
          type="text"
          className="form-control bg-dark text-white border-0"
          placeholder="Escribe un comando..."
        />
      </div>
    </div>
  );
};

export default App;
