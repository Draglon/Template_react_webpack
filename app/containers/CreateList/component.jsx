import React from 'react';

const CreateList = ({ createList, listId }) => (
  <>
    <h2 className="section__title">Home page</h2>
    <div className="">
      <button
        type="button"
        className="btn btn-primary btn--small"
        onClick={() =>
          createList({
            name: 'This is m 120000003433',
            description: 'Just an asdas 10000000000455',
            language: 'en',
          })
        }
      >
        Create list
      </button>
    </div>
    <div className="">listId: {listId ? listId.list_id : null}</div>
  </>
);

export default CreateList;
