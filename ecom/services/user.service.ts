import axios, { AxiosInstance } from "axios";

const baseUrl = '/api/user';

const API_PATHS = {
  getAllUsers: `${baseUrl}/getAll`,
  updateUser: `${baseUrl}/update`
}

export class UserService {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({});
  }

  public async getAllUsers() {
    return this.api.get(API_PATHS.getAllUsers);
  }

  public async updateUser(userObj: any) {
    let id = userObj.user._id;
    let email = userObj.user.email
    return this.api.put(API_PATHS.updateUser, { email: email }, {
      params: {
        id
      }
    });
  }
  // TODO: Get User by Id
  // TODO: Update User's cart (remove and add product)
}