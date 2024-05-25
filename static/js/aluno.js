let langs = document.querySelector(".langs"),
    link = document.querySelectorAll("a")
    bemvindo = document.querySelector(".bemvindo")
    dados = document.querySelector(".dados")
    consultas = document.querySelector(".consultas")
    mensagens = document.querySelector(".mensagens")
    alterar = document.querySelector(".alterar")
    retomar = document.querySelector(".retomar")
    logout = document.querySelector(".logout")
    frase = document.querySelector(".frase")
    ola = document.querySelector(".ola")

    link.forEach(el=>{
    el.addEventListener("click", ()=>{
        langs.querySelector(".active").classList.remove("active")
        el.classList.add("active")

        let attr = el.getAttribute("language")

        bemvindo.textContent = data[attr].bemvindo
        dados.textContent = data[attr].dados
        consultas.textContent = data[attr].consultas
        mensagens.textContent = data[attr].mensagens
        alterar.textContent = data[attr].alterar
        retomar.textContent = data[attr].retomar
        logout.textContent = data[attr].logout
        frase.textContent = data[attr].frase
        ola.textContent = data[attr].ola
    })
})


let data ={
    portuguese:{
        bemvindo: "Bem Vindo!!",
        dados: "MEUS DADOS",
        consultas: "CONSULTAS",
        mensagens: "MENSAGENS",
        alterar:"ALTERAR PERFIL",
        retomar:"RETOMAR A HOMEPAGE",
        logout:"FAZER LOGOUT",
        frase:"Você está conectado no módulo Sistema de graduação",
        ola:"Olá Usuário",
    },
    english:{
        bemvindo: "Welcome!!",
        dados: "MY DATA",
        consultas: "QUERIES",
        mensagens: "MESSAGE",
        alterar:"EDIT PROFILE",
        retomar:"RETURN A HOMEPAGE",
        logout:"LOGOUT",
        frase:"You are logged in to the Grading System module",
        ola:"Hello User",
    }
}