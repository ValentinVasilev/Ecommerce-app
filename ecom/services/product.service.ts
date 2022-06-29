import axios, { AxiosInstance } from "axios";

const API_PATHS = {
  getAllProducts: '/api/products/getAll',
}

export class ProductService {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({});
  }

  public async getAllProducts() {
    return this.api.get(API_PATHS.getAllProducts);
  }

}