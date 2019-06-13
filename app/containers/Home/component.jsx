import React from 'react';

const Home = ({ createList }) => {
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
                "name": "This is my awesome test list.",
                "description": "Just an aweso",
                "language": "en"
              })
            }
          >
            Create list
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
