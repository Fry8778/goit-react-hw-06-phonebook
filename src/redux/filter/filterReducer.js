import { createReducer } from '@reduxjs/toolkit';
import { handlechangeFilter } from './filterActions';

const filter = createReducer('', {
  [handlechangeFilter]: (state, action) => action.payload,
});

export default filter;