import { DEF_RESERVA } from "../actions";

const ESTADO_INICIAL = {
    id: null,
    nome: '',
    data: '',
    Ambiente: ''
}

export default function (state = ESTADO_INICIAL, action) {
    switch (action.type) {
        case DEF_RESERVA: {
            console.log(action.type)
            const clonarCampo = { ...state };
            clonarCampo[action.campo] = action.value;
            return clonarCampo;
        }
        default:
            return state;
    }
}