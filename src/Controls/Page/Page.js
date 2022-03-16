import React from 'react';

export default function Page({ setPage, page }) {
  const nextPageHandler = () => {
    if (page > 1) {
      return setPage((prevState) => --prevState);
    } else {
      return;
    }
  };
  return (
    <div>
      <button onClick={nextPageHandler}> {'<'} </button>
      <button onClick={() => setPage((prevState) => ++prevState)}> {'>'} </button>
    </div>
  );
}
