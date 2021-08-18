import React, { useState } from 'react';
import { Img, Container } from './styled';
import CatetoC from '../../assets/catetoC.png'
import useForm from "../../hooks/useForm";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function CardSegundoCateto() {
  const { form, onChange, cleanFields } = useForm({ h: "", c1: "" });
  const [segundoCateto, setSegundoCateto] = useState([])

  //função que faz o cálculo do segundo cateto, armazenando seus valores no estado
  const calculaSegundoCateto = (event) => {
    event.preventDefault();

    //Este comando eleva ao quadrado os valores digitados pelo usuário e calcula a raiz da soma dos dois
    setSegundoCateto(Math.sqrt(Math.pow(form.h, 2) - Math.pow(form.c1, 2)))
    cleanFields();
  }

  return (
    <Container>
      <Img src={CatetoC} />
      <form className='form' onSubmit={calculaSegundoCateto}>
        <TextField
          name="h"
          value={form.h}
          onChange={onChange}
          placeholder={"Valor da hipotenusa: a"}
          required
          type="number"
          variant="outlined"
        />

        <TextField
          name="c1"
          value={form.c1}
          onChange={onChange}
          placeholder={"Valor do cateto: b"}
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

      <h1>c = {segundoCateto}</h1>

    </Container>
  );
}