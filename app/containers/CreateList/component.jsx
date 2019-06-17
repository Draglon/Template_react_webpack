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
            description: "Just an awedfdsfme",
            language: "en",
            name: "This is my sdfsdf.",
          })
        }
      >
        Create list
      </button>
    </div>
    {listId && <div className="">listId: {listId.list_id}</div>}
  </>
);

export default CreateList;
