import { createSlice } from '@reduxjs/toolkit';

interface ProductState {
  items: any[];
  title: string;
}

const initialState = { items: [], title: '' } as ProductState;

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;
export default productSlice.reducer;
