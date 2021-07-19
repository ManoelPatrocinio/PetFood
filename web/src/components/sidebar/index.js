import "./styler.css";
import Dock from "react-dock";
import { useState, useEffect } from "react";
import ProductInList from "../products/list";
import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';


const Sidebar = () => {
   
  const history = useHistory();
  const {cart} = useSelector((state)=> state.shop)

  const total = cart.reduce((total,product)=>{//percorre cada item do carrinho para somar o total
      return total += product.preco
  },0)
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
        <h5>Minha Sacola ({cart.length})</h5>
        <div className="row products ">
          {cart.map((p) => (
            <ProductInList product={p} />
          ))}
        </div>
        <div className="row align-items-end footer">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <b className="d-inline-block">Total</b>
            <h3 className="d-inline-block">R$ {total.toFixed(2)}</h3>
          </div>
          <button onClick={()=> history.push('/cadastro')} className="btn btn-lg btn-primary rounded-0 ">
            Finalizar Compra
          </button>
        </div>
      </div>
    </Dock>
  );
};

export default Sidebar;
