import React, { useEffect } from 'react';

import WOW from 'wowjs';

export const AulaVirtual = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      <div className="pt-7 lg:pt-52 bg-hero" id="aula">
        <h2 className="text-center font-bold text-title-h2-sm mb-25 md:text-md-h1 wow animate__animated animate__bounceInLeft">
          Explora nuestra aula virtual
        </h2>

        <div className="max-w-940 mx-auto justify-between cards-aula flex flex-col items-center">
          {/* CARD1 */}
          <div className="card-aula bg-color-white2 w-321  radio-23 shadow-oficial px-4 py-7 mb-38 md:w-570 md:flex md:px-6 md:py-10 wow animate__animated animate__fadeInRight">
            <div className="card-aula__group-text">
              <h5 className="font-semibold text-lg md:text-xl text-center mb-3 md:mb-6">
                Clases en vivo/ grabadas
              </h5>
              <p className="font-normal text-sm mb-6 md:text-lg">
                Accede a clases en vivo todos los días; si no puedes conectarte
                revisa tus clases grabadas.
              </p>
            </div>
            <div className="card-aula__img self-end">
              <span className="w-full md:w-255 h-28 md:h-155 bg-hero block radio-7"></span>
            </div>
          </div>
          {/* ================ */}
          {/* CARD2 */}
          <div className="card-aula bg-color-white2 w-321  radio-23 shadow-oficial px-4 py-7 mb-38 md:w-570 md:flex md:px-6 md:py-10 md:flex-row-reverse text-right wow animate__animated animate__fadeInLeft">
            <div className="card-aula__group-text">
              <h5 className="font-semibold text-lg md:text-xl text-center mb-3 md:mb-6">
                Materiales de Estudio
              </h5>
              <p className="font-normal text-sm mb-6 md:text-lg">
                Descarga diapositivas, resúmenes, separatas y libros (acorde al
                prospecto de tu Escuela) y refuerza lo aprendido en clase.
              </p>
            </div>
            <div className="card-aula__img self-end">
              <span className="w-full md:w-255 h-28 md:h-155 bg-hero block radio-7"></span>
            </div>
          </div>
          {/* ================ */}
          {/* CARD3 */}
          <div className="card-aula bg-color-white2 w-321  radio-23 shadow-oficial px-4 py-7 mb-38 md:w-570 md:flex md:px-6 md:py-10 wow animate__animated animate__fadeInLeft">
            <div className="card-aula__group-text">
              <h5 className="font-semibold text-lg md:text-xl text-center mb-3 md:mb-6">
                Simulacros
              </h5>
              <p className="font-normal text-sm mb-6 md:text-lg">
                Practica con evaluaciones semanales y mensuales para una mejor
                preparación.
              </p>
            </div>
            <div className="card-aula__img self-end">
              <span className="w-full md:w-255 h-28 md:h-155 bg-hero block radio-7"></span>
            </div>
          </div>
          {/* ================ */}
        </div>
      </div>
    </>
  );
};
