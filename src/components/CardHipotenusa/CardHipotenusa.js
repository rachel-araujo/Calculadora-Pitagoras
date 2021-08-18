import React, { useState } from 'react';
import { Img, Container } from './styled';
import Hipotenusa from '../../assets/hipotenusa.png'
import useForm from "../../hooks/useForm";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'



export default function CardHipotenusa() {
  const { form, onChange, cleanFields } = useForm({ c1: "", c2: "" });
  const [hipotenusa, setHipotenusa] = useState([])


  //função que faz o cálculo da hipotenusa, armazenando seus valores no estado
  const calculaHipotenusa = (event) => {
    event.preventDefault();

    //Este comando eleva ao quadrado os valores  digitados pelo usuário  e calcula a raiz da soma dos dois
    setHipotenusa(Math.sqrt(Math.pow(form.c1, 2) + Math.pow(form.c2, 2)))

    console.log(hipotenusa);


    cleanFields();
  }


  return (
    <Container>
      <Img src={Hipotenusa} />
      <form className='form' onSubmit={calculaHipotenusa}>
        <TextField
          name="c1"
          value={form.c1}
          onChange={onChange}
          placeholder={"Valor do cateto: b"}
          required
          type="number"
          variant="outlined"
        />

        <TextField
          name="c2"
          value={form.c2}
          onChange={onChange}
          placeholder={"Valor do cateto: c"}
          required
          variant="outlined"
          type="number"
        />

        <Button className='button'
          color={'primary'}
          type={'submit'}
          variant="outlined"

        >Calcular
        </Button>
      </form>

      <h1>a = {hipotenusa}</h1>

    </Container>
  );
}

