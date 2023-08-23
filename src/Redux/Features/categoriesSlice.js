import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'Under construction',
  },

  reducers: {
    confirmStatus: (state, action) => {
      state.categories = action.payload === 'Under construction'
        ? [action.payload]
        : state.categories;
    },
  },
});

export const { confirmStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
