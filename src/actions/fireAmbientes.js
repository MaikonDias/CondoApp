import firebase from "firebase";
import { Alert } from "react-native";

export const ENCONTRA_AMB = 'ENCONTRA_AMB';
const encontraAmb = (ambientes) => ({
    type: ENCONTRA_AMB,
    ambientes: ambientes
})

export const verAmbientes = () => {
    return dispatch => {
        firebase.database()
            .ref(`/ambientes`)
            .on('value', snapshot => {
                const ambientes = snapshot.val();
                const action = encontraAmb(ambientes);
                dispatch(action);

            })
    }
}

export const deletarAmbiente = ambientes => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            Alert.alert(
                'Excluir Ambiente', `Deseja Excluir ${ambientes.nome} ?`,
                [{
                    text: 'Não',
                    onPress: () => {
                        resolve(false);
                    }
                }, {
                    text: 'Sim',
                    onPress: async () => {
                        try {
                            await firebase.database().ref(`/ambientes/${ambientes.id}`).remove();
                            resolve(true);
                        }catch(error){
                            reject(error);
                        }
                    }
                }],
                { cancelable: false }
            )
        })
    }
}