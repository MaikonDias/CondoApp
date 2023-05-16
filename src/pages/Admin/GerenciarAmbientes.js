import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import HeaderDrawer from '../../components/HeaderDrawer';
import Card from '../../components/Card';
import { connect } from 'react-redux';

import { verAmbientes, deletarAmbiente, settarCampos } from '../../actions';

class GerenciarAmbientes extends React.Component {

    componentDidMount() {
        this.props.verAmbientes();
    }

    render() {

        if(this.props.ambiente === null){
            return <ActivityIndicator />
        }

        return (
            <View style={styles.conteudo} >
                <HeaderDrawer title='Ambientes' navigation={this.props.navigation} />
                <FlatList
                    data={[...this.props.ambiente]}
                    renderItem={({ item: ambiente }) => {
                        return (
                            <Card >
                                <Text style={styles.cardFonte}>Ambiente: {`${ambiente.nome}`}</Text>
                                <Text style={styles.cardFonte}>Lotação: {`${ambiente.lotmax}`}</Text>
                                <Text style={styles.cardFonte}>Descrição: {`${ambiente.desc}`}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity
                                        style={styles.botao}
                                        onPress={() => {
                                            console.log("Ambiente: ",ambiente);
                                            this.props.settarCampos(ambiente);
                                            this.props.navigation.navigate('Novo Ambiente', { editAmbiente: ambiente })

                                        }}
                                    >
                                        <Text style={styles.botaoTexto}>
                                            Editar </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.botao}
                                        onPress={async () => {
                                            const deletado = await this.props.deletarAmbiente(ambiente);
                                            console.log("teste");
                                            if (deletado) {
                                                console.log("deletado");
                                                this.navigation.goBack();
                                            }
                                        }}>
                                        <Text style={styles.botaoTexto}>
                                            Excluir</Text>
                                    </TouchableOpacity>
                                </View>
                            </Card>
                        )
                    }}
                    keyExtractor={amb => amb.id}
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
    }, botao: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 14,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: '#19547B',
    }, botaoTexto: {
        color: '#19547B',
        fontSize: 14
    }
})

const mapearAmbientes = state => {
    const { ambiente } = state;

    if(ambiente === null){
        return {ambiente};
    }

    const keys = Object.keys(ambiente);
    const listarAmbientePorId = keys.map(key => {
        return { ...ambiente[key], id: key }
    })

    return { ambiente: listarAmbientePorId };
}

export default connect(mapearAmbientes, { verAmbientes, deletarAmbiente: deletarAmbiente, settarCampos })(GerenciarAmbientes);