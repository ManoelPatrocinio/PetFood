import { useState } from 'react';
import { useDispatch } from 'react-redux'; //dispara a action p/ a reducer atravez do UI
import {setCustomer as setStoreCustomer} from '../../store/modules/shop/actions'
import Header from '../../components/header'
import Illustration from "../../assets/illustration.png";
import { Link } from 'react-router-dom';
import './styler.css'


const Cadastro = () => {
  const dispatch = useDispatch() //dispara a action p/ a reducer atravez do UI
  const [customer, setCustomer] = useState({
    external_id: new Date().getTime().toString(),
    name: "",
    type: "individual",
    country: "br",
    email: "",
    documents: [
      {
        type: "cpf",
        number: "",
      },
    ],
    phone_numbers: [""],
    birthday: "",
  });

  const goToCheckOut = () =>{
    dispatch(setStoreCustomer(customer));
  }
  return (
    <div className="container-fluid h-100 bg-primary">
      <Header whiteVersion hideSideBar />
      <div className="row">
        <div className="col-6 text-right my-auto">
          <img src={Illustration} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="box col-8">
            <h2 className="text-center">Falta pouco para fazer o seu pedido</h2>
            <br />
            <br />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome Completo"
              onChange={(e) => {
                setCustomer({ ...customer, name: e.target.value }); //pega tudo de custumer e atualiza apenas o Name
              }}
            />
            <input
              type="email"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
              onChange={(e) => {
                setCustomer({ ...customer, email: e.target.value }); //pega tudo de custumer e atualiza apenas o Name
              }}
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
              onChange={(e) => {
                setCustomer({ ...customer, phone_numbers: [e.target.value] }); //pega tudo de custumer e atualiza apenas o
              }}
            />

            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="CPF"
              onChange={(e) => {
                setCustomer({
                  ...customer,
                  documents: [
                    {
                      type: "cpf",
                      number: e.target.value,
                    },
                  ],
                }); //pega tudo de custumer e atualiza apenas o
              }}
            />
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="Data de nascimento"
              onChange={(e) => {
                setCustomer({ ...customer, birthday: e.target.value }); //pega tudo de custumer e atualiza apenas o
              }}
            />

            <Link to="/checkout" onClick={()=> goToCheckOut()} className="btn btn-lg w-100 btn-secondary">
              Finalizar Cadastro
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
