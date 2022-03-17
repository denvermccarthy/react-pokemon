import React from 'react';

export default function Page({ setPage, page, count }) {
  const maxPages = () => Math.ceil(count / 10);
  const prevPageHandler = () => {
    if (page > 1) {
      return setPage((prevState) => --prevState);
    } else {
      return;
    }
  };
  const nextPageHandler = () => {
    if (maxPages() <= page) {
      return;
    } else {
      return setPage((prevState) => ++prevState);
    }
  };

  return (
    <div>
      <button onClick={prevPageHandler}> {'<'} </button>
      <button onClick={nextPageHandler}> {'>'} </button>
      <p>{`${page} / ${maxPages()}`}</p>
    </div>
  );
}
