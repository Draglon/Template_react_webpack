export const formatMoney = str => str.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
export const formatTime = str => `${parseInt(str / 60)}h ${str % 60}m`;
