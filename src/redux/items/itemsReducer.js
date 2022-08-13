import { createReducer } from '@reduxjs/toolkit';
import { addItem, removeItem } from './itemsActions';

const items = createReducer([], {
  [addItem]: (state, action) => [...state, action.payload],
  [removeItem]: (state, action) => state.filter(el => el.id !== action.payload),
});

export default items;