import React, { UseState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Text, ToastAndroid, Alert } from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { cadMorador } from '../actions';

class TelaCadastro extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            apartamento: "",
            email: "",
            senha: "",
            mensagem: "",
            carregando: false,
        }
    }

    onChangeHandler(field, valor) {
        this.setState({
            [field]: valor
        })
    }

    CadastrarMorador() {
        this.setState({ carregando: true });
        const { email, senha, nome, apartamento } = this.state;

        this.props.cadMorador({ email, senha, nome, apartamento })
            .then(morador => {
                this.setState({ mensagem: ToastAndroid.show(("Usuário Cadastrado Com Sucesso!!!"), ToastAndroid.SHORT) })
                this.setState({
                    carregando: false
                })
            }
            ).catch(error => {
                if (nome === undefined || nome.trim().length === 0) {
                    this.setState({
                        mensagem: ToastAndroid.show((error.message),
                            ToastAndroid.SHORT)
                    });
                    this.setState({
                        carregando: false
                    })
                }
                if (apartamento === undefined || apartamento.trim().length === 0) {
                    this.setState({
                        mensagem: ToastAndroid.show((error.message),
                            ToastAndroid.SHORT)
                    });
                    this.setState({
                        carregando: false
                    })
                }
                if (email === undefined || email.trim().length === 0) {
                    this.setState({
                        mensagem: ToastAndroid.show((error.message),
                            ToastAndroid.SHORT)
                    });
                    this.setState({
                        carregando: false
                    })
                }
                if (senha === undefined || senha.trim().length === 0) {
                    this.setState({
                        mensagem: ToastAndroid.show((error.message),
                            ToastAndroid.SHORT)
                    });
                    this.setState({
                        carregando: false
                    })
                }

                this.setState({
                    mensagem: ToastAndroid.show((this.MensagemDeErro(error.code)),
                        ToastAndroid.SHORT)
                });
                this.setState({
                    carregando: false
                })
                console.log('ERRO', error.code);
            });


    }

    MensagemDeErro(code) {
        switch (code) {
            case "auth/email-already-exists":
                return "usuário já cadastrado";
            case "auth/weak-password":
                return "senha muito fraca, insira uma senha com 6 digitos ou mais";
            default:
                return "Preencha os campos corretamente";
        }
    }

    botaoCadastrar() {
        if (this.state.carregando)
            return <ActivityIndicator color="#FFF" size="large" />

        return (
            <TouchableOpacity style={styles.button}
                title="Realizar Cadastro"
                onPress={() => this.CadastrarMorador()}
            >
                <Text style={styles.btnText}> Realizar Cadastro </Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (

            <View style={styles.content}>

                <FormRow>
                    <TextInput style={styles.TextInput}
                        placeholder="Nome Completo"
                        placeholderTextColor="white"
                        value={this.state.nome}
                        onChangeText={valor => { this.onChangeHandler('nome', valor) }}
                    />

                    <TextInput style={styles.TextInput}
                        placeholder="Apartamento"
                        placeholderTextColor="white"
                        value={this.state.apartamento}
                        onChangeText={valor => { this.onChangeHandler('apartamento', valor) }}
                    />

                    <TextInput style={styles.TextInput}
                        placeholder="e-mail"
                        placeholderTextColor="white"
                        value={this.state.email}
                        onChangeText={valor => { this.onChangeHandler('email', valor) }}
                        keyboardType="email-address"
                        autoCapitalize='none'
                    />

                    <TextInput style={styles.TextInput}
                        placeholder="senha"
                        placeholderTextColor="white"
                        value={this.state.senha}
                        onChangeText={valor => { this.onChangeHandler('senha', valor) }}
                        secureTextEntry
                    />
                </FormRow>

                <View style={{ flexDirection: 'row' }}>
                    {this.botaoCadastrar()}
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    TextInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginHorizontal: 10,
        padding: 10,
        height: 50,
        marginTop: 6,
        color: 'white',
    },
    content: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#86A4B6'
    },
    button: {
        backgroundColor: 'white',
        padding: 14,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginHorizontal: 3
    },
    btnText: {
        color: '#19547B',
        fontFamily: 'Roboto',
        fontSize: 14
    }
});

export default connect(null, { cadMorador })(TelaCadastro);