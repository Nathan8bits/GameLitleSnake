let tamY = 20;//colunas
let tamX = 14; //linhas, colunas  10, 6 
//let matriz = new Array(tamX);//colunas

//variavel de controle
let run = true;

let tamCobra = 4;


let ultimaTecla = 's'; //baixo 's', cima 'w', esquerda 'a

let comida = [2];

let cobra = new Array(tamCobra);
for (let index = 0; index < tamCobra; index++) {
    cobra[index] = new Array(2);
}

//variavies do html
const game = document.querySelector(".game");
criarTabuleiro();
let celulaTd = document.querySelectorAll(".celulaTd");
//celulaTd[x*tamY + y].setAttribute("class", "vida");
//celulaTd[x*tamY + y].classList.remove("vida");

//main
(() => {
    cobra[0][0] = parseInt(tamY/2);//x
    cobra[0][1] = 2;//y
    cobra[1][0] = parseInt(tamY/2);
    cobra[1][1] = 2;
    cobra[2][0] = parseInt(tamY/2) ;
    cobra[2][1] = 1;
    cobra[3][0] = parseInt(tamY/2) ;
    cobra[3][1] = 0;
    console.log(cobra);
    console.log(ultimaTecla);
    
    posicionarCobra();
    gerarComida();
    posicionarComida();
    exibirPontuacao(0);
    
    //iniciarVariaveis();
})()

function iniciarVariaveis(){
    ultimaTecla = 's';
    run = true;
    celulaTd[comida[1]*tamY + comida[0]].classList.remove("blue");
    
    tamCobra = 4;
    
    /*
    for(let i = 0; i < tamCobra; i++) {
        cobra[i][0] = 0;
        cobra[i][1] = 0;
    }*/
    
    cobra[0][0] = parseInt(tamY/2);//x
    cobra[0][1] = 2;//y
    cobra[1][0] = parseInt(tamY/2);
    cobra[1][1] = 2;
    cobra[2][0] = parseInt(tamY/2) ;
    cobra[2][1] = 1;
    cobra[3][0] = parseInt(tamY/2) ;
    cobra[3][1] = 0;


    console.log(cobra);
    console.log(ultimaTecla);
    
    posicionarCobra();
    gerarComida();
    posicionarComida();
    exibirPontuacao(0);
}

setInterval(() => {
    //console.log(`run: ${run}`)
    if(run) {
        console.log(`run: ${run}`);
        proxFrame();
        //console.log("frame");
    } else {
        pontuacao.innerHTML = `Pontuação: ${(tamCobra-4)*5}. Clique na tecla W para reiniciar`;
    }
}, 160);

function proxFrame() 
{    
    if(run) {
        console.log("proxFrame")/
        console.log(`tamX: ${tamX}, tamY: ${tamY}. tamCobra: ${tamCobra}, cabeça: ${cobra[0][0]}, ${cobra[0][1]} ultima parte: ${cobra[tamCobra-1][0]}, ${cobra[tamCobra-1][1]}`);
        //console.log(`run: ${run}`);

        direcao();        
        celulaTd[cobra[tamCobra-1][1]*tamY + cobra[tamCobra-1][0]].classList.remove("vida");
        for(let i = tamCobra - 1; i > 0; i--) {
            cobra[i][0] = cobra[i-1][0];
            cobra[i][1] = cobra[i-1][1];
        }
        posicionarCobra();
        
        if(tamCobra < tamX*tamY) {
            colidiuComida();
        }
        else if (tamCobra == tamX*tamY -1) {
            console.log("vc venceu")
            run = false;
        }  
            
        //celulaTd[cobra[tamCobra-1][1]*tamY + cobra[tamCobra-1][0]].classList.remove("vida")
        //celulaTd[cobra[tamCobra-1][1]*tamY + cobra[tamCobra-1][0]].setAttribute("class", "blue")
    }
}

function verificarColisaoSelf(ponto) {
    let colidiu = false;

    for (let index = 1; index < tamCobra; index++) {
        if(ponto[0] == cobra[index][0] && ponto[1] == cobra[index][1]) {
            colidiu = true
        }
    }

    return colidiu;
}

function verifcarColisaoComida(ponto) {
    let colidiu = false;

    cobra.map((parte) => {
        if( parte[0] == ponto[0] 
            && parte[1] == ponto[1]) {
            colidiu = true;
        }
    })

    return colidiu;
}

function colidiuComida() {

    if(comida[0] == cobra[0][0] && comida[1] == cobra[0][1]) {
        //adicionando nova parte
        console.log("comeu");
        celulaTd[comida[1]*tamY + comida[0]].classList.remove("blue")
        //celulaTd[comida[1]*tamY + comida[0]].classList.add("vida")

        cobra[0][0] = comida[0];
        cobra[0][1] = comida[1];

        gerarComida();

        exibirPontuacao(tamCobra-3);

        let newParte = [2];
        cobra.push(newParte);

        tamCobra++;

        //movendo o corpo
        for(let i = tamCobra - 1; i > 0; i++) {
           cobra[i][0] = cobra[i-1][0];
           cobra[i][1] = cobra[i-1][1];
        }
    }
}

function gerarComida() {
    let ponto = new Array(2);
    ponto[0] = Math.floor(Math.random() *(tamY-1));
    ponto[1] = Math.floor(Math.random() * (tamX - 1));

    console.log(`x: ${ponto[0]}, y: ${ponto[1]}`);
    while(verifcarColisaoComida(ponto)) {
        ponto[0] = Math.floor(Math.random() *(tamY-1));
        ponto[1] = Math.floor(Math.random() * (tamX - 1));
    }   
     
    comida[0] = ponto[0];
    comida[1] = ponto[1];
    posicionarComida()
}

function direcao() {
    switch (ultimaTecla) 
    {
        case 'w':
            cobra[0][1]--;
            break;
        case 's':
            cobra[0][1]++;
            break;
            case 'a':
                cobra[0][0]--;
            break;
            
            case 'd':
                cobra[0][0]++;
            break;
            
            default:
                break;
        }

        if( cobra[0][0] == -1 
            || cobra[0][0] == tamY
            || cobra[0][1] == -1
            || cobra[0][1] == tamX
            || verificarColisaoSelf(cobra[0])
            ) {
                run = false;
                console.log(`run: ${run}`);
            }
}