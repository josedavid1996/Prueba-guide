import React from 'react';
import logo from '../assets/img/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-gray text-color-white2 pt-25 px-10 pb-14 ">
      <div className="footer-container max-w-940 mx-auto sm:flex sm:flex-wrap sm:justify-between">
        <div className="conocenos flex flex-row-reverse justify-between items-start sm:flex-row">
          <img src={logo} alt="logo" className="sm:mr-16" />
          <div className="conocenos__group-text">
            <h5 className="title-footer sm:text-lg">Conócenos</h5>
            <ul className="">
              <li>
                <a className="text-footer sm:text-sm" href="/">
                  Aula Virtual
                </a>
              </li>
              <li>
                <a className="text-footer sm:text-sm" href="/">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contacto mb-14">
          <h5 className="title-footer sm:text-lg mb-14">Contacto</h5>
          <div className="contact__group-text-icon">
            <div className="contacto__text-icon flex mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill mr-3"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#fff"
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                />
              </svg>
              <p className="text-footer sm:text-sm">
                Alfredo Benavides 1944, piso 09, Miraflores 15048.
              </p>
            </div>
            <div className="contacto__text-icon flex mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone-fill mr-3"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  fill="#fff"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              <p className="text-footer sm:text-sm">938 561 890</p>
            </div>
            <div className="contacto__text-icon flex mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope-open-fill mr-3"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#fff"
                  d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z"
                />
              </svg>
              <p className="text-footer sm:text-sm">info@guideasesores.com</p>
            </div>
            <div
              className="contacto__text-icon flex 
          mb-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock-fill mr-3"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#fff"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                />
              </svg>
              <p className="text-footer sm:text-sm">10 am a 7:30 pm</p>
            </div>
          </div>
        </div>
        <div className="redes">
          <h5 className="title-footer sm:text-lg mb-14">Redes</h5>
          <div className="redes__icons flex items-start ">
            <svg
              width="14"
              height="27"
              viewBox="0 0 19 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4"
            >
              <path
                d="M19 0.271822V6.2519H15.5475C14.2867 6.2519 13.4363 6.52372 12.9965 7.06737C12.5567 7.61101 12.3368 8.42648 12.3368 9.51376V13.795H18.7801L17.9225 20.4999H12.3368V37.6926H5.60764V20.4999H0V13.795H5.60764V8.85686C5.60764 6.04804 6.36998 3.86969 7.89468 2.32181C9.41937 0.773937 11.4498 0 13.9861 0C16.1412 0 17.8125 0.0906073 19 0.271822Z"
                fill="white"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28.89"
              height="28.89"
              fill="currentColor"
              className="bi bi-instagram mr-4"
              viewBox="0 0 16 16"
            >
              <path
                fill="#fff"
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="26.68"
              fill="currentColor"
              class="bi bi-youtube"
              viewBox="0 0 16 16"
            >
              <path
                fill="#fff"
                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};
