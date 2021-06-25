import './styler.css'
import MarkerIcon from "../../assets/marker.png";
import MarkerIconSelected from "../../assets/marker-selected.png";

const Marker = ()=>{
    return (
      <div>
        <img src={MarkerIcon} />
        <img
          src={
            "https://yt3.ggpht.com/a-/AAuE7mBuVBHdqBMjA-Lq0pt9B34XgauL6vFjjlMBeQ=s900-mo-c-c0xffffffff-rj-k-no"
          }
          className="img-marker"
        />
      </div>
    );
}

export default Marker;