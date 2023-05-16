import firebase from "firebase";

export const ENCONTRA_RES = 'ENCONTRA_RES';
const encontraRes = (reservas) => ({
    type: ENCONTRA_RES,
    reservas: reservas
})

export const verReservas = () => {
    return dispatch => {
        firebase.database()
            .ref(`/reservas`)
            .on('value', snapshot => {
                const reserva = snapshot.val();
                const action = encontraRes(reserva);
                dispatch(action);

            })
    }
}