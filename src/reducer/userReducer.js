import { USUARIO_LOGIN, USUARIO_LOGOUT  } from '../actions';


export default function userReducer(state = null, action) {
    switch (action.type) {
        case USUARIO_LOGIN:
            return action.user;

        case USUARIO_LOGOUT:
            return null;

        default:
            return state;
    }
}