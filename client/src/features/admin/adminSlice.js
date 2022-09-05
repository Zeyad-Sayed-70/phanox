import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import adminAPI from './adminAPI';

export const postProduct = createAsyncThunk(
  'Admin/postProduct', 
  async (data) => {
    try {
      const res = await adminAPI.postProduct(data)
      return res
    } catch (error) {
      console.log(error)
    }
})

export const delProduct = createAsyncThunk(
  'Admin/delProduct', 
  async (id) => {
    try {
      const res = await adminAPI.delProduct(id)
      return res
    } catch (error) {
      console.log(error)
    }
})

export const getProducts = createAsyncThunk(
  'Admin/getProducts', 
  async (token) => {
    try {
      const res = await adminAPI.getProducts(token)
      return res
    } catch (error) {
      console.log(error)
    }
  })
  
  export const getProduct = createAsyncThunk(
    'Admin/getProduct',
    async (id) => {
      try {
        const res = await adminAPI.getProduct(id)
        return res
      } catch (error) {
      console.log(error)
    }
  })

const initialState = {
  data: {},
  ontherData: {},
  isLoading: false
}

const adminSlice = createSlice({
  name: 'product',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(postProduct.fulfilled, (state, action) => {
      state.ontherData = action.payload
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload
    })
    .addCase(getProduct.pending, (state, action) => {
      state.isLoading = true
    })
    .addCase(getProduct.fulfilled, (state, action) => {
      state.data = action.payload
      state.isLoading = false
    })
  }
})

export const {  } = adminSlice.actions
export default adminSlice.reducer
