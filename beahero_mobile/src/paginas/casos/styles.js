import {StyleSheet} from 'react-native';
import Constantes from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        PaddingHorizontal:24,
        PaddinTop: Constantes.statusBarHeight + 20,
    },

    header:{
        flexDiretion: 'row',
        justifyContent: 'space-betwwen',
        alignItems: 'center'
    },

    headerText:{
        fontSize:15,
        color: '#737380'    
    },

    headertextBold:{
        fontWeight:'bold',

    },

    title:{
        fintSize:30,
        marginBottom:16,
        marginTop:48,
        color:'#13131a',
        fontWeight:'bold'
    },

    description:{
        fontsize:16,
        lineHeight: 24,
        color:'#737380'
    },

    incidentList:{
        marginTop: 32,
    },

    incident:{
        padding:24,
        borderRadius:8,
        backgraudColor:'#fff',
        marginBotton:16,
    },

    incidentProperty:{
        fontSize:14,
        color: '#41414d',
        fontWeight:'bold'
    },

    incidentValue:{
        margintop:8,
        fontSize:15,
        marginBottom:24,
        color:'#737380'
    },
    
    detailsButton:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText:{
        color:'#F02041',
        fontSize:15,
        fontWeight:'bold'
    }


});