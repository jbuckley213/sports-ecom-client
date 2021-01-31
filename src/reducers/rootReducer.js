const initState = {
  cart: [
    {
      _id: 1,
      name: "CROSS-TRAINING ELASTIC TRAINING BAND 15 KG",
      description:
        "Our design teams developed this elastic band for your weight training, cross training, or physical preparation sessions.The Training Band not only builds muscle strength but also helps you stretch. It is a versatile accessory that will become an absolute must for your workouts.",
      price: 7,
      quantity: 1,
      image:
        "https://contents.mediadecathlon.com/p1248644/k$8cb09590be97dba0d22732b5c4c7f118/sq/Cross+Training+Elastic+Training+Band+15+kg.webp?f=1000x1000",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log("product type", action.type);

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
