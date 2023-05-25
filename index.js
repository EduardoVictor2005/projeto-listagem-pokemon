const botaoAlterarTema=document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaotrocaDeTema=document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {



    const modoescuroEstaAtivo = body.classList. contains ("modo-escuro");
    if(modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro")
    
    } else{ body.classList.add("modo-escuro");
    imagemBotaoTrocaDeTema.settAttribute("src", "./src/imagens/moon.png");

    }

 
  });

 