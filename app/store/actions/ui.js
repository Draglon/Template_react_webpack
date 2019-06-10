export const POPUP_TOGGLE = 'POPUP_TOGGLE';
export const MENU_TOGGLE = 'MENU_TOGGLE';

export const popupToggle = payload => ({
  type: POPUP_TOGGLE,
  payload,
});

export const menuToggle = () => ({
  type: MENU_TOGGLE,
});
