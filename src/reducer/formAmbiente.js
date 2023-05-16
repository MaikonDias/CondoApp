import { DEF_CAMPO, LIMPAR_AMBIENTE, MOSTRAR_CAMPOS } from "../actions";

const CAMPO_INICIAL = {
    id: null,
    nome: '',
    lotmax: '',
    desc: ''
}

export default function (state = CAMPO_INICIAL, action) {
    switch (action.type) {
        case DEF_CAMPO:{
            const clonarCampo = { ...state };
            clonarCampo[action.campo] = action.value;
            return clonarCampo;
        }
        case LIMPAR_AMBIENTE:
            return CAMPO_INICIAL
        case MOSTRAR_CAMPOS:
            return action.ambiente;
        default:
            return state;
    }
}