import { ENCONTRA_AMB } from "../actions";

export default function(state = null, action){
    switch(action.type){
        case ENCONTRA_AMB:
            return action.ambientes;
        default:
            return state;
    }
}