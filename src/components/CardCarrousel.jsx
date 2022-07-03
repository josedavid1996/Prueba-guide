import React from 'react';

export const CardCarrousel = ({ parrafo, nombre, departamento, img }) => {
  return (
    <>
      <div className="card-carrousel w-276 h-264 bg-color-white2 radio-23 px-29 pt-34 pb-15  flex flex-col justify-between md:w-290 md:h-297">
        <p className="font-normal text-13 leading-20 text-center md:text-sm">
          {parrafo}
        </p>
        <div className="avatar-text flex items-center justify-between">
          <img className="w-16 h-16 md:w-71 md:h-71" src={img} alt={nombre} />
          <div className="group-text">
            <h5 className="text-xs md:text-sm">{nombre}</h5>
            <span className="text-xs md:text-sm">{departamento}</span>
          </div>
        </div>
        <div className="group-icon flex self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="37"
            fill="currentColor"
            className="bi bi-star-fill md:w-40 md:h-40"
            viewBox="0 0 16 16"
          >
            <path
              fill="#FFC635"
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="37"
            fill="currentColor"
            className="bi bi-star-fill md:w-40 md:h-40"
            viewBox="0 0 16 16"
          >
            <path
              fill="#FFC635"
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="37"
            fill="currentColor"
            className="bi bi-star-fill md:w-40 md:h-40"
            viewBox="0 0 16 16"
          >
            <path
              fill="#FFC635"
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="37"
            fill="currentColor"
            className="bi bi-star-fill md:w-40 md:h-40"
            viewBox="0 0 16 16"
          >
            <path
              fill="#FFC635"
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="37"
            fill="currentColor"
            className="bi bi-star-fill md:w-40 md:h-40"
            viewBox="0 0 16 16"
          >
            <path
              fill="#FFC635"
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
