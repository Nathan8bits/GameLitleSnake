let tamY = 30;//colunas
let tamX = 15; //linhas, colunas  10, 6 
let matriz = new Array(tamX);//colunas

//variavel de controle
let run = true;

let tamCobra = 3;
let ultimaTecla = 's'; //baixo 's', cima 'w', esquerda 'a
let cobra = new Array(tamCobra);
for (let index = 0; index < tamCobra; index++) {
    cobra[index] = new Array(2);
}

cobra[0][0] = 15;//x
cobra[0][1] = 2;//y
cobra[1][0] = 15;
cobra[1][1] = 1;
cobra[2][0] = 15;
cobra[2][1] = 0;

//adicionando nova parte
/*
let newParte = [2]
newParte[0] = 1;
newParte[1] = 2;

cobra.push(newParte)
*/


//variavies do html
const game = document.querySelector(".game");
criarTabuleiro();
let celulaTd = document.querySelectorAll(".celulaTd");
//celulaTd[x*tamY + y].setAttribute("class", "vida");
//celulaTd[x*tamY + y].classList.remove("vida");


const btnW = document.querySelector(".btnW");
btnW.addEventListener("click", () => {
    if(ultimaTecla === 'a' || ultimaTecla === 'd') {
        ultimaTecla = 'w';
        console.log(ultimaTecla);
    }
});

const btnS = document.querySelector(".btnS");
btnS.addEventListener("click", () => {
    if(ultimaTecla == 'a' || ultimaTecla == 'd') {
        ultimaTecla = 's';
        console.log(ultimaTecla);
    }
});


const btnA = document.querySelector(".btnA");
btnA.addEventListener("click", () => {
    if(ultimaTecla === 'w' || ultimaTecla === 's') {
        ultimaTecla = 'a';
        console.log(ultimaTecla);
    }
});

const btnD = document.querySelector(".btnD");
btnD.addEventListener("click", () => {
    if(ultimaTecla === 'w' || ultimaTecla === 's') {
        ultimaTecla = 'd';
        console.log(ultimaTecla);
    }
});


//main
(() => {
    //iniciando o mapa
    for(let i = 0; i < tamX; i++) {
        matriz[i] = new Array(tamY)
        
        for(let j=0; j<tamY; j++) {
            matriz[i][j] = ' ';//preenchendo o mapa
        }
    }

    posicionarCobra()
    proxFrame();
    
    console.log(matriz)
    console.log(cobra);
    console.log(ultimaTecla);
})();


setInterval(function(){
    if(run) {
     proxFrame();
     console.log("frame");
    }
}, 500);

function proxFrame() 
{    
    //celulaTd[cobra[tamCobra-1][1]*tamY + cobra[tamCobra-1][0]].classList.remove("vida")
    
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
        
    if( cobra[0][1] >= tamX - 1
        || cobra[0][1] < 0 
        || cobra[0][0] >= tamY - 1 
        || cobra[0][0] < 0) {
            run = false;
    }

    for(let i = tamCobra - 1; i > 0; i--) {
        cobra[i][0] = cobra[i-1][0];
        cobra[i][1] = cobra[i-1][1];
    }
    
    posicionarCobra();
    celulaTd[cobra[tamCobra-1][1]*tamY + cobra[tamCobra-1][0]].setAttribute("class", "blue")
    console.log("proxFrame")
    console.log(`tamCobra: ${tamCobra}, ultima parte: ${cobra[tamCobra-1][0]}, ${cobra[tamCobra-1][1]}`);
}


function posicionarCobra() {
    for (let index = 0; index < tamCobra; index++) {
        //posicionando cobra
        celulaTd[cobra[index][1]*tamY + cobra[index][0]].setAttribute("class", "vida") 
    }
}