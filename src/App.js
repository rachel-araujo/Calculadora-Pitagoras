import React from 'react';
import Router from './Route/Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container, H1 } from './styled';


const App = () => {

  return (
    <Container>

      <Header />
      <H1>CalcTágoras</H1>
      <Router />
      <Footer />

    </Container>

  );
}

export default App

