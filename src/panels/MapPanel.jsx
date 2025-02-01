import React, {useEffect, useRef, useState} from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const API_KEY = "AIzaSyBIyQTq4WibUXVENFmjXyYphuMvTyL4-dY"; // Reemplázalo con tu clave de Google Maps

const MapPanel = () => {
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState({
    lat: -34.603722,
    lng: -58.381592,
  });
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    /*
    axios.get("https://api.example.com/locations")
      .then(response => setMarkers(response.data))
      .catch(error => console.error("Error cargando los marcadores", error));

     */
  }, []);

  const  handleLoad = (map) => {
    mapRef.current = map;
  }

  const onMapChange = () => {
    if (!mapRef.current) return;
    if (!moving) {
      setMoving(true);
      const timer = setTimeout(() => {
        setMoving(false);
        const newPos = mapRef.current.getCenter().toJSON();
        setCenter(newPos);
      }, 500); // Agregar un pequeño retraso evita que se ejecute en cada render inmediato
      return () => clearTimeout(timer);
    }
  }

  return (
    <div style={{ position: "relative"}}>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={handleLoad}
                   onCenterChanged={onMapChange}>
          {markers.map((marker, index) => (
            <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
          ))}
        </GoogleMap>
      </LoadScript>
      <img src="img/circle.png"

           style={{
             position: "absolute",
             top: "50%",
             left: "50%",
             transform: "translate(-50%, -50%)",
             pointerEvents: "none",
             width: "16px", // Ajusta el tamaño de la mira
             height: "16px",
           }}/>
      <label style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        background: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        fontSize: "14px",
      }}>Centro: Lat {center.lat.toFixed(6)}, Lng {center.lng.toFixed(6)}</label>
    </div>
  );
};

export default MapPanel;
