import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import HipotenusaPage from '../pages/HipotenusaPage/HipotenusaPage';
import PrimeiroCatetoPage from '../pages/PrimeiroCatetoPage/PrimeiroCatetoPage';
import SegundoCatetoPage from '../pages/SegundoCatetoPage/SegundoCatetoPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route exact path='/hipotenusa'>
          <HipotenusaPage />
        </Route>

        <Route exact path='/primeiroCateto'>
          <PrimeiroCatetoPage />
        </Route>

        <Route exact path='/segundoCateto'>
          <SegundoCatetoPage />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}
export default Router;