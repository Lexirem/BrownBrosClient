import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  signup({ name, surname, direction, postalCode, email, password }) {
    return this.auth
      .post("/auth/signup", { name, surname, direction, postalCode, email, password })
      .then(({ data }) => data);
  };

  login({ email, password }) {
    return this.auth
      .post("/auth/login", { email, password })
      .then(({ data }) => data);
  };

  logout() {
    return this.auth.post("/auth/logout", {}).then(({ data }) => data);
  };

  me() {
    return this.auth.get("/auth/me").then(({ data }) => data);
  };

  profile(id){
    return this.auth.get(`/profile/${id}`).then(({data}) => data);
  };

  editUser(id){
    return this.auth.get(`/profile/${id}/edit`).then(({data}) => data);
  };

  cart = async () => {
    const userCart = await this.services.get("/pedido/carrito");
    return userCart.data;
  };
  
  addproduct = async (id) => {
    const productAdd = await this.services.post(
      `pedido/addproduct/${id}`
    );
    return productAdd.data;
  };
  delete = async (_id) => {
    const deleteProduct = await this.services.post(
      `pedido/deleteproduct`,
      { _id }
    );
    return deleteProduct.data;
  };

  addquantity = async (_id, quantity) => {
    const productQuantity = await this.services.post(
      `pedido/addquantity`,
      { _id, quantity }
    );
    return productQuantity.data;
  };
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;