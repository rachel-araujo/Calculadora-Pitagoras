import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage.js';
import { HipotenusaPage } from '../pages/HipotenusaPage/HipotenusaPage.js';
import { PrimeiroCatetoPage } from '../pages/PrimeiroCatetoPage/PrimeiroCatetoPage.js';
import { SegundoCatetoPage } from '../pages/SegundoCatetoPage/SegundoCatetoPage.js';

export const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/hipotenusa'} component={HipotenusaPage} />
          <Route exact path={'/primeiroCateto'} component={PrimeiroCatetoPage} />
          <Route exact path={'/segundoCatetoPage'} component={SegundoCatetoPage} />
        </Switch>
      </BrowserRouter>
  
    );
  }