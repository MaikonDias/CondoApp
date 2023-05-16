import firebase from "firebase";

export const DEF_CAMPO = 'DEF_CAMPO';

export const defCampo = (campo, value) => {
    //esta função define o estado dos campos de texto de NovoAmbiente.js
    return {
        type: DEF_CAMPO,
        campo,
        value
    }
}

export const LIMPAR_AMBIENTE = 'LIMPAR_AMBIENTE';
export const limparAmbiente = () => {
    return {
        type: LIMPAR_AMBIENTE
    }
}

export const MOSTRAR_CAMPOS = 'MOSTRAR_CAMPOS';
export const settarCampos = ambiente => ({
    type: MOSTRAR_CAMPOS,
    ambiente: ambiente
});

export const cadAmb = ambiente => {
    return async dispatch => { // disparar chamada assíncrona do firebase
        if (ambiente.nome === undefined || ambiente.nome.trim().length === 0) {
            throw new Error('Preencher nome do ambiente');
        }

        if (ambiente.lotmax === undefined || ambiente.lotmax <= 0) {
            throw new Error('Lotação deve conter número maior que 0');
        }

        if (ambiente.desc === undefined || ambiente.desc.trim().length === 0) {
            throw new Error('Preencher descrição');
        }
        if (ambiente.id) {
            await firebase.database()
                .ref(`/ambientes/${ambiente.id}`)
                .update(ambiente)
        } else {
            await firebase.database()
                .ref(`/ambientes/`)
                .push(ambiente)
        }
        dispatch(limparAmbiente());
    }
}