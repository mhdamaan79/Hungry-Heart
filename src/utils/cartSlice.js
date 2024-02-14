import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // this reducers object contains actions with their corresponding reducers functions
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const indexToRemove = state.items.findIndex(
        (item) => item?.info?.id === action.payload
      );
      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1); // Remove one instance of the item
      }
    },
    clearItem: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
