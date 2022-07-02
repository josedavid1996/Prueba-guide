import React from 'react';
import foto from '../assets/img/foto-giro.png';
import imageInicio from '../assets/img/image_inicio.png';
import { Button } from '../components/Button';

export const Inicio = () => {
  return (
    <>
      {/*======== HERO ==========*/}
      <section className="relative min-h-63vh bg-hero  mb-75">
        <div className="max-w-940 mx-auto md:flex justify-between">
          <div className="flex justify-center items-center md:items-start flex-col z-20 absolute  md:static mx-4 ">
            <h1 className="font-bold text-h1 mb-6 mt-12 lg:w-387 text-center md:text-left ms-hero:text-md-h1">
              PREPÁRATE PARA INGRESAR A LAS ESCUELAS DE LAS FF.AA O PNP
            </h1>

            <button
              type="button"
              className="text-button-lg lg:text-4xl font-semibold bg-color-btn text-color-white2 p-2 radio-btn lg:px-3"
            >
              INSCRIBETE
            </button>
          </div>
          <img
            src={foto}
            alt=""
            className="absolute  mx-auto md:mr-0 drop-shadow-heroxl z-10 opacity-40 max-h-full bottom-0 inset-x-0 md:static md:opacity-100"
          />
        </div>
      </section>
      {/* ======================== */}

      {/* CONTENT TEXT */}
      <section className="container flex flex-col   mt-34 px-10  justify-between md:items-center md:flex-row mb-75 md:mb-118 z-40">
        <div className="text-content__group-text mb-8 md:w-2/4 md:mr-92">
          <h2 className="font-bold text-title-inicio leading-line-inicio mb-4 text-center md:text-md-h1">
            Acerca de GUIDE
          </h2>
          <p className="text-sm font-normal md:text-base">
            Somos una academia de preparación exclusiva para jóvenes que están
            próximos a postular a una escuela de Oficiales, Sub Oficiales, Beca
            18 y el IESTFFAA. Contamos con la mejor plana de docentes e
            instructores con amplia experiencia en el uso de herramientas
            digitales, además de tener un moderno método de enseñanza que
            garantizarán resultados positivos.
          </p>
        </div>
        <div className="text-content__img flex flex-col items-center">
          <img src={imageInicio} alt="imageInicio" className="" />
          <div className="flex mt-9-circle">
            <span className="circle"></span>
            <span className="circle-opacity"></span>
            <span className="circle-opacity"></span>
            <span className="circle-opacity"></span>
            <span className="circle-opacity"></span>
            <span className="circle-opacity"></span>
            <span className="circle-opacity"></span>
            <span className="circle-opacity"></span>
          </div>
        </div>
      </section>

      {/* ======================== */}
      <span className="bg-color-btn fixed bottom-2 right-2 sm:hidden p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-chat-left-fill "
          viewBox="0 0 16 16"
        >
          <path
            fill="#fff"
            d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
          />
        </svg>
      </span>
    </>
  );
};
