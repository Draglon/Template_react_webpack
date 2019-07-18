import React from 'react';

import MovieCarouselComponent from '../component';

describe('<MovieCarouselComponent />', () => {
  const props = {
    title: 'title',
    backdrops: [{ file_path: 'path_1' }, { file_path: 'path_2' }, { file_path: 'path_3' }],
  };
  const component = shallow(<MovieCarouselComponent {...props} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
