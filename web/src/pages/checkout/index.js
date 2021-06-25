import './styler.css';
import Header from "../../components/header";
import ProductInList from "../../components/products/list"

const Checkout = () => {
  return (
    <div className="h-100">
      <Header hideSideBar/>
      <div className="container mt-4">
        <div className="row">
          {/* formulario de  finalização de compra */}
          <div className="col-6">
            <span className="section-title">Dados de Entrega</span>

            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="CEP"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="Logradouro"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-5">
                <input
                  type="number"
                  placeholder="Número"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-5 pl-0">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-2 pl-0">
                <input
                  type="text"
                  placeholder="UF"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <span className="section-title">Dados de Pagamento</span>

            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="Número do cartão"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Validade"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="CVV"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Nome do titular"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  placeholder="CPF / CNPJ do titular"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <b>Total</b>
                <h3 className="h3Price">R$ 300,00</h3>
              </div>
              <div className="col-12">
                <button className=" btn w-100 btn-lg btn-primary">
                  {" "}
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
          {/* box dos item da sacola */}
          <div className="col-6">
            <div className="box col mb-4 boxsidebar">
              <h5>Minha Sacola (5) </h5>
              <div className="row products boxsidebarItem">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
                  <ProductInList />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
