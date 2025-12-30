// script.js - EXCLUSIVO PARA MOBILE
function selecionarSpawn(id) {
    // Verifica se a API do Geckoju existe
    if (window.geckoju) {
        // Envia os dados formatados em JSON para o servidor
        window.geckoju.send(JSON.stringify({
            event: "server:selecionarSpawn",
            spawnId: id
        }));
    } else {
        console.log("Erro: Geckoju não detectado. Este arquivo é apenas para Mobile.");
    }
}

// Ouvinte caso o servidor queira enviar algo para a tela de Spawn
if (window.geckoju) {
    window.geckoju.onData = function(data) {
        console.log("Dados recebidos do Pawn:", data);
    };
}