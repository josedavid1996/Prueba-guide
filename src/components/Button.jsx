import React from 'react';

export const Button = ({ text }) => {
  return (
    <button
      type="button"
      className="rounded-full text-sm sm:text-2xl font-semibold uppercase bg-color-btn text-color-white2 p-2"
    >
      {text}
    </button>
  );
};
