// escuta as ações para realizar as modificações que seram enviadas para o store>state
//  DRAFT: rascunho

import produce from "immer"; // fornece uma capia do state para alteração
import types from "./types";

const INITTIAL_STATE = {
  customer: {},
  petshops: [],
  petshop:{},
  petshopMapSelected: null,
  mapCenter: {
    lat: -23.561684,
    lng: -46.625378,
  },
  cart:[]
}; 

function shop(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case types.SET_CUSTOMER: {
      return produce(state, (draft) => {
        draft.customer = action.customer;
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
        const index = draft.cart.findIndex((p) => p._id === action.product._id) //verifica de o item já existe
        if(index != -1){
          draft.cart.splice(index,1) //se exitir remove
        }else{
          draft.cart.push(action.product) //adiciona
        }
      });
    }

    default:
      return state;
  }
}

export default shop;
