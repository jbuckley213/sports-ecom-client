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

  saveDetails(name, building, city, street, postcode, country, email) {
    console.log("called");

    const pr = this.payment
      .post("/details", {
        name,
        building,
        city,
        street,
        postcode,
        country,
        email,
      })
      .then(({ data }) => data);

    return pr;
  }

  getUser() {
    const pr = this.payment.get("/review").then(({ data }) => data);

    return pr;
  }
}

const paymentService = new PaymentService();

export default paymentService;
