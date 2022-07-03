import { ButtonWSP } from './components/ButtonWSP';
import { Footer } from './components/Footer';
import { Navlink } from './components/Navlink';
import {
  AulaVirtual,
  Descubre,
  Inicio,
  Integrantes,
  Nosotros,
  Quienes,
} from './sections';

function AppGuide() {
  return (
    <>
      <Navlink />
      <Inicio />
      <Nosotros />
      <Quienes />
      <Descubre />
      <AulaVirtual />
      <Integrantes />
      <Footer />
      <ButtonWSP />
    </>
  );
}

export default AppGuide;
