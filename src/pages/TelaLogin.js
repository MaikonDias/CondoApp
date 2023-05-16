import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ActivityIndicator, ToastAndroid } from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { Logar } from '../actions';
import { connect } from 'react-redux';

class TelaLogin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            senha: "",
            carregando: false,
            mensagem: "",
        }
    }

    componentDidMount() {
        var firebaseConfig = {
            apiKey: "",
            authDomain: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: "",
            measurementId: ""
        };
        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app();
        }
    }

    onChangeHandler(campo, valor) {
        this.setState({
            [campo]: valor
        })
    }

    Logar() {
        this.setState({ carregando: true });
        const { email, senha } = this.state;

        this.props.Logar({ email, senha })
            .then(user => {
                if (email.toLowerCase() === 'admin@condominio.com') {
                    this.setState({ mensagem: ToastAndroid.show(("Logado como administrador"), ToastAndroid.SHORT) });
                    this.props.navigation.navigate('Admin');
                } else {
                    this.setState({ mensagem: ToastAndroid.show(("Logado como morador"), ToastAndroid.SHORT) });
                    this.props.navigation.navigate('User');
                }

                this.setState({
                    carregando: false
                })
            }).catch(error => {
                this.setState({
                    mensagem: ToastAndroid.show(this.MensagemDeErro(error.code),
                        ToastAndroid.SHORT)
                });
                console.log('ERRO', error.code);
                this.setState({
                    carregando: false
                })
            });
    }

    MensagemDeErro(code) {
        switch (code) {
            case "auth/email-not-found":
                return "usuário não cadastrado";
            case "auth/wrong-password":
                return "senha errada";
            default:
                return "erro desconhecido";
        }
    }

    botaoLogin() {
        if (this.state.carregando)
            return <ActivityIndicator color="#FFF" size="large" />

        return (
            <TouchableOpacity style={styles.botao}
                title="Login"
                onPress={() => this.Logar()}
            >
                <Text style={styles.btnTexto}> Login </Text>
            </TouchableOpacity>
        );
    }

    Aviso() {
        const { mensagem } = this.state;

        if (!mensagem) {
            return (null);
        }

        return (
            <View>
                <Text>{mensagem}</Text>
            </View>
        );
    }

    botaoCadastro() {
        return (
            <TouchableOpacity style={styles.botao}
                title="Cadastrar"
                onPress={() => { this.props.navigation.navigate('Cadastro') }}
            >
                <Text style={styles.btnTexto}> Cadastrar </Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (

            <View style={styles.conteudo}>
                <Text style={styles.logoTexto}>CondoApp</Text>
                <FormRow>
                    <TextInput style={styles.InputTexto}
                        placeholder="e-mail"
                        placeholderTextColor="white"
                        value={this.state.email}
                        onChangeText={valor => { this.onChangeHandler('email', valor) }}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <TextInput style={styles.InputTexto}
                        placeholder="senha"
                        placeholderTextColor="white"
                        value={this.state.senha}
                        onChangeText={valor => { this.onChangeHandler('senha', valor) }}
                        secureTextEntry
                    />
                </FormRow>

                <View style={{ flexDirection: 'row' }}>
                    {this.botaoLogin()}
                    {this.botaoCadastro()}
                </View>
                {this.Aviso()}
            </View >

        );
    }
}

const styles = StyleSheet.create({
    InputTexto: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginHorizontal: 10,
        padding: 10,
        height: 50,
        marginTop: 6,
        color: 'white'
    },
    conteudo: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#86A4B6',
    },
    botao: {
        backgroundColor: 'white',
        padding: 14,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginHorizontal: 3,
        borderWidth: 1,
        borderColor: '#19547B'
    },
    btnTexto: {
        color: '#19547B',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '800'
    },
    logoTexto: {
        color: 'white',
        fontSize: 34,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    }
});

export default connect(null, { Logar })(TelaLogin)