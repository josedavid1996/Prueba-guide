import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { Button } from './Button';

export const Navlink = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleClick = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <>
      <header className="bg-header py-3">
        <section className="container flex justify-between px-4  items-center relative sm:px-4">
          <img src={logo} alt="logo" className="w-50 h-46 sm:w-78 sm:h-73" />
          <div className="flex">
            <div className="header__button-text flex items-center flex-col mr-8">
              <p className="text-color-white2 font-semibold text-button  sm:text-sm-button leading-3 text-center pb-1 sm:pb-3  ">
                Antes de matricula obten una
              </p>
              <Button text="clase gratuita" fz="sm" fzSm="2xl" />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-list text-color-white2 bg-color-purple px-1.5 py-3 box-content rounded-r-3xl cursor-pointer"
              onClick={handleClick}
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <nav
            className={`absolute z-50 top-20 right-0 bg-color-white2 opacity-90 w-full px-6 pt-9 pb-8 sm:w-295  ${
              activeMenu ? 'block' : 'hidden'
            }`}
          >
            <ul>
              <li>
                <Link
                  className="font-medium text-lg pt-2 sm:text-sm-link sm:line-link pb-2.5 border-b border-l-color-black block"
                  to="/inicio"
                >
                  Acerca de GUIDE
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-lg pt-2 pb-2.5 border-b border-l-color-black block sm:text-sm-link sm:line-link "
                  to="nosotros"
                >
                  ¿Por que nosotros
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-lg pt-2 pb-2.5 border-b border-l-color-black block sm:text-sm-link sm:line-link "
                  to="quienes"
                >
                  ¿A quienes nos dirigimos?
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-lg pt-2 pb-2.5 border-b border-l-color-black block sm:text-sm-link sm:line-link "
                  to="descubre"
                >
                  Descubre lo que te enseñamos
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-lg pt-2 pb-2.5 border-b border-l-color-black block sm:text-sm-link sm:line-link "
                  to="aula"
                >
                  Explora nuestra aula virtual
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-lg pt-2 pb-2.5 border- border-l-color-black block sm:text-sm-link sm:line-link "
                  to="integrante"
                >
                  Nuestros ingenieros
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
};
