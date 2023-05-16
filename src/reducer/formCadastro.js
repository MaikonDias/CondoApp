import { DEF_MORADOR, LIMPAR_CADASTRO } from "../actions";

const CAMPO_INICIAL = {
    email: '',
    senha: '',
    nome: '',
    apartamento:''
}

export default function (state = CAMPO_INICIAL, action) {
    switch (action.type) {
        case DEF_MORADOR: {
            console.log(action.type)
            const clonarCampo = { ...state };
            clonarCampo[action.campo] = action.value;
            return clonarCampo;
        }
        case LIMPAR_CADASTRO:
            return CAMPO_INICIAL
        default:
            return {};
    }
}