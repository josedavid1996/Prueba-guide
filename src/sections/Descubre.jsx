import React, { useEffect, useState } from 'react';

import WOW from 'wowjs';

import oficial1 from '../assets/img/oficial-1.png';
import oficial2 from '../assets/img/oficial-2.svg';
import oficial3 from '../assets/img/oficial-3.png';
import oficial4 from '../assets/img/oficial-4.png';

import subOficial1 from '../assets/img/suboficial-1.png';
import subOficial2 from '../assets/img/suboficial-2.png';
import subOficial3 from '../assets/img/suboficial-3.png';
import subOficial4 from '../assets/img/suboficial-4.png';

import beca1 from '../assets/img/beca-1.png';
import beca2 from '../assets/img/beca-2.png';

export const Descubre = () => {
  const [imgOficial, setImgOficial] = useState({
    oficial1: true,
    oficial2: true,
    oficial3: true,
    oficial4: true,
  });

  const [buttonActiveOficial, setButtonActiveOficial] = useState(false);
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  const handleClickImage = (id) => {
    for (let img in imgOficial) {
      if (id === img) {
        setImgOficial({ ...imgOficial, [id]: true });
        setButtonActiveOficial(true);
        console.log(id);
      } else {
        setImgOficial({ ...imgOficial, [img]: false });
      }
    }
  };

  return (
    <>
      <div className="pt-7 lg:pt-52 bg-hero" id="descubre">
        <h2 className="text-center font-bold text-title-h2-sm mb-25 md:text-md-h1 wow animate__animated animate__bounceInLeft">
          ¿Descubre lo que te enseñamos?
        </h2>
        <p className="text-center font-medium text-13 max-w-703 mx-5 md:mx-auto md:text-lg  mb-25 wow animate__animated animate__bounceInRight">
          Conoce más sobre nuestros <span className="font-bold">horarios</span>,
          las
          <span className="font-bold"> asignaturas</span> que dictaremos y los
          pasos para
          <span className="font-bold"> matricularte </span>
          descargando el <span className="font-bold">temario</span> de la
          Escuela a donde desees postular.
        </p>
        <div className="banner-container">
          <div className="cards-oficial max-w-940 mx-auto flex flex-col items-center md:flex-row md:flex-wrap justify-between ">
            {/*========= CARD1 ===========*/}
            <div className="card-oficial w-275 h-390 py-7 radio-23 shadow-oficial flex flex-col items-center justify-center mb-34 bg-color-white2 wow animate__animated animate__bounceInUp">
              <h3 className="text-center font-bold text-30 mb-25 ">Oficial</h3>
              <div className="group-img grid grid-cols-2 gap-y-5">
                <img
                  className={`mx-auto  cursor-pointer ${
                    imgOficial.oficial1 ? '' : 'gris-img'
                  }`}
                  src={oficial1}
                  alt="oficial1"
                  onClick={() => {
                    handleClickImage('oficial1');
                  }}
                />
                <img
                  className={`mx-auto  cursor-pointer ${
                    imgOficial.oficial2 ? '' : 'gris-img'
                  }`}
                  src={oficial2}
                  alt="oficial2"
                  onClick={() => {
                    handleClickImage('oficial2');
                  }}
                />
                <img
                  className={`mx-auto  cursor-pointer ${
                    imgOficial.oficial3 ? '' : 'gris-img'
                  }`}
                  src={oficial3}
                  alt="oficial3"
                />
                <img
                  className={`mx-auto  cursor-pointer ${
                    imgOficial.oficial4 ? '' : 'gris-img'
                  }`}
                  src={oficial4}
                  alt="oficial4"
                />
              </div>
              <button
                type="button"
                className={
                  buttonActiveOficial ? 'button-active' : 'button-noactive '
                }
              >
                Descargar temario
              </button>
            </div>
            {/*=========================  */}

            {/*========= CARD2 ===========*/}
            <div className="card-oficial w-275 h-390 py-7 radio-23 shadow-oficial flex flex-col items-center justify-center mb-34 bg-color-white2 wow animate__animated animate__bounceInUp">
              <h3 className="text-center font-bold text-30 mb-25 ">
                Sub Oficiales
              </h3>
              <div className="group-img grid grid-cols-2 gap-y-5 gap-x-7">
                <img className="mx-auto" src={subOficial1} alt="subOficial1" />
                <img className="mx-auto" src={subOficial2} alt="subOficial2" />
                <img className="mx-auto" src={subOficial3} alt="subOficial3" />
                <img className="mx-auto" src={subOficial4} alt="subOficial4" />
              </div>
              <button
                type="button"
                className="w-139 text-lg font-bold text-color-black border border-color-black  radio-14 p-2 mt-18"
              >
                Descargar temario
              </button>
            </div>

            {/*=========================  */}

            {/*========= CARD3 ===========*/}
            <div className="card-oficial w-275 h-390 py-7 radio-23 shadow-oficial flex flex-col items-center justify-center mb-34 bg-color-white2 wow animate__animated animate__bounceInUp">
              <h3 className="text-center font-bold text-28 mb-25 ">
                BECA 18 / IESTFFAA
              </h3>
              <div className="group-img grid grid-cols-1 gap-y-5 gap-x-7">
                <img className="mx-auto" src={beca1} alt="beca1" />
                <img className="mx-auto" src={beca2} alt="beca2" />
              </div>
              <button
                type="button"
                className="w-139 text-lg font-bold text-color-black border border-color-black  radio-14 p-2 mt-18"
              >
                Descargar temario
              </button>
            </div>
          </div>
        </div>

        <div className="preci flex justify-center flex-col items-center text-color-white2 wow animate__animated animate__bounceInUp">
          {/* ARROW TOP */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            fill="currentColor"
            className="bi bi-caret-down-fill lg:hidden"
            viewBox="0 0 16 16"
          >
            <path
              fill="#0205C7"
              d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
            />
          </svg>
          {/* ======== */}

          <div className="flex items-center">
            {/* ARROWS LEFT */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="currentColor"
              className="bi bi-caret-down-fill lg:block rotate-270 hidden lg-block"
              viewBox="0 0 16 16"
            >
              <path
                fill="#0205C7"
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="currentColor"
              className="bi bi-caret-down-fill lg:block rotate-270 hidden lg-block"
              viewBox="0 0 16 16"
            >
              <path
                fill="#0205C7"
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
              />
            </svg>
            {/* ======== */}

            <div className="card-preci w-275 bg-header radio-24 flex flex-col items-center py-1">
              <p className="text-center text-xl font-medium">Desde</p>
              <div className="text-preci flex ">
                <span className="text-2xl font-medium">s/</span>
                <h3 className="text-8xl font-bold">450</h3>
              </div>
              <p className="text-center text-xl font-medium">el ciclo</p>
            </div>
            {/* ARROWS RIGTH */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="currentColor"
              className="bi bi-caret-down-fill lg:block rotate-90 hidden lg-block"
              viewBox="0 0 16 16"
            >
              <path
                fill="#0205C7"
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="currentColor"
              className="bi bi-caret-down-fill lg:block rotate-90 hidden lg-block"
              viewBox="0 0 16 16"
            >
              <path
                fill="#0205C7"
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
              />
            </svg>
            {/* ======== */}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            fill="currentColor"
            className="bi bi-caret-down-fill rotate-180 lg:hidden"
            viewBox="0 0 16 16"
          >
            <path
              fill="#0205C7"
              d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
