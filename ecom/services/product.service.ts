import axios, { AxiosInstance } from "axios";
import { ProductType } from "../models/ProductsModel";


const API_PATHS = {
  getAllProducts: '/api/products/getAll',
  createProduct: '/api/products/create',
}

export class ProductService {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({});
  }

  public async getAllProducts() {
    return this.api.get(API_PATHS.getAllProducts);
  }

  public async postProduct(product: any) {
    return this.api.post(API_PATHS.createProduct, product);
  }


}