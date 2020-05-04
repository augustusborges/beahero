import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Casos from './paginas/casos';
import Detalhes from './paginas/detalhes';

const AppStack = createStackNavigator();

export default function Rotas(){
    return(
        <NavigationContainer>
            <AppStack.Navigation screenOptions={{headerShown:false}}>
               <AppStack.Screen name='Caso' component={Casos} /> 
               <AppStack.Screen name='Detalhes' component={Detalhes}/> 
            </AppStack.Navigation>
        </NavigationContainer>
    )
}