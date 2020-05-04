import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import {FiArrowLeft} from 'react-icons/fi' 
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Registro(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUF] = useState('');
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
            
        const ong = {
            nome,
            email,
            whatsapp,
            cidade,
            uf
        }

        const resposta = await api.post('ongs', ong);

        alert(`Seu ID de acesso: ${resposta.data.id}`);
        history.push("/");
    }

        return(
             <div className="register-container">
                 <div className="content">
                     <section>
                        <img src={logoImg} alt="Be A Hero"/>

                        <h1>Cadastro</h1>
                        <p>
                            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de ONG.
                        </p>
                        <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color='#F02041'/>
                            Já tenho cadastro
                        </Link>
                     </section>
                     <form onSubmit={handleRegister}>
                        <input 
                            placeholder="nome da ONG" 
                            value={nome} 
                            onChange={e => setNome(e.target.value)}/>

                        <input type="email" 
                            placeholder="E-mail"
                            value={email} 
                            onChange={e => setEmail(e.target.value)}/>

                        <input 
                            placeholder="WhatsApp"
                            value={whatsapp} 
                            onChange={e => setWhatsApp(e.target.value)}/>

                        <div className="input group">
                            <input 
                                placeholder="cidade"
                                value={cidade} 
                                onChange={e => setCidade(e.target.value)}/>

                            <input style={{width:80}}
                                placeholder="UF"
                                value={uf} 
                                onChange={e => setUF(e.target.value)}/>
                        </div>
                        <button className="button" type="submit">Cadastrar</button>

                     </form>
                 </div>
             </div>  
        );
       
}

