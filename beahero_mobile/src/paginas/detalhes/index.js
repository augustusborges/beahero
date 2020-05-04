import React from 'react';
import {Feather} from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './src/styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

export default function Detalhes(){
    const navigation = useNavigation();
    const route = useRoute();
    const caso = route.params.caso;
    const mensagem = `Ola ${caso.nome }Gostaria de ajudar no caso ${caso.titulo} com o valor de ${Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(caso.valor)}`

    function Retornar(){
        navigation.goBack();
    }

    function enviaEmail(){
        MailComposer.composeAsync({
            subject:`Herio do caso: ${caso.title}`,
            recipients: [caso.email],
            body: mensagem
        });
    }

    function enviaWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${caso.Whatsapp};text=${message}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>

                <TouchableOpacity onPress={Retornar}>
                    <Feather name='arrow-left' size={28} color='#F02041' />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop:0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>{caso.nome} de {caso.cidade}/{caso.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{caso.tipo}</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR'
                            , {style:'currency', currency:'BRL'}).format(caso.valor)}
                        </Text>            
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescriion}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={enviaWhatsApp}>
                        <Text stye={styles.actiontext}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={enviaEmail}>
                        <Text stye={styles.actiontext}>Email</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}