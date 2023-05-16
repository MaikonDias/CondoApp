import firebase from "firebase";
export const USUARIO_LOGIN = 'USUARIO_LOGIN';
const usuarioLogin = user => ({
    type: USUARIO_LOGIN,
    user
});

export const USUARIO_LOGOUT = 'USUARIO_LOGOUT';
const usuarioLogout = () => ({
    type: USUARIO_LOGOUT
});

export const Logar = ({ email, senha }) => dispatch => {

    return firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(user => {
            const action = usuarioLogin(user);
            dispatch(action)
            return user;
        }).catch(error => {
            return Promise.reject(error);
        })
}

export const Logout = () => dispatch => {

    return () => {
        firebase.auth().signOut().then(() => {
            dispatch( usuarioLogout());
        });
    }
}
