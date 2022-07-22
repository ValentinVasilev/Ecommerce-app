import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductService } from '../../../../services/product.service';
import type { RootState } from '../../store';
import { ApiStatus } from '../../../../constants/apiStatus';
import { ProductType } from '../../../../models/ProductsModel';

export type ProductState = {
  products: ProductType[],
  getAllProductsStatus: ApiStatus,
  createProductStatus: ApiStatus,
  deleteProductByIdStatus: ApiStatus,
}

const initialState: ProductState = {
  products: [],
  getAllProductsStatus: ApiStatus.None,
  createProductStatus: ApiStatus.None,
  deleteProductByIdStatus: ApiStatus.None,
}

const productService = new ProductService();

export const getAllProductsAction = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    const response = await productService.getAllProducts();
    return response.data;
  }
)


export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (product: ProductType) => {
    const response = await productService.postProduct(product);
    return response.data;
  }
)

export const deleteProductById = createAsyncThunk(
  'products/deleteProductById',
  async (id: string) => {
    const response = await productService.deleteProduct(id);
    return response.data;
  }
)


export const productsSlice = createSlice({
  name: 'ProductsSlice',
  initialState,
  reducers: {
    clearAllApiStatuses: state => {
      state.createProductStatus = ApiStatus.None
      state.getAllProductsStatus = ApiStatus.None
    }
  },
  extraReducers: builder => {
    builder
      // GET Products
      .addCase(getAllProductsAction.pending, state => {
        state.getAllProductsStatus = ApiStatus.Pending
      })
      .addCase(getAllProductsAction.fulfilled, (state, { payload }) => {
        state.getAllProductsStatus = ApiStatus.Success
        state.products = payload;
      })
      .addCase(getAllProductsAction.rejected, (state) => {
        state.getAllProductsStatus = ApiStatus.Rejected
      })
      // POST Product
      .addCase(createProduct.pending, state => {
        state.createProductStatus = ApiStatus.Pending
      })
      .addCase(createProduct.fulfilled, (state, data) => {
        state.createProductStatus = ApiStatus.Success
        // const newProduct: ProductType = data.meta.arg
        // let check = Array.isArray(state.products)
        // console.log('Check', check)
        // // state.products.push({ ...newProduct, _id: data.payload.id })
        // state.products = newProduct;
        const newProduct: ProductType = data.meta.arg
        state.products.push({ ...newProduct, _id: data.payload.id })

      })
      .addCase(createProduct.rejected, (state) => {
        state.createProductStatus = ApiStatus.Rejected
      })
      // DELETE Product
      .addCase(deleteProductById.pending, state => {
        state.deleteProductByIdStatus = ApiStatus.Pending
      })
      .addCase(deleteProductById.fulfilled, (state, data) => {
        state.deleteProductByIdStatus = ApiStatus.Success
        const itemId: number = Array.from(state.products).findIndex(p => p._id === data.meta.arg)
        Array.from(state.products).slice(itemId, itemId + 1)
      })
      .addCase(deleteProductById.rejected, (state) => {
        state.createProductStatus = ApiStatus.Rejected
      })
  }
})

export const {
  clearAllApiStatuses
} = productsSlice.actions


export const selectAllProducts = (state: RootState) => state.products;
export const selectProductById = (state: RootState) => (id: string) => state
  .products.products.find((product: any) => product._id === id)
export default productsSlice.reducer;