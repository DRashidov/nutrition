import { Nutrition } from 'models/nutrition';
import { NutritionActionTypes } from './actions';
import * as type from './types';

interface INutritionState {
  nutritionList?: Nutrition[];
  selectedIds: string[];
}

const initialState: INutritionState = {
  nutritionList: [],
  selectedIds: [],
};

export const nutrition = (state: INutritionState = initialState, action: NutritionActionTypes): INutritionState => {
  switch (action.type) {
    case type.SET_NUTRITION:
      return {
        ...state,
        nutritionList: action.payload,
      };

    case type.SET_SELECTED: {
      const { selectedIds } = state;
      const { selected, id } = action.payload;
      const ids = selected ? [...selectedIds, id] : selectedIds.filter((_id) => _id !== id);

      return {
        ...state,
        selectedIds: ids,
      };
    }

    case type.CLEAR_SELECTED:
      return {
        ...state,
        selectedIds: [],
      };

    default:
      return state;
  }
};
