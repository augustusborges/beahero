import React, {Component} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './paginas/Login';
import Registro from './paginas/Registro';
import Perfil from './paginas/Perfil';
import NovoCaso from './paginas/NovoCaso'

class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                  <Route path="/" exact component={Login} /> 
                  <Route path="/registro" component={Registro} /> 
                  <Route path="/perfil" component={Perfil} /> 
                  <Route path="/casos/novo" component={NovoCaso} /> 
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;