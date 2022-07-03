import React, { useEffect } from 'react';
import WOW from 'wowjs';

export const Quienes = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="mt-7 mb-62" id="quienes">
      <h2 className="text-center font-bold text-title-h2-sm mb-62 wow animate__animated animate__fadeInLeft">
        ¿A quienés nos dirigimos?
      </h2>
      <div className="cards-circle flex flex-col items-center md:flex-row justify-center wow animate__animated animate__fadeInRight">
        {/* CARD1-CIRCLE */}
        <div className="mb-44 md:mr-131">
          <div className="card-circle relative w-150 h-150 drop-shadow-shadowcircle mb-19 md:w-200 md:h-200">
            <div className="front card-circle__item  w-150 h-150 bg-color-purple radios bg-image-civil bg-contain bg-no-repeat bg-center "></div>
            <div className="back card-circle__item   w-150 h-150 bg-color-purple radios flex justify-center items-center text-center text-color-white2 px-3  cursor-pointer">
              <p className="font-normal text-sm-button">
                Jóvenes que deseen postular a las Escuelas de Oficiales y Sub
                oficiales (FF. AA) SERVICIO MILITAR
              </p>
            </div>
          </div>
          <h4 className="text-center font-medium text-lg md:text-2xl">
            Civiles
          </h4>
        </div>
        {/* ============= */}

        {/* CARD2-CIRCLE */}
        <div className="mb-44">
          <div className="card-circle relative w-150 h-150 drop-shadow-shadowcircle mb-19 md:w-200 md:h-200">
            <div className="front card-circle__item  w-150 h-150 bg-color-purple radios bg-image-militar bg-contain bg-no-repeat bg-position-c-b"></div>
            <div className="back card-circle__item   w-150 h-150 bg-color-purple radios flex justify-center items-center text-center text-color-white2 px-3  cursor-pointer">
              <p className="font-normal text-8.5">
                Si estás prestando servicio militar o eres Licenciado y quieres
                postular a una Escuela de Oficiales y Sub oficiales (FF. AA),
                tenemos descuentos exclusivos para ti, gracias a nuestro
                convenio con las FF. AA.
              </p>
            </div>
          </div>
          <h4 className="text-center font-medium text-lg md:text-2xl">
            Servicio Militar
          </h4>
        </div>
        {/* ============= */}
      </div>
    </div>
  );
};
