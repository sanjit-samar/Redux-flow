// Action types
export const ADD_CART_ITEMS = 'addItems/cart';
export const REMOVE_CART_ITEMS = 'removeItems/cart';


//Action creators
export function addCartItems(productId, quantity) {
  return {
    type: ADD_CART_ITEMS,
    payload: { productId, quantity },
  };
}

export function removeCartItems(productId) {
  return { type: REMOVE_CART_ITEMS, payload: { productId } };
}

//Reducer
export default function cartReducer(state=[], action){
    switch(action.type){
        case ADD_CART_ITEMS:
            return [...state, action.payload]
        case REMOVE_CART_ITEMS:
            return [...state, state.filter(
                (el) => el.productId !== action.payload.productId
              )]
        default : return state;
    }
}