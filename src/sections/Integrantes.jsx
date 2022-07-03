import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import imgcarrousel1 from '../assets/img/img-carruosel1.png';
import imgcarrousel2 from '../assets/img/img-carruosel2.png';
import imgcarrousel3 from '../assets/img/img-carruosel3.png';

import { CardCarrousel } from '../components/CardCarrousel';

export const Integrantes = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', color: '#fff' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', color: '#fff' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: 'slider variable-width w-78% mx-auto md:w-95% md:px-2',
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-hero pt-36 pb-8  md:pb-73 md:pt-50 " id="integrantes">
        <h2 className="text-center font-bold text-title-h2-sm md:text-md-h1 wow animate__animated animate__fadeInLeft ">
          Conoce a nuestros integrantes
        </h2>

        <div className="cards-carrousel max-w-940 mx-auto overflow-hidden ">
          <Slider {...settings}>
            <CardCarrousel
              parrafo="Gracias a GUIDE logré mi ingreso.
Lo que más me gustó fueron los profesores y las clases grabadas."
              nombre="Erick Arancibia"
              departamento="Ingresante ESOFA 2021"
              img={imgcarrousel1}
            />
            <CardCarrousel
              parrafo="Comentario 2."
              nombre="Erick Arancibia"
              departamento="Ingresante ESOFA 2021"
              img={imgcarrousel2}
            />
            <CardCarrousel
              parrafo="Comentario 3."
              nombre="Erick Arancibia"
              departamento="Ingresante ESOFA 2021"
              img={imgcarrousel3}
            />
          </Slider>
        </div>
      </div>
    </>
  );
};
