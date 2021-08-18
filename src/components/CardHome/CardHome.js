import React from 'react';
import Formula from '../../assets/formula.png'
import { Container, Img, H2, CardButton } from './styled';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { goToHipotenusaPage, goToPrimeiroCatetoPage, goToSegundoCatetoPage } from '../../Route/coordinator';

const CardHome = () => {
  const history = useHistory();
  return (
    <Container>

      <H2>Clique sobre o nome que deseja encontrar o valor:</H2>

      <Img src={Formula} />

      <CardButton>
        <Button className='hipotenusa'
          onClick={() => goToHipotenusaPage(history)}>
          Hipotenusa (a²)</Button>
        <Button className='cateto1'
          onClick={() => goToPrimeiroCatetoPage(history)}>
          Cateto 1 (b²)</Button>
        <Button className="cateto2"
          onClick={() => goToSegundoCatetoPage(history)}>
          Cateto 2 (c²)</Button>
      </CardButton>




    </Container>
  );
}
export default CardHome