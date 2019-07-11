import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import CreateListModal from '../../../../../shared/modal/CreateListModal';

const PopoverContentComponent = ({ closePopover, myLists, addMovieToList }) => (
  <nav className="popover__nav">
    <ul>
      <li onClick={closePopover}>
        <CreateListModal text="Create new list ..." />
      </li>
      {myLists.results.map(item => (
        <li key={item.id}>
          <Button
            type="link"
            onClick={() => {
              addMovieToList(item.id);
              closePopover();
            }}
          >
            {item.name}
          </Button>
        </li>
      ))}
    </ul>
  </nav>
);

PopoverContentComponent.propTypes = {
  addMovieToList: PropTypes.func.isRequired,
  closePopover: PropTypes.func.isRequired,
  myLists: PropTypes.object.isRequired,
};

export default PopoverContentComponent;
