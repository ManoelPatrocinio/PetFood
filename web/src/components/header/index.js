import "./styler.css";
import LogoWhite from "../../assets/logo-white.png";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ whiteVersion, hideSideBar }) => {
    const { cart } = useSelector((state) => state.shop);

  // evento para abrir a sidebar da sacola de itens,será disparada para toda aplicação
  const openDrawer = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };
  return (
    <div className="col-12 header-global">
      <header className="py-4 px-4 text-center">
        <Link to="/">
          <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" alt="petfood"/>
        </Link>
      </header>

      {!hideSideBar && (
        <button onClick={() => openDrawer()} className="btn cart-button">
          <span className="mdi mdi-cart"></span>({cart.length}) Itens
        </button>
      )}
    </div>
  );
};

export default Header;
