// escuta as ações para realizar as modificações que seram enviadas para o store>state
//  DRAFT: rascunho

import produce from "immer"; // fornece uma capia do state para alteração
import types from "./types";

const INITTIAL_STATE = {
  petshops: [],
  petshop: {},
  petshopMapSelected: null,
  mapCenter: {
    lat: -23.561684,
    lng: -46.625378,
  },
  cart: [],
  transactionFee: 0.1, //taxa de transação para o marketPlace
  defaultRecipient: {
    recipient_id: "RECIPIENT_ID_DO_MARKETPLACE",
    percentage: 10,
    liable: true,
  },
  transaction: {
    amount: 0,
    card_number: "",
    card_cvv: "",
    card_expiration_date: "",
    card_holder_name: "",
    customer: {},
    billing: {
      name: "Petfood LTDA",
      address: {
        country: "br",
        state: "sp",
        city: "Cotia",
        neighborhood: "Rio Cotia",
        street: "Rua Matrix",
        street_number: "9999",
        zipcode: "06714360",
      },
    }
  },
  shipping: {},
  items: [],
  split_rules: [],
  
}; 

function shop(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case types.SET_CUSTOMER: {
      return produce(state, (draft) => {
        draft.transaction.customer = action.customer;
      });
    }
    case types.SET_PETSHOPS: {
      return produce(state, (draft) => {
        draft.petshops = action.petshops;
      });
    }
    case types.SET_PETSHOP_MAP_SELECTED: {
      return produce(state, (draft) => {
        draft.petshopMapSelected = action.petshop;
      });
    }
    case types.SET_MAP_CENTER: {
      return produce(state, (draft) => {
        draft.mapCenter = action.location;
      });
    }

    case types.SET_PETSHOP: {
      return produce(state, (draft) => {
        draft.petshop = action.petshop;
      });
    }
    case types.TOGGLE_CART_PRODUCT: {
      return produce(state, (draft) => {
        const index = draft.cart.findIndex((p) => p._id === action.product._id); //verifica de o item já existe
        if (index !== -1) {
          draft.cart.splice(index, 1); //se exitir remove
        } else {
          draft.cart.push(action.product); //adiciona
        }
      });
    }

    case types.SET_TRANSACTION: {
      return produce(state, (draft) => {
        draft.transaction = {...draft.transaction, ...action.transaction};
      });
    }

    default:
      return state;
  }
}

export default shop;
