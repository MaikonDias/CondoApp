import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderDrawer from '../../components/HeaderDrawer';

export default function UserHome({ navigation }) {
    return (
        <View style={styles.conteudo}>
            <HeaderDrawer title='Reservas Realizadas' navigation={navigation} />
            <Text>Não é a tela do Modola</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        backgroundColor: '#86A4B6',
    }
})