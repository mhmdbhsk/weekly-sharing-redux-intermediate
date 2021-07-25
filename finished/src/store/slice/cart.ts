import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store';

const initialState = {
  cart: {
    items: [
      {
        id: 0,
        title: '',
        price: 0,
        unit: '',
        stock: 0,
        desc: '',
        total: 0,
      },
    ],
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const item = { ...payload, total: 1 };
      state.cart.items = [...state.cart.items, item];
    },
    increaseItem(state, { payload }) {
      const newCart = state.cart.items.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            total: (item.total += 1),
          };
        }
      });
      state.cart.items = newCart as any;
    },
    decreaseItem(state, { payload }) {
      const index = state.cart.items.findIndex(
        (item) => item.id === payload.id
      );

      const newCart = () => {
        if (state.cart.items[index].total > 1) {
          return {
            ...state.cart.items,
            total: (state.cart.items[index].total -= 1),
          };
        }
      };
    },
  },
});

export const { addToCart, increaseItem, decreaseItem } = cartSlice.actions;

export const selectCart = (state: AppState) => state.cart.items;
