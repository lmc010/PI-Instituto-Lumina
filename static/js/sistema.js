let langs = document.querySelector(".langs"),
    link = document.querySelectorAll("a")
    inicio = document.querySelector(".inicio")
    acesso = document.querySelector(".acesso")
    senha = document.querySelector(".senha")
    email = document.querySelector(".alterarEmail")
    faleconosco = document.querySelector(".faleconosco")
    graduacao = document.querySelector(".graduacao")
    sistemaDocente = document.querySelector(".p2")


    link.forEach(el=>{
    el.addEventListener("click", ()=>{
        langs.querySelector(".active").classList.remove("active")
        el.classList.add("active")

        let attr = el.getAttribute("language")

        inicio.textContent = data[attr].inicio
        acesso.textContent = data[attr].acesso
        senha.textContent = data[attr].senha
        email.textContent = data[attr].email
        faleconosco.textContent = data[attr].faleconosco
        graduacao.textContent = data[attr].graduacao
        sistemaDocente.textContent = data[attr].sistemaDocente
    })
})


let data ={
    portuguese:{

        inicio:"INICIO",
        acesso:"SOLICITAR ACESSO",
        senha:"MUDAR SENHA",
        email:"MUDAR EMAIL",
        faleconosco:"FALE CONOSCO",
        graduacao:"SISTEMA DE GRADUAÇÃO",
        sistemaDocente:"SISTEMA DOCENTE",
    },
    english:{
        
        inicio:"START",
        acesso:"REQUEST ACCESS",
        senha:"CHANGE PASSWORD",
        email:"CHANGE EMAIL",
        faleconosco:"CONTACT US",
        graduacao:"GRADUATION  SYSTEM",
        sistemaDocente:"TEACHING STAFF SYSTEM",
    }
}

