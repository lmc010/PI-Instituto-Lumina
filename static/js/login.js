let langs = document.querySelector(".langs"),
    link = document.querySelectorAll("a")
    login = document.querySelector(".login")
    entrar = document.querySelector(".entrar")
    cadastro = document.querySelector(".p1")
    identificacao = document.querySelector(".p2")
    senha = document.querySelector(".p3")
    lumina = document.querySelector(".h1")
    labelUsuario = document.querySelector(".labelUsuario")
    labelSenha = document.querySelector(".labelSenha")

    link.forEach(el=>{
    el.addEventListener("click", ()=>{
        langs.querySelector(".active").classList.remove("active")
        el.classList.add("active")

        let attr = el.getAttribute("language")

        login.textContent = data[attr].login
        entrar.textContent = data[attr].entrar
        cadastro.textContent = data[attr].cadastro
        lumina.textContent = data[attr].lumina
        labelUsuario.textContent = data[attr].labelUsuario
        labelSenha.textContent = data[attr].labelSenha
        identificacao.textContent = data[attr].identificacao
        senha.textContent = data[attr].senha
    })
})


let data ={
    portuguese:{

        lumina: "Instituto Lumina",
        login:"Faça o Login Para Continuar",
        entrar:"ENTRAR",
        cadastro:"Fazer Cadastro",
        labelUsuario:"Usuario:",
        labelSenha:"Senha:",
        identificacao:"Esqueceu o Usuario?",
        senha:"Esqueceu a Senha?",
    },
    english:{
        
        lumina: "Lumina Institute",
        login:"Login to Continue",
        entrar:"ENTER",
        cadastro:"Sign up",
        labelUsuario:"User:",
        labelSenha:"Password:",
        identificacao:"Forgot User?",
        senha:"Forgot password?",
    }
}