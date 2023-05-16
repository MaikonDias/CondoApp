import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome';

export default function HeaderDrawer({title, navigation}){
    return (
        <View style= {styles.container}>
            <View  style= {styles.botaoContainer}>
                <TouchableOpacity style= {styles.botao} onPress={() =>(navigation.openDrawer())}>
                    <FontAwesome5 name="bars" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
            <View style= {styles.TituloContainer}>
                <Text style= {styles.Texto}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    botao: {
        backgroundColor: "#86A4B6",
        paddingHorizontal: 6,
    },
    TituloContainer:{
        backgroundColor: "#86A4B6",
        width: '100%'
    },
    Texto:{
        color: '#FFF',
        padding: 15,
        fontSize: 22,
        fontFamily: 'Roboto-bold'
    },
    botaoContainer:{
        justifyContent: 'center',
        backgroundColor: '#86A4B6',
        paddingHorizontal: 7
    }

})