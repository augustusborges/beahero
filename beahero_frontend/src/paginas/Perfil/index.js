import React, {useEffect, useState} from 'react';
import {FiPower, FiTrash2} from 'react-icons/fi' 
import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';

export default function Perfil(){
    const [casos, setCasos] = useState([]);
    const idOng = localStorage.getItem('ongId');
    const nomeOng = localStorage.getItem('ongNome');

    useEffect(()=>{
        api.get('/casos', {
            header:{Authorization:idOng}
        }).then(resposta =>{
            setCasos(resposta.data);
        })
        
    }, [idOng]);
        return(
            <div className="profile-container">
                <header>
                    <img src={logoImg} alt="Be A Hero"/>
                    <span>
                        bem vinda, {nomeOng}
                    </span>

                    <Link className="button" to="/casos/novo">
                        Cadastrar novo caso
                    </Link>

                    <button type="button">
                        <FiPower size={18} color="#F02041"/>
                    </button>
                </header>
                <h1>Casos Cadastrados</h1>
                <ul>
                    {casos.map(caso=>(
                        <li key={caso.id}>
                            <strong>Caso:</strong>
                            <p>{caso.titulo}</p>

                            <strong>Descricao:</strong>
                            <p>{caso.descricao}</p>

                            <strong>Valor:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(caso.valor)}</p>

                            <button type="button">
                                <FiTrash2 size={20} color="#A8A8B3"/>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

        );
}
