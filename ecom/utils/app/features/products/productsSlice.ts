import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductService } from '../../../../services/product.service';
import type { RootState } from '../../store';
import { ApiStatus } from '../../../../constants/apiStatus';
import { ProductType } from '../../../../models/ProductsModel';

export type ProductState = {
  products: ProductType,
  getAllProductsStatus: ApiStatus,
}

const initialState: ProductState = {
  products: [],
  getAllProductsStatus: ApiStatus.None
}

const productService = new ProductService();

export const getAllProductsAction = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    const response = await productService.getAllProducts();
    return response.data;
  }
)


export const productsSlice = createSlice({
  name: 'ProductsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
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
  }
})

export const selectAllProducts = (state: RootState) => state.products;
export default productsSlice.reducer;