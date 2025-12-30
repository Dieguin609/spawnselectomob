function selecionarSpawn(id) {
    if (window.geckoju) {
        // Envia o comando no formato: server:selecionarSpawn:ID
        window.geckoju.send("server:selecionarSpawn:" + id);
    } else {
        console.log("Geckoju não detectado. Local: " + id);
    }
}