import axios, { AxiosInstance } from "axios";


const API_PATHS = {
  getAllProducts: '/api/products/getAll',
  createProduct: '/api/products/create',
  deleteProductById: '/api/products/$id',
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

  public async deleteProduct(id: string) {
    return this.api.delete(API_PATHS.deleteProductById.replace('$id', id));
  }

}