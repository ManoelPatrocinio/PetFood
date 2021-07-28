import "./styler.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setShopMapSelected,
  setMapCenter,
} from "../../store/modules/shop/actions";

const Petshop = ({ petshop }) => {
  const dispatch = useDispatch();
  const { petshopMapSelected } = useSelector((state) => state.shop);

  const setSelectedPetshop = () => {
    dispatch(setShopMapSelected(petshop._id));
    dispatch(setMapCenter(petshop.location));
  };

  return (
    <li
      className={`petshop  ${
        petshopMapSelected === petshop._id ? "active" : ""
      }`}
      onClick={() => setSelectedPetshop()}
    >
      <div className="d-inline-block">
        <img src={petshop.logo} className="img-fluid" alt="petfood" />
      </div>
      <div className="d-inline-block petshop-info-container">
        <b>{petshop.nome}</b>
        <div className="petshop-infos">
          <span className="mdi mdi-star"></span>
          <text>
            <b>2,8</b>
          </text>
          <span className="mdi mdi-cash-usd-outline"></span>
          <text>$$$</text>
          <span className="mdi mdi-crosshairs-gps"></span>
          <text>2,9Km</text>
        </div>
        <label className="badge badge-primary">Frete Grátis</label>
      </div>
    </li>
  );
};

export default Petshop;
