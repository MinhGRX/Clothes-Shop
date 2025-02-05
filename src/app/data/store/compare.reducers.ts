import { Product } from '../models/product.model';
import * as CompareActions from './compare.actions';

export interface State {
  compare: Product[];
}

export const initialState: State = {
  compare: []
};

export function CompareReducer(state = initialState, action: CompareActions.CompareActions) {
  switch (action.type) {
    case CompareActions.ADD_TO_COMPARE:
      const compare1 = [...state.compare];
      if (!compare1.find(product => product.id === action.payload.id)) {
        compare1.push(action.payload);
        return { ...state, compare: compare1 };
      }
      return state;

    case CompareActions.REMOVE_FROM_COMPARE:
      const compare2 = [...state.compare];
      let index = -1;
      index = compare2.findIndex(product => product.id === action.payload);
      if (index > -1) {
        compare2.splice(index, 1);
        return {
          ...state,
          compare: compare2
        };
      }
      return state;

    default:
      return state;
  }
}

export const getCompare = (state: State) => state.compare;