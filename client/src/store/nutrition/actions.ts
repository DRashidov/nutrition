import { Nutrition } from 'models/nutrition';
import * as type from './types';

export type SetNutritionAction = {
  type: typeof type.SET_NUTRITION;
  payload?: Nutrition[];
};

export type SetSelectedAction = {
  type: typeof type.SET_SELECTED;
  payload: { id: string; selected: boolean };
};

export type ClearSelectedAction = {
  type: typeof type.CLEAR_SELECTED;
};

export const setNutrition = (nutrition?: Nutrition[]): SetNutritionAction => ({
  type: type.SET_NUTRITION,
  payload: nutrition,
});

export const setSelected = (id: string, selected: boolean): SetSelectedAction => ({
  type: type.SET_SELECTED,
  payload: { id, selected },
});

export const clearSelected = (): ClearSelectedAction => ({
  type: type.CLEAR_SELECTED,
});

export type NutritionActionTypes = SetNutritionAction | SetSelectedAction | ClearSelectedAction;
