export const ADD_WISHLIST_ITEMS = 'addWishList/wishList';
export const REMOVE_WISHLIST_ITEMS = 'removeWishList/wishList';

export function addWishlistItems(productId) {
    return {type: ADD_WISHLIST_ITEMS, payload: { productId}};
  }

export function removeWishlistItems(productId) {
    return {type: REMOVE_WISHLIST_ITEMS, payload: { productId }};
  }

export default function wishListsReducer(state=[], action){
    switch(action.type){
        case ADD_WISHLIST_ITEMS:
            return [...state, action.payload]
        case REMOVE_WISHLIST_ITEMS:
            return [...state, state.filter(
                (el) => el.productId !== action.payload.productId
              )]
        default: return state;
    }
}