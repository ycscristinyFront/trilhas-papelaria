function simularMinhaCompra() {
    let precoStranger = 5;
    let precoBreaking = 6;
    let precoWandinha = 4;

    let qtdStranger = Number(prompt("Quantas diárias de 'Stranger Things' (R$ 5,00/dia) você quer?"));
    let qtdBreaking = Number(prompt("Quantas diárias de 'Breaking Bad' (R$ 6,00/dia) você quer?"));
    let qtdWandinha = Number(prompt("Quantas diárias de 'Wandinha' (R$ 4,00/dia) você quer?"));

    let totalStranger = precoStranger * qtdStranger;
    let totalBreaking = precoBreaking * qtdBreaking;
    let totalWandinha = precoWandinha * qtdWandinha;

    let totalGeral = totalStranger + totalBreaking + totalWandinha;

    if (totalGeral === 0) {
        alert("Nenhuma diária foi selecionada.");
    } else {
        alert(
            "=== RECIBO CINEFLIX LOCADORA ===\n\n" +
            "Stranger Things: " + qtdStranger + " dias = R$ " + totalStranger + ",00\n" +
            "Breaking Bad: " + qtdBreaking + " dias = R$ " + totalBreaking + ",00\n" +
            "Wandinha: " + qtdWandinha + " dias = R$ " + totalWandinha + ",00\n\n" +
            "Total da Locação: R$ " + totalGeral + ",00"
        );
    }
}
