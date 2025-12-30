function selecionarSpawn(id) {
    if (window.geckoju) {
        // Formato JSON que o sscanf do Pawn acima vai ler
        window.geckoju.send(JSON.stringify({
            event: "server:selecionarSpawn",
            spawnId: id
        }));
    }
}
