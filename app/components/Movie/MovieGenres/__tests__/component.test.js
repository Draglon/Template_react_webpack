import React from 'react';

import MovieGenresComponent from '../component';

describe('<MovieGenresComponent />', () => {
  const props = {
    title: 'some title',
    genres: [],
  };
  const component = shallow(<MovieGenresComponent {...props} />);

  describe('should match snapshots', () => {
    it('should match snapshot - without genres', () => {
      expect(component).toMatchSnapshot();
    });

    it('should match snapshot - with genres', () => {
      const newProps = {
        ...props,
        genres: [{ id: 1, name: 'name_1' }, { id: 2, name: 'name_2' }],
      };
      component.setProps(newProps);
      expect(component).toMatchSnapshot();
    });
  });
});
