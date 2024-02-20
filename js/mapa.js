const btnW = document.querySelector(".btnW");
btnW.addEventListener("click", movCima);

const btnS = document.querySelector(".btnS");
btnS.addEventListener("click", movBaixo);

const btnA = document.querySelector(".btnA");
btnA.addEventListener("click", movEsquerda);

const btnD = document.querySelector(".btnD");
btnD.addEventListener("click", movDireita);

document.addEventListener('keypress', function(event) {
    if (event.key === 'w') {
      // Ações a serem executadas quando o Enter for pressionado
        movCima();
        console.log("cima");
    }
  });

document.addEventListener('keypress', function(event) {
    if (event.key === 'a') {
      // Ações a serem executadas quando o Enter for pressionado
         movEsquerda();
        console.log("esquerda");
    }
  });

document.addEventListener('keypress', function(event) {
    if (event.key === 'd') {
      // Ações a serem executadas quando o Enter for pressionado
        movDireita();
        console.log("direita");
    }
  });

document.addEventListener('keypress', function(event) {
    if (event.key === 's') {
      // Ações a serem executadas quando o Enter for pressionado
      movBaixo();  
      console.log("baixo");
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
        celulaTd[cobra[index][1]*tamY + cobra[index][0]].setAttribute("class", "vida");
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
    if(ultimaTecla === 'a' || ultimaTecla === 'd') {
        ultimaTecla = 'w';
        proxFrame() 
        console.log(ultimaTecla);
    }
}

function movBaixo() {
    if(ultimaTecla == 'a' || ultimaTecla == 'd') {
        ultimaTecla = 's';
        proxFrame() 
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