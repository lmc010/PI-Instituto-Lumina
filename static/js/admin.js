let langs = document.querySelector(".langs"),
    link = document.querySelectorAll("a")
    bemvindo = document.querySelector(".bemvindo")
    ola = document.querySelector(".ola")
    alunos = document.querySelector(".alunos")
    professores = document.querySelector(".professores")
    disciplinas = document.querySelector(".disciplinas")
    logout  = document.querySelector(".logout")
    frase = document.querySelector(".frase")
    

    link.forEach(el=>{
    el.addEventListener("click", ()=>{
        langs.querySelector(".active").classList.remove("active")
        el.classList.add("active")

        let attr = el.getAttribute("language")

        bemvindo.textContent = data[attr].bemvindo
        alunos.textContent = data[attr].alunos
        professores.textContent = data[attr].professores
        disciplinas.textContent = data[attr].disciplinas
        disciplinas.textContent = data[attr].disciplinas
        logout.textContent = data[attr].logout
        frase.textContent = data[attr].frase
        ola.textContent = data[attr].ola
        
    })
})


let data ={
    portuguese:{
        bemvindo: "Bem Vindo!!",
        alunos:"GERENCIAR ALUNOS",
        professores: "GERENCIAR PROFESSORES",
        disciplinas: "GERENCIAR DISCPLINAS",
        logout:"FAZER LOGOUT",
        ola:"Olá Usuário",
        frase:"Você está conectado no módulo Sistema de Administração de Graduação",
    },
    english:{
        bemvindo: "Welcome!!",
        alunos:"MANAGE STUDENTS",
        professores: "MANAGE TEACHERS",
        disciplinas:"MANAGE SUBJECTS",
        logout:"LOGOUT",
        ola:"Hello User",
        frase:"You are logged into the Graduation Administration System Module"
    }
}