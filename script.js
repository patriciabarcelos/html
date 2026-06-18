let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// adicionar
function adicionarCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizar();
}

// remover
function removerItem(index) {
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizar();
}

// atualizar tela
function atualizar() {
    let lista = document.getElementById("carrinho");
    let totalEl = document.getElementById("total");
    let contador = document.getElementById("contador-carrinho");

    let total = 0;

    if (lista) {
        lista.innerHTML = "";

        for (let i = 0; i < carrinho.length; i++) {
            total += carrinho[i].preco;

            lista.innerHTML += carrinho[i].nome + 
            " - R$ " + carrinho[i].preco +
            " <button onclick='removerItem(" + i + ")'>excluir</button><br>";
        }
    }

    if (totalEl) totalEl.innerHTML = total;
    if (contador) contador.innerHTML = carrinho.length;
}

window.onload = atualizar;