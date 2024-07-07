import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer, { addCartItems, removeCartItems} from './cartReducer';
import wishListsReducer, {addWishlistItems, removeWishlistItems} from './wishListsReducer';
import productsReducer from './productsReducer';

function App() {

  // const initialState = {
  //   products: productsList,
  //   cartItem: [],
  //   wishList: [],
  // }


  // function reducer(state=initialState, action){
  //     switch(action.type){
  //       case ADD_CART_ITEMS:
  //         return {...state, cartItem: [...state.cartItem, action.payload]}
  //       case REMOVE_CART_ITEMS:
  //         return {
  //           ...state,
  //           cartItem: state.cartItem.filter(
  //             (el) => el.productId !== action.payload.productId
  //           )
  //         }
  //       case ADD_WISHLIST_ITEMS:
  //         return {...state, wishList: [...state.wishList, action.payload]}
  //       case REMOVE_WISHLIST_ITEMS:
  //         return {
  //           ...state,
  //           wishList: state.wishList.filter(
  //             (el) => el.productId !== action.payload.productId
  //           )
  //         }
  //       default:  
  //       return state;
  //     }
  // }

  const reducer = combineReducers({
    products: productsReducer,
    cartItem: cartReducer,
    wishList: wishListsReducer,
  })

  const store = configureStore({
    reducer: reducer
  });
  
  console.log(store.dispatch(addCartItems(1,2)));
  console.log(store.dispatch(removeCartItems(1)));
  console.log(store.dispatch(addWishlistItems(12)));
  console.log(store.dispatch(removeWishlistItems(12)));
  // console.log(store.getState().products.map((item)=> item.id));
  console.log(store.getState());


  return <h2>Redux Toolkit</h2>;
}

export default App;