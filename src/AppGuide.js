import { ButtonWSP } from './components/ButtonWSP';
import { Navlink } from './components/Navlink';
import { Inicio, Nosotros, Quienes } from './sections';

function AppGuide() {
  return (
    <>
      <Navlink />
      <Inicio />
      <Nosotros />
      <Quienes />
      <ButtonWSP />
    </>
  );
}

export default AppGuide;
