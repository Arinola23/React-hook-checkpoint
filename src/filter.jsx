import React from 'react';

const Filter = ({ handleTitleChange, handleRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title..."
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating..."
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
