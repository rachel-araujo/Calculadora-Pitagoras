import React, { useState } from 'react';
import { Img, Container } from './styled';
import CatetoB from '../../assets/catetoB.png'
import useForm from "../../hooks/useForm";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function CardPrimeiroCateto() {
  const { form, onChange, cleanFields } = useForm({ h: "", c2: "" });
  const [primeiroCateto, setPrimeiroCateto] = useState([])

  //função que faz o cálculo do primeiro cateto, armazenando seus valores no estado
  const calculaPrimeiroCateto = (event) => {
    event.preventDefault();

    //Este comando eleva ao quadrado os valores  digitados pelo usuário  e calcula a raiz da soma dos dois
    setPrimeiroCateto(Math.sqrt(Math.pow(form.h, 2) - Math.pow(form.c2, 2)))


    console.log(primeiroCateto);


    cleanFields();
  }

  return (
    <Container>
      <Img src={CatetoB} />
      <form className='form' onSubmit={calculaPrimeiroCateto}>
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

      <h1>b = {primeiroCateto}</h1>

    </Container>
  );
}