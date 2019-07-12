import React from 'react';
import PropTypes from 'prop-types';

import CreateListModal from '../../../../../shared/modal/CreateListModal';
import PopoverNavLink from './PopoverNavLink';

const PopoverContentComponent = ({ closePopover, myLists, movieId }) => (
  <nav className="popover__nav">
    <ul>
      <li onClick={closePopover}>
        <CreateListModal text="Create new list ..." />
      </li>
      {myLists.results.map(item => (
        <li key={item.id}>
          <PopoverNavLink list={item} movieId={movieId} closePopover={closePopover} />
        </li>
      ))}
    </ul>
  </nav>
);

PopoverContentComponent.propTypes = {
  closePopover: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
  myLists: PropTypes.object.isRequired,
};

export default PopoverContentComponent;
