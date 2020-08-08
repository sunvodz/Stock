const initialState = {
    products: []
}
const reducer = (state = initialState, action) => {
    const allproducts = [...state.products];
    switch(action.type) {
        case 'GET_product_LISTS':
            const allproductsState = {
                ...state,
                products: action.playload
            }
            return allproductsState;
        default:
            break;
    }
    return state;
}
export default reducer;
