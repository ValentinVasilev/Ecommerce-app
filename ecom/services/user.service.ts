import axios, { AxiosInstance } from "axios";

const API_PATHS = {
  getAllUsers: '/api/user/getAll',
}

export class UserService {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({});
  }

  public async getAllUsers() {
    return this.api.get(API_PATHS.getAllUsers);
  }

  // TODO: Get User by Id
  // TODO: Update User's cart (remove and add product)
}