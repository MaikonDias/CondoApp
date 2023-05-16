import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { View, TouchableOpacity, ScrollView, Text, StyleSheet, Button } from 'react-native';
import FormRow from '../../components/FormRow';
import HeaderDrawer from '../../components/HeaderDrawer';
import { connect } from 'react-redux';
import { defRes, cadReserva } from '../../actions';

const NovaReserva = ({ navigation, res, defRes, cadReserva }) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.conteudo}>
            <ScrollView >
                <HeaderDrawer title='Solicitar Reserva' navigation={navigation} />
                <FormRow>
                    <Text style={styles.texto}> Data da reserva: </Text>
                    <Button title="Open" onPress={() => setOpen(true)} />
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            console.log(date)
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </FormRow>
                <TouchableOpacity style={styles.botao}
                    title="Cadastrar Ambiente"
                    onPress={() => { cadReserva(res) }}
                >
                    <Text style={styles.btnTexto}> Cadastrar Reserva </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
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

const utilReserva = (state) => {
    return {
        res: state.res
    }
}

const definirReserva = {
    defRes,
    cadReserva
}

export default connect(utilReserva, definirReserva)(NovaReserva);