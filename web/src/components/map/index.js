import "./styler.css";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import Marker from "../marker";


const Map = ({ petshops }) => {
  const {mapCenter} = useSelector(state => state.shop)
  return (
    <div className="container-map">
      <GoogleMapReact
        //parametros pra inicializar o map
        bootstrapURLKeys={{ key: "AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek" }}
        //latitude e longitude
        center={mapCenter}
        defaultZoom={15}
      >
        {petshops.map((p) =>(
          <Marker petshop={p} lat={p.location.lat} lng={p.location.lng}/>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
