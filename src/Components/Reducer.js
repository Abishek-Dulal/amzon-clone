export const InitialState = {
  basket: []
};

function reducer(state = InitialState, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case "REMOVE_FROM_BASKET":
      var new_basket = [...state.basket];
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      );
      if (index >= 0) {
        console.log("ITem found");
        new_basket.splice(index, 1);
      } else {
        console.warn("No item Found!");
      }
      return {
        ...state,
        basket: new_basket
      };
    //logic for removing item for basket

    default:
      return state;
  }
}

export const getBasketTotal = basket =>
  basket?.reduce((amount, item) => parseInt(item.price) + amount, 0);
export { reducer };
