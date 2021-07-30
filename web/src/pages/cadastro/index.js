import { useState } from 'react';
import { useDispatch } from 'react-redux'; //dispara a action p/ a reducer atravez do UI
import {setCustomer as setStoreCustomer} from '../../store/modules/shop/actions'
import Header from '../../components/header'
import Illustration from "../../assets/logo1.jpg";
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
    <div className="container-fluid  cadastro_body">
       <img src={Illustration}  id="cadastro_img_bg" alt="racões e brinquedos pet"/>

      <div className="header">
        <Header whiteVersion hideSideBar/>
      </div> 

      <div className="row cadastro_container">
      
        <div className="col-6 cadastro_box">
          <div className="box col-8">
            <header className="boxHeader">
              <h2 className="text-center">Cadastre-se</h2>
              <small>E acompanhe seu pedido</small>
            </header>
            <br />
            <br />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome Completo"
              required
              onChange={(e) => {
                setCustomer({ ...customer, name: e.target.value }); //pega tudo de custumer e atualiza apenas o Name
              }}
            />
            <input
              type="email"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
              required
              onChange={(e) => {
                setCustomer({ ...customer, email: e.target.value }); //pega tudo de custumer e atualiza apenas o Name
              }}
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
              required
              onChange={(e) => {
                setCustomer({ ...customer, phone_numbers: [e.target.value] }); //pega tudo de custumer e atualiza apenas o
              }}
            />

            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="CPF"
              required
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
              required
              onChange={(e) => {
                setCustomer({ ...customer, birthday: e.target.value }); //pega tudo de custumer e atualiza apenas o
              }}
            />
            
            <Link
              to="/checkout"
              onClick={() => goToCheckOut()}
              className="btn btn-lg w-100 btn-secondary"
            >
              Finalizar Cadastro
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
