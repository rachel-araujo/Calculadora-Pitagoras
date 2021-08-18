import React from 'react';
import { H2, Texto, Container } from './styled';
import CardHome from '../../components/CardHome/CardHome';


const HomePage = () => {


    return (
        <Container>
            <H2>A forma online de resolver o Teorema de Pitágoras</H2>
            <Texto>O teorema de Pitágoras é uma relação matemática entre os comprimentos dos lados de qualquer triângulo retângulo.
                Por definição, a hipotenusa é o lado oposto ao ângulo reto, e os catetos são os dois lados que o formam.<br />
                <br /> Referência: <a href="https://pt.wikipedia.org/wiki/Teorema_de_Pit%C3%A1goras">encurtador.com.br/hszNS</a>
            </Texto>
            <CardHome />



        </Container>
    )

}
export default HomePage
