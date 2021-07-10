// escuta as ações para realizar as modificações que seram enviadas para o store>state
//  DRAFT: rascunho


import produce from 'immer' // fornece uma capia do state para alteração
const INITTIAL_STATE = {customer:{}} //estado inicial do modulo

function shop(state = INITTIAL_STATE,action){
    switch (action.type) {
      case "@sho/SET_CUSTOMER": {
        return produce(state, (draft) => {
          draft.customer = action.customer;
        });
      }

      default:
        return state;
    }
}

export default shop;