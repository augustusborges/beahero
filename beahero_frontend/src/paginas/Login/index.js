import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi' 
import {Link, useHistory} from 'react-router-dom';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';

export default function Login(){
    const [id, setId] = useState("");
    const history = useHistory();

    return(
        <div className='logon-container'>
            <section className='form'>
                <img src={logoImg} alt="Be A Hero"/>
                   
                    <form onSubmit={handleLogin}>
                        <h1>Faça seu Logon</h1>

                        <input placeholder='Seu ID'
                            value={id}
                            onChange={e => setId(e.target.value)} />
                        <button className="button" type="submit">Entrar</button>
                        <Link className="back-link" to="/registro">
                            <FiLogIn size={16} color='#F02041'/>
                            Não tenho cadastro
                        </Link>
                    </form>
            </section>
            <img src={heroesImg} alt='heroes'/>
        </div>
    );

    async function handleLogin(e){
            e.preventDefault();
            
            const resposta = await api.get('/ongs/' + id);
    
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongNome', resposta.data.nome);
    
            history.push('/perfil');    
    }
    
}

