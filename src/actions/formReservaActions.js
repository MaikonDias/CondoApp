import firebase from "firebase";

export const DEF_RESERVA = 'DEF_RESERVA';

export const defRes = (campo, value) => {
    //esta função define o estado dos campos de texto de novaReserva.js
    return {
        type: DEF_RESERVA,
        campo,
        value
    }
}

export const LIMPAR_RESERVA = 'LIMPAR_RESERVA';
export const limparReserva = () => { //limpa os campos de texto após ser preenchido
    return {
        type: LIMPAR_RESERVA
    }
}

export const cadReserva = reserva => {
    const { currentUser } = firebase.auth()
    return async dispatch => { // disparar chamada assíncrona do firebase
        return await firebase.database().ref(`/morador/${currentUser.uid}/reservas`)
            .push(reserva).then(() =>
                dispatch(limparReserva()));
    }
}