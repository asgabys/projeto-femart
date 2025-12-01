// ---------- SISTEMA DE ESTRELAS ----------
document.querySelectorAll('.estrelas').forEach(div => {
    const id = div.getAttribute('data-id');
    let rating = localStorage.getItem("estrela" + id) || 0;

    function render() {
        div.innerHTML = "";
        for (let i = 1; i <= 5; i++) {
            let estrela = document.createElement("span");
            estrela.textContent = i <= rating ? "★" : "☆";
            estrela.addEventListener("click", () => {
                rating = i;
                localStorage.setItem("estrela" + id, rating);
                render();
            });
            div.appendChild(estrela);
        }
    }
    render();
});

// ---------- SISTEMA DE COMENTÁRIOS ----------
function enviarComentario(id) {
    const textarea = document.querySelector(`textarea[data-id="${id}"]`);
    const lista = document.getElementById(`comentarios-${id}`);

    if (textarea.value.trim() === "") return;

    const novoComentario = document.createElement("p");
    novoComentario.textContent = textarea.value;

    lista.appendChild(novoComentario);

    textarea.value = "";
}
