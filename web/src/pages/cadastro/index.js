import { useState, React } from "react";
import { useDispatch } from "react-redux"; //dispara a action p/ a reducer atravez do UI
import { setCustomer as setStoreCustomer } from "../../store/modules/shop/actions";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Header from "../../components/header";
import Illustration from "../../assets/background_img2.jpg";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "./styler.css";

const Cadastro = () => {
  const dispatch = useDispatch(); //dispara a action p/ a reducer atravez do UI
  const history = useHistory(); // p/ redirecionar
  
  const { register,formState: { errors }, handleSubmit,} = useForm({
    criteriaMode: "all",
  });

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

  const goToCheckOut = () => {
    dispatch(setStoreCustomer(customer));
  };
  const onSubmit = () =>{
    goToCheckOut() // salva os dados no customer
    Swal.fire({
      icon: "success",
      title: "Tudo certo",
      text: "Seu cadastro foi realizado !",
    }).then((result) => {
      
      if (result.isConfirmed) {
       history.push("/checkout");
      }; 
   })
  }

  return (
    <div className="container-fluid  cadastro_body">
      <img src={Illustration} className="imgFundo" />
      <section className="cadastro_container">
        <div className="header">
          <Header whiteVersion hideSideBar />
        </div>
        <div className="col-12 cadastro_box">
          <form
            className="col-3
            "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="text-center mb-4 boxHeader">
              <h2 className="text-center">Cadastre-se</h2>
              <small>E acompanhe seu pedido</small>
            </div>
            <input
              type="text"
              className="form-control form-control-lg mt-3"
              placeholder="Nome Completo"
              {...register("client_name", {
                required: "Informe seu nome para continuar",
                minLength: {
                  value: 5,
                  message: "O nome deve ter mais de 4 caracteres",
                },
              })}
              onChange={(e) => {
                setCustomer({ ...customer, name: e.target.value }); //pega tudo de custumer e atualiza apenas o Name
              }}
            />
            <ErrorMessage
              errors={errors}
              name="client_name"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <small className="alertCadInput" key={type}>
                        {message}
                      </small>
                    ))
                  : null;
              }}
            />

            <input
              type="email"
              name="client_email"
              className="form-control form-control-lg mt-3"
              placeholder="E-mail"
              {...register("client_email", {
                required: "Informe seu email para continuar",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Informe um e-mail válido",
                },
                minLength: {
                  value: 5,
                  message: "O nome deve ter mais de 4 caracteres",
                },
              })}
              onChange={(e) => {
                setCustomer({ ...customer, email: e.target.value }); //pega tudo de custumer e atualiza apenas o Name
              }}
            />
            <ErrorMessage
              errors={errors}
              name="client_email"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <small className="alertCadInput" key={type}>
                        {message}
                      </small>
                    ))
                  : null;
              }}
            />
            <input
              type="text"
              className="form-control form-control-lg mt-3"
              placeholder="DDD + Nº do celular"
              name="client_contato"
              {...register("client_contato", {
                required: "Informe seu Nº de celular para continuar",
                pattern: {
                  value: /\d+/,
                  message: "Apenas Números",
                },
                minLength: {
                  value: 11,
                  message: "DDD + Nº de celular",
                },
              })}
              onChange={(e) => {
                setCustomer({ ...customer, phone_numbers: [e.target.value] }); //pega tudo de custumer e atualiza apenas o
              }}
            />
            <ErrorMessage
              errors={errors}
              name="client_contato"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <small className="alertCadInput" key={type}>
                        {message}
                      </small>
                    ))
                  : null;
              }}
            />
            <input
              type="text"
              name="client_cpf"
              className="form-control form-control-lg mt-3"
              placeholder="CPF"
              {...register("client_cpf", {
                required: "Informe um CPF valido",
                pattern: {
                  value: /\d+/,
                  message: "Apenas Números",
                },
                minLength: {
                  value: 11,
                  message: "O CPF deve ter 11 números",
                },
              })}
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
            <ErrorMessage
              errors={errors}
              name="client_cpf"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <small className="alertCadInput" key={type}>
                        {message}
                      </small>
                    ))
                  : null;
              }}
            />
            <input
              type="date"
              className="form-control form-control-lg mt-3"
              placeholder="Data de nascimento"
              onChange={(e) => {
                setCustomer({ ...customer, birthday: e.target.value }); //pega tudo de custumer e atualiza apenas o
              }}
            />

            {/* <Link
                // to="/checkout"
                onClick={() => handleSubmit(vai)}
                className="btn btn-lg w-100 btn-secondary"
              >
                Finalizar Cadastro
              </Link> */}
            <button type="submit" className="btn btn-lg w-100 btn-secondary">
              Finalizar Cadastro
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Cadastro;
