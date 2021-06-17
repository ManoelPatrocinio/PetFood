import Header from '../../components/header'
import Logo from "../../assets/logo-white.png";
import Illustration from "../../assets/illustration.png";
const Cadastro = () => {
  return (
    <div className="container-fluid h-100 bg-primary">
      <Header whiteVersion />
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
            />
            <input
              type="email"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
            />

            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="CPF"
            />
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="Data de nascimento"
            />

            <button className="btn btn-lg btn-block btn-secondary">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
