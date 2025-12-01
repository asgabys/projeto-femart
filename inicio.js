// troca de seções
function mostrarSecao(secao) {
    document.querySelectorAll('.secao').forEach(s => s.classList.remove('ativa'));
    document.getElementById(secao).classList.add('ativa');
}

// avaliações
document.getElementById("formAvaliacao").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const comentario = document.getElementById("comentario").value;
    const estrelas = document.getElementById("comentario").value;


    const div = document.createElement("div");
    div.className = "avaliacao";
    div.innerHTML = `<strong>${nome}</strong><br>${comentario}`;

    document.getElementById("listaAvaliacoes").appendChild(div);

    document.getElementById("formAvaliacao").reset();
});

