import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import HeaderDrawer from '../../components/HeaderDrawer';
import Card from '../../components/Card';
import { connect } from 'react-redux';

import { verAmbientes } from '../../actions';

class AdminHome extends React.Component {
    
    componentDidMount(){
        this.props.verAmbientes();
    }
    
    render() {
        if(this.props.ambiente === null){
            return <ActivityIndicator />
        }

        return (
            <View style={styles.conteudo} >
                <HeaderDrawer title='Visualizar Ambientes' navigation={this.props.navigation} />
                <FlatList
                    data={[...this.props.ambiente]}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Gerenciar Ambientes', { screen: 'gerenciarAmbientes'})}>
                                <Card >
                                    <Text style={styles.cardFonte}>Ambiente: {`${item.nome}`}</Text>
                                    <Text style={styles.cardFonte}>Lotação: {`${item.lotmax}`}</Text>
                                    <Text style={styles.cardFonte}>Descrição: {`${item.desc}`}</Text>
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

const mapearAmbientes = state => {
    const {ambiente} = state;

    if(ambiente === null){
        return {ambiente};
    }
    
    const keys = Object.keys(ambiente);
    const listarAmbientePorId = keys.map(key =>{
        return {...ambiente[key], id: key }
    })

    return {ambiente: listarAmbientePorId};
}

export default connect(mapearAmbientes, {verAmbientes})(AdminHome);