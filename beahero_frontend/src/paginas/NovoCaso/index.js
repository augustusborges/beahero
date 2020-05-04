import React, {Component} from 'react';
import './styles.css'

import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi' 
import logoImg from '../../assets/logo.svg';

class NovoCaso extends Component{
    render(){
        return(
            <div className="novo-caso-container">
            <div className="content">
                <section>
                   <img src={logoImg} alt="Be A Hero"/>

                   <h1>Cadastrar Novo Caso</h1>
                   <p>
                       Descreva o caso detalhadamento para encontrar um herói para resovler isso.
                   </p>
                   <Link className="back-link" to="/perfil">
                       <FiArrowLeft size={16} color='#F02041'/>
                       Voltar para Home
                   </Link>
                </section>
                <form>
                   <input placeholder="Titulo do caso" />
                   <textarea placeholder="Descrição"/>
                   <input placeholder="Valor em reais"/>

                   <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div> 
        )
    }
} 

export default NovoCaso;