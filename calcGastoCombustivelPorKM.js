function calcGastoCombustivelPorKM(distanciaEmMetros, tipoCombustivel) {
    if (!Number.isInteger(distanciaEmMetros) || distanciaEmMetros < 0) {
        throw new Error("A distância deve ser um número inteiro positivo.");
    }

    if (tipoCombustivel !== "gasolina" && tipoCombustivel !== "etanol") {
        throw new Error('O tipo de combustível deve ser "gasolina" ou "etanol".');
    }

    let consumoPorLitro;
    if (tipoCombustivel === "gasolina") {
        consumoPorLitro = 16; 
    } else if (tipoCombustivel === "etanol") {
        consumoPorLitro = 11; 
    }

    let litrosNecessarios = distanciaEmMetros / 1000 / consumoPorLitro; 

    litrosNecessarios = Math.ceil(litrosNecessarios);

    return litrosNecessarios;
}

module.exports = { calcGastoCombustivelPorKM };
