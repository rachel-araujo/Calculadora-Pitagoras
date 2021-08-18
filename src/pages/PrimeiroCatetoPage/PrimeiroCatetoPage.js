import React from 'react';
import { Container, H2 } from './styled';
import CardPrimeiroCateto from '../../components/CardPrimeiroCateto/CardPrimeiroCateto';
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const PrimeiroCatetoPage = () => {
    const history = useHistory();

    const goToHomePage = () => {
        history.push("/")
    }


    return (
        <>

            <Container>
                <Button
                    color={'primary'}
                    onClick={goToHomePage}
                    variant="outlined"
                >Página Inicial
                </Button>
                <H2>Encontre o valor do Cateto (b):</H2>
                <CardPrimeiroCateto />

            </Container>



        </>
    )

}
export default PrimeiroCatetoPage