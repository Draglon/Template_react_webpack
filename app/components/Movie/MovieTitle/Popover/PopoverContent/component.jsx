import React from 'react';

import CreateListModal from '../../../../../shared/modal/CreateListModal';
import PopoverNavItem from './PopoverNavItem';

const PopoverContentComponent = ({ closePopover, myLists, movieId }) => (
  <nav className="popover__nav">
    <ul>
      <li onClick={closePopover}>
        <CreateListModal text="Create new list ..." />
      </li>
      {myLists.results.map(item => (
        <PopoverNavItem list={item} movieId={movieId} />
      ))}
    </ul>
  </nav>
);

export default PopoverContentComponent;
