import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import HeaderDrawer from '../../components/HeaderDrawer';
import Card from '../../components/Card';
import { connect } from 'react-redux';

import { verReservas } from '../../actions';

class listarReservas extends React.Component {
    
    componentDidMount(){
        this.props.verReservas();
    }
    
    render() {
        if(this.props.reservas === null){
            return <ActivityIndicator />
        }

        return (
            <View style={styles.conteudo} >
                <HeaderDrawer title='Visualizar Reservas' navigation={this.props.navigation} />
                <FlatList
                    data={[...this.props.reservas]}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity>
                                <Card >
                                    <Text style={styles.cardFonte}>Reservado Para: {`${item.nome}`}</Text>
                                    <Text style={styles.cardFonte}>Local Reservado: {`${item.Ambiente}`}</Text>
                                    <Text style={styles.cardFonte}>Data: {`${item.data}`}</Text>
                                </Card>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        backgroundColor: '#86A4B6',
    },
    cardFonte: {
        fontSize: 16
    }
})

const mapearReservas = state => {
    const {reservas} = state;

    if(reservas === null){
        return {reservas};
    }
    
    const keys = Object.keys(reservas);
    const listarReservasPorId = keys.map(key =>{
        return {...reservas[key], id: key }
    })

    return {reservas: listarReservasPorId};
}

export default connect(mapearReservas, {verReservas})(listarReservas);