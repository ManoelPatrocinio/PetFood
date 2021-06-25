import './styler.css';

const ProductInCard = () => {
  return (
    <div className="product col-3">
      <div className="imgCard">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.P7Sttd5C3Z8f8INhoVP9VgHaHa%26pid%3DApi&f=1"
          className="img-fluid align-center"
        />
        <button className="btn btn-primary rounded-circle">+</button>
      </div>
      <h4>
        <label className="badge badge-primary">R$ 90,00</label>
      </h4>
      <small>
        <b>Ração Primus Gold Cães Light 15 kg | Casa da Ração</b>
      </small>
    </div>
  );
};

export default ProductInCard;
