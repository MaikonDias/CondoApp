import firebase from "firebase";

export const DEF_MORADOR = 'DEF_MORADOR';

export const defMorador = morador => {
    //esta função define o estado dos campos de texto de TelaCadastro.js
    return {
        type: DEF_MORADOR,
        morador
    }
}

export const LIMPAR_CADASTRO = 'LIMPAR_CADASTRO';
export const limparCadastro = () => { //limpa os campos de texto após ser preenchido
    return {
        type: LIMPAR_CADASTRO
    }
}

export const cadMorador = morador => {
    return async dispatch => { // disparar chamada assíncrona do firebase

        if (morador.nome === undefined || morador.nome.trim().length === 0) {
            console.log(morador.nome);
            throw new Error("Por favor insira o nome");
        }
        if (morador.apartamento === undefined || morador.apartamento.trim().length === 0) {
            console.log(morador.apartamento);
            throw new Error("Insira o Apartamento");
        }
        if (morador.email === undefined || morador.email.trim().length === 0) {
            console.log(morador.email);
            throw new Error("Por favor insira o e-mail");
        }
        if (morador.senha === undefined || morador.senha.trim().length === 0) {
            console.log(morador.senha);
            throw new Error("Insira a senha");
        }
        await firebase.auth().createUserWithEmailAndPassword(morador.email, morador.senha)
            .then(user => {

                firebase.database().ref(`/morador/`)
                    .push({ nome: morador.nome, apartamento: morador.apartamento, email: user.user.email }).then(() =>
                        dispatch(limparCadastro()));
            });
    }
}