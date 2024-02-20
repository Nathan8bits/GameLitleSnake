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