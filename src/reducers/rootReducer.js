const initState = {
  cart: [],
};

const rootReducer = (state = initState, action) => {
  console.log("product type", action.type);

  if (action.type === "CART_LOGOUT") {
    console.log("CARTTTT");
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "EMPTY_CART") {
    console.log("hey");
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "GET_CART") {
    return {
      ...state,
      cart: action.products,
    };
  }

  if (action.type === "ADD_PRODUCT_THUNK") {
    let newCart = [...state.cart];

    const productExist = newCart.find(
      (product) => product._id === action.product._id
    );
    if (productExist == undefined) {
      let product = action.product;
      product.quantity = action.quantity;
      newCart.push(product);
    } else {
      const updateCart = newCart.map((product) => {
        if (product._id === action.product._id) {
          product.quantity = product.quantity + action.quantity;
          return product;
        } else {
          return product;
        }
      });
      return {
        ...state,
        cart: updateCart,
      };
    }

    return {
      ...state,
      cart: newCart,
    };
  }
  if (action.type == "DECREASE_QUANTITY") {
    let newCart = [...state.cart];

    const updateCart = newCart.map((product) => {
      if (product._id === action.product._id) {
        if (product.quantity === 1) {
          return product;
        }
        product.quantity--;
        return product;
      } else {
        return product;
      }
    });
    return {
      ...state,
      cart: updateCart,
    };
  }

  if (action.type == "INCREASE_QUANTITY") {
    let newCart = [...state.cart];

    const updateCart = newCart.map((product) => {
      if (product._id === action.product._id) {
        product.quantity++;
        return product;
      } else {
        return product;
      }
    });
    return {
      ...state,
      cart: updateCart,
    };
  }

  if (action.type === "ADD_PRODUCT") {
    let newCart = [...state.cart];

    const productExist = newCart.find(
      (product) => product._id === action.product._id
    );
    if (productExist == undefined) {
      let product = action.product;
      product.quantity = action.quantity;
      newCart.push(product);
    } else {
      const updateCart = newCart.map((product) => {
        if (product._id === action.product._id) {
          product.quantity++;
          return product;
        } else {
          return product;
        }
      });
      return {
        ...state,
        cart: updateCart,
      };
    }

    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === "DELETE_PRODUCT") {
    let newCart = state.cart.filter((product) => {
      return action.id !== product._id;
    });

    return {
      ...state,
      cart: newCart,
    };
  }
  return state;
};

export default rootReducer;
