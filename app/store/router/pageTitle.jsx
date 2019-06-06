const DEFAULT = 'Template';

export default (state = DEFAULT, action = {}) => {
  switch (action.type) {
    case 'HOME':
      return `${DEFAULT} - Home`;
    case 'CONTACTS':
      return `${DEFAULT} - Contacts`;
    default:
      return `${DEFAULT} - Not Found`;
  }
};
