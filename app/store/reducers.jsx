import { combineReducers } from 'redux';
import { POPUP_TOGGLE, MENU_TOGGLE } from './actions';

// Popup
const popupReducer = (state = false, action) => {
  switch (action.type) {
    case POPUP_TOGGLE:
      return !state;
    default:
      return state;
  }
};

export const popup = combineReducers({
  popupToggle: popupReducer,
});

// Mobile Menu
const menuReducer = (state = false, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return !state;
    default:
      return state;
  }
};

export const menu = combineReducers({
  menuToggle: menuReducer,
});
