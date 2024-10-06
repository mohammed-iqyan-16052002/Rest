import { Add_To_Cart, Rem_To_Cart } from "./Constant";

const initialState = {
    liked: [],
};

export const ResData = (state = initialState, action) => {
    switch (action.type) {
        case Add_To_Cart:
            return {
                ...state,
                liked: [action.data, ...state.liked],
            };

        case Rem_To_Cart:
            return {
                ...state,
                liked: state.liked.filter((item) => item.idMeal !== action.data.id),
            };
            
        default:
            return state;
    }
};
