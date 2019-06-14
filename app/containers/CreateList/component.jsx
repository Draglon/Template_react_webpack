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
            description: "Just an awesome list",
            language: "en",
            name: "This is my awesome test list.",
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
