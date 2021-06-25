import './styler.css'
const ProductInList =()=>{
    return (
      <div className="product-list col-12">
        <div className="row">
          <div className="col-3">
            <img
              src={
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.P7Sttd5C3Z8f8INhoVP9VgHaHa%26pid%3DApi&f=1"
              }
              className="img-fluid"
            />
          </div>
          <div className="col-6">
            <h6>
              <label className="badge badge-primary">R$ 30,50</label>
            </h6>
            <small>
              <b>Ração Primus Gold Cães Light 15 kg | Casa da Ração</b>
            </small>
          </div>
          <div className="col-3">
            <button className="btn btn-secondary rounded-circle">-</button>
          </div>
        </div>
      </div>
    );
}

export default ProductInList;