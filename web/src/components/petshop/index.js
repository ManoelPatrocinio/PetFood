import "./styler.css";

const Petshop = () => {
  return (
    <li className=" petshop">
      <div className="d-inline-block">
        <img
          src={
            "https://yt3.ggpht.com/a-/AAuE7mBuVBHdqBMjA-Lq0pt9B34XgauL6vFjjlMBeQ=s900-mo-c-c0xffffffff-rj-k-no"
          }
          className="img-fluid"
        />
      </div>
      <div className="d-inline-block petshop-info-container">
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
    </li>
  );
};

export default Petshop;
