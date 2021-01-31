import axios from "axios";

class ProductService {
  constructor() {
    this.product = axios.create({
      baseURL: "http://localhost:5000/product",
      withCredentials: true,
    });
  }

  getAllProducts() {
    const pr = this.product.get("/").then(({ data }) => data);

    return pr;
  }

  addProductToCart(id) {
    const pr = this.product.get(`/cart/${id}`).then(({ data }) => data);

    return pr;
  }

  getProductsInCart() {
    const pr = this.product.get("/cart").then(({ data }) => data);
    return pr;
  }

  incrementCartItem(id) {
    const pr = this.product
      .get(`/cart-item-increment/${id}`)
      .then(({ data }) => data);
    return pr;
  }

  decrementCartItem(id) {
    const pr = this.product
      .get(`/cart-item-decrement/${id}`)
      .then(({ data }) => data);
    return pr;
  }
  deleteProductFromCart(id) {
    const pr = this.product.delete(`/cart/${id}`).then(({ data }) => data);

    return pr;
  }

  changeCart() {
    const pr = this.product.put(`/change-cart`).then(({ data }) => data);

    return pr;
  }

  previousCarts() {
    const pr = this.product.get(`/previous-cart`).then(({ data }) => data);

    return pr;
  }
}

const productService = new ProductService();

export default productService;
