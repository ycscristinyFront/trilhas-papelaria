function simularMinhaCompra() {
    let precoCaderno = 20;
    let precoCaneta = 5;
    let precoMochila = 80;

    let qtdCaderno = Number(prompt("Informe a quantidade de Caderno (R$ 20,00):"));
    let qtdCaneta = Number(prompt("Informe a quantidade de Caneta (R$ 5,00):"));
    let qtdMochila = Number(prompt("Informe a quantidade de Mochila (R$ 80,00):"));

    let totalCaderno = precoCaderno * qtdCaderno;
    let totalCaneta = precoCaneta * qtdCaneta;
    let totalMochila = precoMochila * qtdMochila;

    let totalGeral = totalCaderno + totalCaneta + totalMochila;

    if (totalGeral === 0) {
        alert("Nenhum produto foi selecionado.");
    } else {
        alert(
            "Resumo do Pedido:\n\n" +
            "Caderno: " + qtdCaderno + "x = R$ " + totalCaderno + ",00\n" +
            "Caneta: " + qtdCaneta + "x = R$ " + totalCaneta + ",00\n" +
            "Mochila: " + qtdMochila + "x = R$ " + totalMochila + ",00\n\n" +
            "Total Geral: R$ " + totalGeral + ",00"
        );
    }
}
