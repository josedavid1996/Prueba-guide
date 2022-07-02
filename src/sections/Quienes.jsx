import React from 'react';

export const Quienes = () => {
  return (
    <div className="mt-7 ">
      <h2 className="text-center font-bold text-title-h2-sm mb-62">
        ¿A quienés nos dirigimos?
      </h2>
      <div className="card-circle1 relative">
        <div className="flip-face absolute  w-150 h-150 bg-color-purple radios bg-image-civil bg-contain bg-no-repeat bg-center "></div>
        <div className="flip-face absolute  w-150 h-150 bg-color-purple radios flex justify-center items-center text-center text-color-white2 px-3 opacity-0  transition duration-1000 ease-out hover:opacity-100 cursor-pointer">
          <p className="font-normal text-sm-button">
            Jóvenes que deseen postular a las Escuelas de Oficiales y Sub
            oficiales (FF. AA) SERVICIO MILITAR
          </p>
        </div>
      </div>
    </div>
  );
};
