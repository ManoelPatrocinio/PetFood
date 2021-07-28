import './styler.css'
import MarkerIcon from "../../assets/marker.png";
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import MarkerIconSelected from "../../assets/marker-selected.png";

const Marker = ({petshop})=>{
    const { petshopMapSelected } = useSelector((state) => state.shop);

    return (
      <Link to={`/petshop/${petshop._id}`}>
        <img
          src={
            petshopMapSelected === petshop._id ? MarkerIconSelected : MarkerIcon
          }
          alt="petshop"
        />
        <img src={petshop.logo} className="img-marker" alt="petshop" />
      </Link>
    );
}

export default Marker;