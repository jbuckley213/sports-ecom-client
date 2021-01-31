import axios from "axios";

class PaymentService {
  constructor() {
    this.payment = axios.create({
      baseURL: "http://localhost:5000/payment",
      withCredentials: true,
    });
  }

  processPayment() {
    const pr = this.payment.get("/").then(({ data }) => data);

    return pr;
  }
}

const paymentService = new PaymentService();

export default paymentService;
