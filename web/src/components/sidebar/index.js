import "./styler.css";
import Dock from "react-dock";
import { useState, useEffect } from "react";
import ProductInList from "../products/list";

const Sidebar = () => {
  const [opened, setOpened] = useState(false);

  //   escuto o evendo disparado no Header, para exibir o sidebar Sacola
  useEffect(() => {
    window.addEventListener("openCart", () => {
      setOpened(true);
    });
  }, []);

  return (
    <Dock
      isVisible={opened}
      onVisibleChange={(visible) => {
        setOpened(visible);
      }}
      position="right"
    >
      <div className="container-fluid pt-3 sidebar">
        <h5>Minha Sacola (5)</h5>
        <div className="row products ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
            <ProductInList />
          ))}
        </div>
        <div className="row align-items-end footer">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <b className="d-inline-block">Total</b>
            <h3 className="d-inline-block">R$ 90,00</h3>
          </div>
          <button className="btn btn-lg btn-primary rounded-0 ">
            Finalizar Compra
          </button>
        </div>
      </div>
    </Dock>
  );
};

export default Sidebar;
