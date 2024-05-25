let langs = document.querySelector(".langs"),
            link = document.querySelectorAll("a")
            vestibular = document.querySelector(".itemOne")
            secretaria = document.querySelector(".itemTwo")
            unidades = document.querySelector(".itemThree")
            acessar = document.querySelector(".itemFour")
            instituto = document.querySelector(".lumina")
            sobre = document.querySelector(".abouth1")
            sobrenos = document.querySelector(".abouth2")
            facilitador = document.querySelector( ".abouth3")
            apresentacao = document.querySelector( ".aboutp")
            funcionalidades = document.querySelector( ".funcionalidades")
            noticias = document.querySelector( ".noticias")
            eventos = document.querySelector( ".eventos")
            empresas = document.querySelector( ".empresas")
            logout = document.querySelector( ".logout")
            contato = document.querySelector( ".contatoh1")
            contatoTwo = document.querySelector( ".contatoh2")
            contatoThree = document.querySelector( ".contatop1")
            contatoFour = document.querySelector( ".p2")
            enviar = document.querySelector( ".enviar")
            footer = document.querySelector( ".footerh3")
            footerTwo = document.querySelector( ".footerp1")
            footerThree = document.querySelector( ".footerp2")
            footerFour = document.querySelector( ".footerp3")
            footerFive = document.querySelector( ".footerp4")
            footerSix = document.querySelector( ".redes")
            footerSeven = document.querySelector( ".telefone")
            footerEight = document.querySelector( ".copyright")
        
            link.forEach(el=>{
            el.addEventListener("click", ()=>{
                langs.querySelector(".active").classList.remove("active")
                el.classList.add("active")
        
                let attr = el.getAttribute("language")
                footer.textContent = data[attr].footer  
                footerTwo.textContent = data[attr].footerTwo  
                footerThree.textContent = data[attr].footerThree  
                footerFour.textContent = data[attr].footerFour  
                footerFive.textContent = data[attr].footerFive  
                footerSix.textContent = data[attr].footerSix    
                footerSeven.textContent = data[attr].footerSeven   
                footerEight.textContent = data[attr].footerEight   
                enviar.textContent = data[attr].enviar
                vestibular.textContent = data[attr].vestibular
                secretaria.textContent = data[attr].secretaria
                unidades.textContent = data[attr].unidades
                acessar.textContent = data[attr].acessar
                instituto.textContent = data[attr].instituto
                sobre.textContent = data[attr].sobre
                sobrenos.textContent = data[attr].sobrenos
                facilitador.textContent = data[attr].facilitador
                apresentacao.textContent = data[attr].apresentacao
                funcionalidades.textContent = data[attr].funcionalidades
                noticias.textContent = data[attr].noticias
                eventos.textContent = data[attr].eventos
                empresas.textContent = data[attr].empresas
                logout.textContent = data[attr].logout
                contato.textContent = data[attr].contato
                contatoTwo.textContent = data[attr].contatoTwo
                contatoThree.textContent = data[attr].contatoThree
                contatoFour.textContent = data[attr].contatoFour     
            })
        })
        
        
        let data ={
            portuguese:{
                footer:"Quer Saber Mais?",
                footerTwo:"Quem Somos",
                footerThree:"Contato",
                footerFour:"Empresas Afiliadas",
                footerFive:"Politica de Privacidade",
                footerSix:"Nossas Redes",
                footerSeven:"Telefone",
                footerEight:"© 2024 Instituto Lumina, Inc", 
                vestibular:"Vestibular",
                secretaria:"Secretaria",
                unidades:"Unidades",
                acessar:"Acessar",
                instituto:"Instituto Lumina",
                sobre:"Sobre Nós",
                sobrenos:"Sobre Nós",
                facilitador:"Somos um facilitador",
                apresentacao:"O Instituto Lumina oferece cursos modernos nas áreas de programação, cibersegurança, e desenvolvimento de software. Contamos com docentes especializados e laboratórios de última geração. Nosso foco é proporcionar uma educação prática e alinhada às demandas do mercado. Venha fazer parte do futuro da tecnologia!",
                funcionalidades:"Funcionalidades",
                noticias: "Noticias",
                eventos: "Eventos",
                empresas: "Empresas",
                logout:"Fazer Logout",
                contato:"Contato",
                contatoTwo:"Contato",
                contatoThree:"Se estiver com alguma duvida ou interesse comercial não",
                contatoFour:"hesite em nos contatar.",
                enviar:"Enviar",   
            },
            english:{
                footer:"Want to know more?",
                footerTwo:"Who we are",
                footerThree:"Contact",
                footerFour:"Affiliated Companies",
                footerFive:"Privacy Policy",
                footerSix:"Our Networks",
                footerSeven:"Telephone",
                footerEight:"© 2024 Lumina Institute, Inc",
                vestibular:"Entrance Exam",
                secretaria:"Secretariat",
                unidades:"Branches",
                acessar:"Access",
                instituto:"Lumina Institute",
                sobre:"About Us",
                sobrenos:"About Us",
                facilitador:"We are a facilitator",
                apresentacao:"The Lumina Institute offers modern courses in the areas of programming, cybersecurity, and software development. We have specialized teachers and state-of-the-art laboratories. Our focus is to provide practical education aligned with market demands. Come be part of the future of technology!",
                funcionalidades:"Functionalities",
                noticias: "News",
                eventos: "Events",
                empresas: "Companies",
                logout:"Logout",
                contato:"Contact",
                contatoTwo:"Contact",
                contatoThree:"If you have any questions or business  interest, do not",
                contatoFour:"hesitate to contact us.",
                enviar:"Send",
            }
        }
        