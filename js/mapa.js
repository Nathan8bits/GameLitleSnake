const pontuacao = document.querySelector(".pontuacao");
function exibirPontuacao(tam) {
    pontuacao.innerHTML = `Pontuação: ${tam*5}`;
}

const btnW = document.querySelector(".btnW");
btnW.addEventListener("click", movCima);
//btnW.addEventListener("mouseover", movCima);

const btnS = document.querySelector(".btnS");
btnS.addEventListener("click", movBaixo);
//btnS.addEventListener("mouseover", movBaixo);

const btnA = document.querySelector(".btnA");
btnA.addEventListener("click", movEsquerda);
//btnA.addEventListener("mouseover", movEsquerda);

const btnD = document.querySelector(".btnD");
btnD.addEventListener("click", movDireita);
//btnD.addEventListener("mouseover", movDireita);

document.addEventListener('keypress', function(event) {
    if (event.key === 'w') {
      // Ações a serem executadas quando o Enter for pressionado
        movCima();
    }
  });

document.addEventListener('keypress', function(event) {
    if (event.key === 'a') {
      // Ações a serem executadas quando o Enter for pressionado
        movEsquerda();
    }
  });

document.addEventListener('keypress', function(event) {
    if (event.key === 'd') {
      // Ações a serem executadas quando o Enter for pressionado
        movDireita();
    }
  });

document.addEventListener('keypress', function(event) {
    if (event.key === 's') {
      // Ações a serem executadas quando o Enter for pressionado
      movBaixo();
    }
  });


//cria tabuleiro
function criarTabuleiro() {
    //const componentRoot = document.createElement("div");
	//componentRoot.setAttribute("class", "mapa");

	const matrizMapa = document.createElement("tab");
	matrizMapa.setAttribute("class", "matrizMapa");
    
    for(let y = 0; y < tamX; y++) {
        const linha = document.createElement("tr");

        for(let x = 0; x < tamY; x++) {
            const celula = document.createElement("td");
            celula.setAttribute("class", "celulaTd")
            //celula.innerHTML = `${x}, ${y}`
            linha.appendChild(celula)
        }

        matrizMapa.appendChild(linha);
    }

    game.appendChild(matrizMapa);
}

function posicionarCobra() {
    //posicionando cobra
    for (let index = 0; index < tamCobra; index++) {
        if( cobra[index][0] < tamY 
            && cobra[index][0] > -1
            && cobra[index][1] < tamX
            && cobra[index][1] > -1) {
            celulaTd[cobra[index][1]*tamY + cobra[index][0]].setAttribute("class", "vida");
        }
    }
}
function removerCobra() {
    for (let index = 0; index < tamCobra; index++) {
        if(cobra[index][0] < tamY 
            && cobra[index][0] > -1
            && cobra[index][1] < tamX
            && cobra[index][1] > -1) {
            celulaTd[cobra[index][1]*tamY + cobra[index][0]].classList.remove("vida")
        }
        //celulaTd[cobra[index][1]*tamY + cobra[index][0]].setAttribute("class", "vida");
    }
}

function posicionarComida() {
    //posicionando cobra
    for (let index = 0; index < tamCobra; index++) {
        //celulaTd[x*tamY + y].setAttribute("class", "vida");
        
        celulaTd[comida[1]*tamY + comida[0]].setAttribute("class", "blue");
    }
}

function movCima() {
    if(run == false) {
        removerCobra();
        iniciarVariaveis();
    }
    else if(ultimaTecla === 'a' || ultimaTecla === 'd') {
        ultimaTecla = 'w';
        proxFrame() 
        console.log(ultimaTecla);
    }
}

function movBaixo() {
    if(ultimaTecla == 'a' || ultimaTecla == 'd') {
        ultimaTecla = 's';
        proxFrame();
        console.log(ultimaTecla);
    }
}

function movEsquerda() {
    if(ultimaTecla === 'w' || ultimaTecla === 's') {
        ultimaTecla = 'a';
        proxFrame() 
        console.log(ultimaTecla);
    }
}

function movDireita() {
    if(ultimaTecla === 'w' || ultimaTecla === 's') {
        ultimaTecla = 'd';
        proxFrame() 
        console.log(ultimaTecla);
    }
}