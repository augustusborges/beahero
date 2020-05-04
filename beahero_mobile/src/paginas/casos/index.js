import React, {useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import logoImg from '../../assets/logo.png';

import styles from './styles';
import api from '../../servicos/api';

export default function Casos(){
    const [casos, setCasos] = useState([]);
    const [total, setTotal] = useState(0);
    const [pagina, setPagina]= useState(1);
    const [loading, setLoading] = useState(false);


    const navigation = useNavigation();

    function navegarparaDetalhe(caso){
        navigation.navigate('Detalhe', {caso});    
    }
   
    async function loadCasos(){
        if(loading){
            return;
        }

        if(total > 0 && casos.length === total){
            return;
        }

        setLoading(true);

        const response = await api.get('casos', {params:{page}});

        setCasos([...casos, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(()=>{
        loadCasos();         
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>
                </Text>
            </View>
            <Text style={styles.title}>Seja bem vindo!</Text>
            <Text style={styles.description}>Escolha um caso abaixo e salve o dia</Text>

            <FlatList 
                data={[casos]}
                style={styles.incidentList}
                keyExtractor={caso => String(caso.id)}
                onEndReached={loadCasos}
                onEndReachedThreshold = {0.2}
                showsVerticalScrollIndicator={alse}
                renderItem={({item: caso})=>(
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>caso.name</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>caso.titulo</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR'
                            , {style:'currency', currency:'BRL'}).format(caso.valor)}
                        </Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={() => navegarParaDetalhe(caso)}>
                            
                            <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                            <Feather name='arrow-right' size={16} color='F02041' />
                        </TouchableOpacity>
                    </View> 
                )}
            />

        </View>
    );
}