import React from 'react';

export const Nosotros = () => {
  return (
    <>
      <div className="bg-hero pt-36 pb-8  md:pb-73 md:pt-50 ">
        <h2 className="text-center font-bold text-title-h2-sm ">
          ¿Por qué nosostros?
        </h2>

        <div className="mb-10 flex flex-col flex-wrap sm:flex-row sm:items-start justify-between max-w-940 mx-auto ">
          <div className="card text-center mt-6 sm:mt-14 sm:flex-1">
            <span className="font-bold text-7xl text-header md:text-100">
              +5
            </span>
            <p className="font-medium text-lg md:text-2xl ">
              Más de 5 años de experiencia.
            </p>
          </div>
          <div className="card text-center mt-10 sm:mt-14 sm:flex-1">
            <span className="font-bold text-7xl text-header md:text-100">
              50
            </span>
            <p className="font-medium text-lg  md:text-2xl">
              profesores e instructores.
            </p>
          </div>
          <div className="card text-center mt-10 sm:mt-14 sm:flex-1">
            <span className="font-bold text-7xl text-header md:text-100">
              90%
            </span>
            <p className="font-medium text-lg md:text-2xl">
              de nuestros estudiantes alcanzan una vacante.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
