import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, ToastAndroid, Alert } from 'react-native';
import FormRow from '../../components/FormRow';
import HeaderDrawer from '../../components/HeaderDrawer';
import { connect } from 'react-redux';
import { defCampo, cadAmb, settarCampos } from '../../actions';

class novoAmbiente extends React.Component {

    componentDidMount() {
        const { route, navigation, settarCampos } = this.props;
        // console.log(this.props.navigation)
        // const { editAmbiente } = route.params;
        // // console.log("navigation", editAmbiente);
        //  if (editAmbiente && route.params) {
        //      editAmbiente.lotmax = "" + editAmbiente.lotmax;
        //      mostrarCampos(editAmbiente);
        //      console.log("componentDidMount: ",editAmbiente)
        //  }
    }

    render() {
        const { navigation, amb, defCampo, cadAmb } = this.props
        console.log(this.props.navigation);
        return (
            <View style={styles.conteudo}>
                <ScrollView >
                    <HeaderDrawer title='Criar novo ambiente' navigation={navigation} />
                    <FormRow>
                        <Text style={styles.texto}> Nome do Ambiente:</Text>
                        <TextInput style={styles.InputTexto}
                            value={amb.nome}
                            maxLength={30}
                            onChangeText={value => defCampo('nome', value)}
                        />
                        <Text style={styles.texto}> Lotação Máxima: </Text>
                        <TextInput style={styles.InputLota}
                            maxLength={3}
                            keyboardType="numeric"
                            value={amb.lotmax}
                            onChangeText={value => defCampo('lotmax', value.toString())}
                        />

                        <Text style={styles.texto}> Descrição: </Text>
                        <TextInput style={styles.CampoDesc}
                            multiline={true}
                            numberOfLines={3}
                            maxLength={100}
                            value={amb.desc}
                            onChangeText={value => defCampo('desc', value)} />
                    </FormRow>
                    <TouchableOpacity style={styles.botao}
                        title="Cadastrar Ambiente"
                        onPress={async () => {
                            try {
                                console.log("Amb: ",amb);
                                await cadAmb(amb)
                                navigation.goBack();
                                ToastAndroid.show(("Dados do ambiente cadastrados !!!"), ToastAndroid.SHORT)
                                // navigation.reset();
                            } catch (error) {
                                Alert.alert('Error', error.message)
                            }
                        }}
                    >
                        <Text style={styles.btnTexto}> Cadastrar Ambiente </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    InputTexto: {
        borderWidth: 1,
        borderColor: 'white',
        marginHorizontal: 10,
        padding: 10,
        height: 40,
        marginTop: 15,
        color: 'gray',
        borderRadius: 5,
        backgroundColor: 'white'
    },
    InputLota: {
        borderWidth: 1,
        borderColor: 'white',
        marginHorizontal: 10,
        padding: 10,
        width: 70,
        height: 40,
        marginTop: 15,
        textAlign: 'center',
        color: 'gray',
        borderRadius: 5,
        backgroundColor: 'white'
    },
    CampoDesc: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 5,
        marginHorizontal: 10,
        padding: 10,
        height: 100,
        margin: 20,
        color: 'gray',
        backgroundColor: 'white',
        textAlignVertical: "top"
    },
    conteudo: {
        flex: 1,
        backgroundColor: '#86A4B6',
    },
    texto: {
        marginTop: 10,
        color: 'white'
    }, botao: {
        backgroundColor: 'white',
        padding: 14,
        paddingHorizontal: 10,
        borderRadius: 30,
        marginHorizontal: 60,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: '#19547B'
    },
    btnTexto: {
        color: '#19547B',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '800'
    },
});

const utilCampo = (state) => {
    return ({
        amb: state.amb
    })
}

const definirCampo = {
    defCampo,
    cadAmb,
    settarCampos
}

export default connect(utilCampo, definirCampo)(novoAmbiente);