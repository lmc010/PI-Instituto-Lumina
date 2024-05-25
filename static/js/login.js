let langs = document.querySelector(".langs"),
    link = document.querySelectorAll("a")
    login = document.querySelector(".login")
    entrar = document.querySelector(".entrar")
    cadastro = document.querySelector(".p1")
    lumina = document.querySelector(".h1")
    inputOne = document.querySelector(".inputIdentificacao")
    inputTwo = document.querySelector(".inputSenha")

    link.forEach(el=>{
    el.addEventListener("click", ()=>{
        langs.querySelector(".active").classList.remove("active")
        el.classList.add("active")

        let attr = el.getAttribute("language")

        login.textContent = data[attr].login
        entrar.textContent = data[attr].entrar
        cadastro.textContent = data[attr].cadastro
        lumina.textContent = data[attr].lumina
        inputOne.textContent = data[attr].inputOne
        inputTwo.textContent = data[attr].inputTwo
    })
})


let data ={
    portuguese:{

        lumina: "Instituto Lumina",
        login:"Faça o Login Para Continuar",
        entrar:"ENTRAR",
        cadastro:"Fazer Cadastro",
        inputOne:"Identification XXXXXX",
        inputTwo:"Senha"
    },
    english:{
        
        lumina: "Lumina Institute",
        login:"Log in to Continue",
        entrar:"ENTER",
        cadastro:"Sign up",
        inputOne:"Identification XXXXXX",
        inputTwo:"Password"
    }
}