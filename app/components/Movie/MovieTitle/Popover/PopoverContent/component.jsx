import React from 'react';
import { Button } from 'antd';

import CreateListModal from '../../../../../shared/modal/CreateListModal';

const PopoverContentComponent = ({ closePopover, myLists, addMovieToList }) => (
  <>
    <div onClick={closePopover}>
      <CreateListModal text="Create new list ..." />
    </div>
    <ul>
      {myLists.results.map(item => (
        <li key={item.id}>
          <Button type="link" onClick={() => addMovieToList(item.id)}>
            {item.name}
          </Button>
        </li>
      ))}
    </ul>
  </>
);

export default PopoverContentComponent;
