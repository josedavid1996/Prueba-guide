import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navlink } from '../components/Navlink';
import {
  AulaVirtual,
  Descubre,
  Inicio,
  Integrantes,
  Nosotros,
  Quienes,
} from '../pages';

export const AppRouterGuide = () => {
  return (
    <>
      <BrowserRouter>
        <Navlink />
        <Routes>
          <Route path="inicio" element={<Inicio />} />
          <Route path="aula" element={<AulaVirtual />} />
          <Route path="descubre" element={<Descubre />} />
          <Route path="integrante" element={<Integrantes />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="quienes" element={<Quienes />} />
          <Route path="/" element={<Navigate to="/inicio" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
