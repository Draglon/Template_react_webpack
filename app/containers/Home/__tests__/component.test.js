import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ConnectedHome, { Home } from '../component';

describe('<Home /> container', () => {
  const initialState = {
    isLogged: 'some session_id',
  };
  const onRefreshSpy = jest.fn();
  let store;
  let component;

  beforeAll(() => jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect));

  beforeEach(() => {
    store = configureStore(initialState);
    component = shallow(<ConnectedHome store={store} onRefresh={onRefreshSpy} />);
  });

  // it('should refresh when change isLogged', () => {
  //   expect(onRefreshSpy).toHaveBeenCalled();
  // });

  it('render property', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
