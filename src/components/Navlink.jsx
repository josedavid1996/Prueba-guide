import { useState } from 'react';
import logo from '../assets/img/logo.png';
import iconMenu from '../assets/img/icon-menu.svg';
import { Button } from './Button';

export const Navlink = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleClick = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <>
      <header className="bg-header py-4 relative z-50">
        <section className="max-w-940 mx-auto flex justify-between px-4  items-center relative sm:px-4 animate__animated animate__fadeInLeft">
          <img src={logo} alt="logo" className="w-50 h-46 sm:w-78 sm:h-73" />
          <div className="flex">
            <div className="header__button-text flex items-center flex-col mr-8">
              <p className="text-color-white2 font-semibold text-button  sm:text-sm-button leading-3 text-center pb-1 sm:pb-3  ">
                Antes de matricula obten una
              </p>
              <button
                type="button"
                className={`rounded-full text-sm md:text-2xl font-semibold bg-color-btn text-color-white2 p-2 radio-btn `}
              >
                CLASE GRATUITA
              </button>
            </div>
            <img
              src={iconMenu}
              alt="icon-menu"
              className="text-color-white2 bg-color-purple p-1.5 sm:px-9 py-3 box-content rounded-r-3xl cursor-pointer radio-6"
              onClick={handleClick}
            />
          </div>
          <nav
            className={`absolute top-20 right-0 bg-color-white2 opacity-90 w-full px-6 pt-9 pb-8 sm:w-295  ${
              activeMenu
                ? 'block animate__animated animate__fadeInRight'
                : 'hidden animate__animated  animate__fadeOutRight'
            } `}
          >
            <ul>
              <li>
                <a
                  href="/"
                  className="font-medium text-lg pt-2 sm:text-sm-link sm:line-link pb-2.5 border-b border-l-color-black block"
                  to="/inicio"
                >
                  Acerca de GUIDE
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-medium text-lg pt-2 pb-2.5 border-b border-l-color-black block sm:text-sm-link sm:line-link "
                  to="nosotros"
                >
                  ¿Por que nosotros
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-medium text-lg pt-2 pb-2.5 border-b border-l-color-black block sm:text-sm-link sm:line-link "
                  to="quienes"
                >
                  ¿A quienes nos dirigimos?
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-medium text-lg pt-2 pb-2.5 border-b border-l-color-black block sm:text-sm-link sm:line-link "
                  to="descubre"
                >
                  Descubre lo que te enseñamos
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-medium text-lg pt-2 pb-2.5 border-b border-l-color-black block sm:text-sm-link sm:line-link "
                  to="aula"
                >
                  Explora nuestra aula virtual
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-medium text-lg pt-2 pb-2.5 border- border-l-color-black block sm:text-sm-link sm:line-link "
                  to="integrante"
                >
                  Nuestros ingenieros
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
};
