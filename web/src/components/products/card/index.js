import "./styler.css";
import { useDispatch,useSelector } from "react-redux";
import { toggleCartProduct } from "../../../store/modules/shop/actions";


const ProductInCard = ({ product }) => {
  return (
    <div className="product col-3">
      <div className="imgCard">
        <img src={product.capa} className="img-fluid align-center" />
        <button className="btn btn-primary rounded-circle">+</button>
      </div>
      <h4>
        <label className="badge badge-primary">
          R$ {product.preco.toFixed(2)}
        </label>
      </h4>
      <small>
        <b>{product.nome}</b>
      </small>
    </div>
  );
};

export default ProductInCard;
