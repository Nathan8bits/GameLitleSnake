let tamY = 6;//colunas
let tamX = 6; //linhas, colunas  10, 6 
//let matriz = new Array(tamX);//colunas

//variavel de controle
let run = true;

let tamCobra = 3;
let ultimaTecla = 's'; //baixo 's', cima 'w', esquerda 'a
let comida = [2];
comida[0] = 15;
comida[1] = 5;

let cobra = new Array(tamCobra);
for (let index = 0; index < tamCobra; index++) {
    cobra[index] = new Array(2);
}

cobra[0][0] = parseInt(tamY/2);//y
cobra[0][1] = 1;//x
cobra[1][0] = parseInt(tamY/2);
cobra[1][1] = 0;
cobra[2][0] = parseInt(tamY/2) ;
cobra[2][1] = 0;
console.log(cobra);

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


//main
/*
//iniciando o mapa
for(let i = 0; i < tamX; i++) {
    matriz[i] = new Array(tamY)
    
    for(let j=0; j<tamY; j++) {
        matriz[i][j] = ' ';//preenchendo o mapa
    }
}*/


//console.log(matriz)
//console.log(cobra);
console.log(ultimaTecla);

posicionarCobra();
gerarComida();
posicionarComida();
proxFrame();


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


setInterval(() => {
    //console.log(`run: ${run}`)
    if(run) {
        console.log(`run: ${run}`);
        proxFrame();
        console.log("frame");
    }
}, 1000);


function proxFrame() 
{    
    if(run) {
        console.log("proxFrame")
                console.log(`tamX: ${tamX}, tamY: ${tamY}. tamCobra: ${tamCobra}, cabeça: ${cobra[0][0]}, ${cobra[0][1]} ultima parte: ${cobra[tamCobra-1][0]}, ${cobra[tamCobra-1][1]}`);
        //console.log(`run: ${run}`);

        celulaTd[cobra[tamCobra-1][1]*tamY + cobra[tamCobra-1][0]].classList.remove("vida");
        
        for(let i = tamCobra - 1; i > 0; i--) {
            cobra[i][0] = cobra[i-1][0];
            cobra[i][1] = cobra[i-1][1];
        }
        
        direcao();
        posicionarCobra();
        colidiuComida();
        //posicionarComida();

        if( cobra[0][1] > tamX -1 
            || cobra[0][1] < 0 
            || cobra[0][0] > tamY - 1
            || cobra[0][0] < 0
            ) {

                run = false;
                console.log("PAREDE");
                console.log(`run: ${run}`);
        }
        
          
        //celulaTd[cobra[tamCobra-1][1]*tamY + cobra[tamCobra-1][0]].classList.remove("vida")
        //celulaTd[cobra[tamCobra-1][1]*tamY + cobra[tamCobra-1][0]].setAttribute("class", "blue")
        
        console.log(`tamX: ${tamX}, tamY: ${tamY}. tamCobra: ${tamCobra}, cabeça: ${cobra[0][0]}, ${cobra[0][1]} ultima parte: ${cobra[tamCobra-1][0]}, ${cobra[tamCobra-1][1]}`);
    }


}


function colidiuComida() {

    if(comida[0] == cobra[0][0] && comida[1] == cobra[0][1]) {
        //adicionando nova parte
        console.log("comeu");
        celulaTd[comida[1]*tamY + comida[0]].classList.remove("blue")
        
        cobra[0][0] = comida[0];
        cobra[0][1] = comida[1];
        gerarComida();

        let newParte = [2];
        cobra.push(newParte);

        tamCobra++;

        //movendo o corpo
        for(let i = tamCobra - 1; i > 0; i++) {
           cobra[i][0] = cobra[i-1][0];
           cobra[i][1] = cobra[i-1][1];
        }
        
    }
    //return colizao;
}

function gerarComida() {
    let pontoValido = false;
    let x;
    let y;

    while(!pontoValido) {
        x = Math.floor(Math.random() *(tamY-1));
        y = Math.floor(Math.random() * (tamX - 1));

        console.log(`x: ${x}, y: ${y}`);
        
        cobra.map((parte) => {
            if(parte[0] != x && parte[1] != y) {
                pontoValido = true;
            }
        })
    }

    comida[0] = x;
    comida[1] = y;
    posicionarComida()

}


//Math.floor((Math.random() * (max - min)) + min)


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
}