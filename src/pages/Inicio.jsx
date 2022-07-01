import React from 'react';
import foto from '../assets/img/foto-giro.png';
import { Button } from '../components/Button';

export const Inicio = () => {
  return (
    <>
      <section className="relative min-h-70vh bg-hero ">
        <div className="sm:container md:flex justify-between">
          <div className="flex justify-center items-center md:items-start flex-col z-20 absolute  md:static ">
            <h1 className="font-bold text-h1 mb-6 mt-12 lg:w-387 text-center md:text-left">
              PREPÁRATE PARA INGRESAR A LAS ESCUELAS DE LAS FF.AA O PNP
            </h1>
            <Button text="inscribete" />
          </div>
          <img
            src={foto}
            alt=""
            className="absolute  mx-auto md:mr-0 drop-shadow-heroxl z-10 opacity-40 max-h-full bottom-0 inset-x-0 md:static md:opacity-100"
          />
        </div>
      </section>
    </>
  );
};
