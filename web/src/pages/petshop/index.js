import "./styler.css";
import Header from "../../components/header";
import ProductInCard from "../../components/products/card";
const Petshop = () => {
  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src={
                "https://yt3.ggpht.com/a-/AAuE7mBuVBHdqBMjA-Lq0pt9B34XgauL6vFjjlMBeQ=s900-mo-c-c0xffffffff-rj-k-no"
              }
              className="img-fluid petshop-image"
            />
            <b>PetLove</b>
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
          <div className="col-10">
            <h5>Produtos</h5>
            <br />
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map((p) => (
                <ProductInCard />
              ))}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Petshop;
