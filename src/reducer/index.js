import { combineReducers } from "redux";
import userReducer  from "./userReducer";
import formAmbiente from './formAmbiente';
import formReserva from './formReserva';
import formCadastro from "./formCadastro";
import fireAmbiente from "./fireAmbienteReducer"

export default combineReducers({
    user: userReducer,
    amb: formAmbiente,
    res: formReserva,
    cad: formCadastro,
    ambiente: fireAmbiente
});