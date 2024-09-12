import { createSlice } from '@reduxjs/toolkit';

import { TProduct } from '@utils/types/product.type';

interface InitialState {
  items: TProduct[];
}
const initialState: InitialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, { payload: product }) => {
      const existingItemIndex = state.items.findIndex(
        item => item.id === product.id,
      );

      if (existingItemIndex !== -1) {
        state.items.splice(existingItemIndex, 1);
      } else {
        state.items.push(product);
      }
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorite } = favoritesSlice.actions;
