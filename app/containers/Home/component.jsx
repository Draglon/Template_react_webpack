import React from 'react';

const Home = ({ createList, listId }) => {
  console.log(listId);
  return (
    <section className="section">
      <div className="wrapper">
        <h2 className="section__title">Home page</h2>

        <div className="">
          <button
            type="button"
            className="btn btn-primary btn--small"
            onClick={() =>
              createList({
                name: 'This is m 123433',
                description: 'Just an asdas 1212434',
                language: 'en',
              })
            }
          >
            Create list
          </button>
        </div>

        <div className="">listId: {listId ? listId.list_id : null}</div>
      </div>
    </section>
  );
};

export default Home;
