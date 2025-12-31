// Função para o Botão 1: Última Posição
function spawnUltima() {
    if (window.geckoju) {
        window.geckoju.send("event:spawnUltima");
    } else {
        console.log("Erro: Geckoju não detectado.");
    }
}

// Função para o Botão 2: Aeroporto
function spawnAeroporto() {
    if (window.geckoju) {
        window.geckoju.send("event:spawnAeroporto");
    } else {
        console.log("Erro: Geckoju não detectado.");
    }
}

// Função para o Botão 3: Estacionamento 1
function spawnEstac1() {
    if (window.geckoju) {
        window.geckoju.send("event:spawnEstac1");
    } else {
        console.log("Erro: Geckoju não detectado.");
    }
}

// Função para o Botão 4: Estacionamento 2
function spawnEstac2() {
    if (window.geckoju) {
        window.geckoju.send("event:spawnEstac2");
    } else {
        console.log("Erro: Geckoju não detectado.");
    }
}