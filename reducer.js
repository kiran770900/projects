
export const initialState = {
    basket:[],
    user:null
};
function reducer(state,action){
    console.log(action);
    switch (action.type) {
        case " SET_USER":
            return{
                ...state,
                user:action.user,
            };
        case 'ADD__TO__BASKET':
            return{
                ...state,
                basket: [...state.basket , action.item],
            };
        case 'REMOVE__FROM__BASKET':
            let newBasket =[...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >= 0) {
                newBasket.splice(index,1);

            } else {
                alert("cannot remove from the basket");
            }

            return{...state, basket:newBasket};   
         default:
            return state;
        }
    };
export default reducer;