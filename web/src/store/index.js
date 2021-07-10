// levanta o ambiente de configuração do redux
import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;