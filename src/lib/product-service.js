import axios from "axios";

class ProductService {
  constructor() {
    this.product = axios.create({
      // baseURL: "http://localhost:5000",
      baseURL: process.env.REACT_APP_API_URL,

      withCredentials: true,
    });
  }

  getAllProducts() {
    const pr = this.product.get("/product").then(({ data }) => data);

    return pr;
  }

  addProductToCart(id) {
    const pr = this.product.get(`/product/cart/${id}`).then(({ data }) => data);

    return pr;
  }

  getProductsInCart() {
    const pr = this.product.get("/product/cart").then(({ data }) => data);
    return pr;
  }

  incrementCartItem(id) {
    const pr = this.product
      .get(`/product/cart-item-increment/${id}`)
      .then(({ data }) => data);
    return pr;
  }

  decrementCartItem(id) {
    const pr = this.product
      .get(`/product/cart-item-decrement/${id}`)
      .then(({ data }) => data);
    return pr;
  }
  deleteProductFromCart(id) {
    const pr = this.product
      .delete(`/product/cart/${id}`)
      .then(({ data }) => data);

    return pr;
  }

  changeCart() {
    const pr = this.product
      .put(`/product/change-cart`)
      .then(({ data }) => data);

    return pr;
  }

  previousCarts() {
    const pr = this.product
      .get(`/product/previous-cart`)
      .then(({ data }) => data);

    return pr;
  }

  getProduct(id) {
    const pr = this.product
      .get(`/product/product-details/${id}`)
      .then(({ data }) => data);
    return pr;
  }
}

const productService = new ProductService();

export default productService;
