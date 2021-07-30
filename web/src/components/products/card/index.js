import "./styler.css";
import { useDispatch,useSelector } from "react-redux";
import { toggleCartProduct } from "../../../store/modules/shop/actions";


const ProductInCard = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shop);
  const added = cart.findIndex((p) => p._id === product._id) !== -1; //verifica se item já existe

  return (
    <div className="product col-3">
      <div className="imgCard">
        <img
          src={product.capa}
          className="img-fluid align-center"
          alt="ração"
        />
      </div>
      <div className="prod_info">
        <h4>
          <label className="badge badge-primary">
            R$ {product.preco.toFixed(2)}
          </label>
        </h4>

        <small>
          <b>{product.nome}</b>
        </small>
      </div>

      <div className="btnFooter">
        <button
          onClick={() => dispatch(toggleCartProduct(product))}
          className={`btn btn-${added ? "secondary" : "primary"} `}
        >
          {added ? "Remover" : <span className="mdi mdi-cart">Adicionar</span>}
        </button>
      </div>
    </div>
  );
};;

export default ProductInCard;
