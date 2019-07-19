import React from 'react';

import MovieDetailsComponent from '../component';

describe('<MovieDetailsComponent />', () => {
  const props = {
    title: 'some title',
    movieDetails: [],
  };
  const component = shallow(<MovieDetailsComponent {...props} />);

  describe('should match snapshots', () => {
    it('should match snapshot - without movieDetails', () => {
      expect(component).toMatchSnapshot();
    });

    it('should match snapshot - movieDetails (character)', () => {
      const newProps = {
        ...props,
        movieDetails: [
          { id: 1, profile_path: 'path_1', name: 'name_1', character: 'character_1' },
          { id: 2, profile_path: 'path_2', name: 'name_2', character: 'character_2' },
        ],
      };
      component.setProps(newProps);
      expect(component).toMatchSnapshot();
    });

    it('should match snapshot - movieDetails (job)', () => {
      const newProps = {
        ...props,
        movieDetails: [
          { id: 1, profile_path: 'path_1', name: 'name_1', job: 'job_1' },
          { id: 2, profile_path: 'path_2', name: 'name_2', job: 'job_2' },
        ],
      };
      component.setProps(newProps);
      expect(component).toMatchSnapshot();
    });
  });
});
