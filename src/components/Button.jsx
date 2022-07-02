import React from 'react';

export const Button = ({ text, fz, fzSm }) => {
  return (
    <button
      type="button"
      className={`rounded-full text-${fz} sm:text-${fzSm} font-semibold uppercase bg-color-btn text-color-white2 p-2 radio-btn `}
    >
      {text}
    </button>
  );
};
