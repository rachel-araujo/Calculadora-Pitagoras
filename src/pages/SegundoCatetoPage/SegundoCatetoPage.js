import React from 'react';
import { Container, H2 } from './styled';
import CardSegundoCateto from '../../components/CardSegundoCateto/CardSegundoCateto';
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';


const SegundoCatetoPage = () => {
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
                <H2>Encontre o valor do Cateto (c):</H2>
                <CardSegundoCateto />

            </Container>




        </>
    )

}
export default SegundoCatetoPage