import { Add_To_Cart,Rem_To_Cart } from "./Constant";

export const addtocart = (item) => {
    return {
        type: Add_To_Cart,
        data: item,
    };
};

export const remtocart = (idMeal) => {
    return {
        type: Rem_To_Cart,
        data: { id: idMeal }
    };
};

