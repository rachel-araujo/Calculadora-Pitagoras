import React from 'react';
import { Container, H2 } from './styled';
import CardHipotenusa from '../../components/CardHipotenusa/CardHipotenusa';
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';




const HipotenusaPage = () => {
    const history = useHistory();

    const goToHomePage = () => {
        history.push("/")
    }


    return (

        <Container>
            <Button
                color={'primary'}
                onClick={goToHomePage}
                variant="outlined"
            >Página Inicial
            </Button>
            <H2>Encontre o valor da hipotenusa (a):</H2>

            <CardHipotenusa />


        </Container>


    )

}
export default HipotenusaPage