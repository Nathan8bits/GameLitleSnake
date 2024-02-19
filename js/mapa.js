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