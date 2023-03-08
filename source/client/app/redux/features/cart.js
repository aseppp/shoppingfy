import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems: (state) => {
      state.items = 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItems } = cartSlice.actions;

export default cartSlice.reducer;
