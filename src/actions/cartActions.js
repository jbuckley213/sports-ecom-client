import productServices from "./../lib/product-service";

export const deleteProductFromCart = (id) => {
  productServices
    .deleteProductFromCart(id)
    .then((response) => {
      console.log("response");
    })
    .catch((err) => console.log(err));

  return {
    type: "DELETE_PRODUCT",
    id,
  };
};

export const addProductToCart = (product, quantity) => {
  return {
    type: "ADD_PRODUCT",
    product,
    quantity,
  };
};

export const increaseQuantity = (product) => {
  productServices
    .incrementCartItem(product._id)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));

  return {
    type: "INCREASE_QUANTITY",
    product,
  };
};

export const decreaseQuantity = (product) => {
  productServices
    .decrementCartItem(product._id)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));

  return {
    type: "DECREASE_QUANTITY",
    product,
  };
};

export const addProduct = (product, quantity) => {
  //async call to database
  productServices
    .addProductToCart(product._id)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("quantity", quantity);
  return (dispatch, getState) => {
    dispatch({ type: "ADD_PRODUCT_THUNK", product, quantity });
  };
};

export const getCart = () => {
  //   function assignQuantity(products) {
  //     const productsWithQuantity = [];
  //     const productId = [];
  //     products.forEach((product) => {
  //       if (productId.indexOf(product._id) === -1) {
  //         productId.push(product._id);
  //         product.quantity = 1;
  //         productsWithQuantity.push(product);
  //       } else {
  //         const index = productId.indexOf(product._id);

  //         productsWithQuantity[index].quantity =
  //           productsWithQuantity[index].quantity + 1;
  //       }
  //     });
  //     return productsWithQuantity;
  //   }

  return function (dispatch) {
    return productServices
      .getProductsInCart()
      .then((productsFound) => {
        console.log(productsFound);

        const products = productsFound.map((item) => {
          item.product.quantity = item.quantity;
          return item.product;
        });

        // const products = assignQuantity(productsFound);
        dispatch({ type: "GET_CART", products });
      })
      .catch((err) => console.log(err));
  };
};

export const emptyCart = () => {
  console.log("HELLP");
  productServices
    .changeCart()
    .then((productsFound) => {
      console.log(productsFound);
    })
    .catch((err) => console.log(err));

  return {
    type: "EMPTY_CART",
  };
};
