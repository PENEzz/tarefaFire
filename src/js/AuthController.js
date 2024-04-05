export class AuthController{

    constructor(){
        console.log("AuthController constructor rodou!!!")
    }

    logar(){
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const emailDoUsuario = document.getElementById('emailDoUsuario').value;
            const senhaDoUsuario = document.getElementById('senhaDoUsuario').value;
            login(emailDoUsuario, senhaDoUsuario);
        });
    }

    registrar(){
        document.getElementById('registration-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const emailDoUsuario = document.getElementById('emailDoUsuario').value;
            const senhaDoUsuario = document.getElementById('senhaDoUsuario').value;
            registrarNovoUsuario(emailDoUsuario, senhaDoUsuario);
        });
    }
}