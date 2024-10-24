const { calcGastoCombustivelPorKM } = require('./calcGastoCombustivelPorKM');

describe('calcGastoCombustivelPorKM', () => {
    it('Deve calcular corretamente o gasto de gasolina para 16000 metros', () => {
        expect(calcGastoCombustivelPorKM(16000, 'gasolina')).toBe(1);
    });

    it('Deve calcular corretamente o gasto de etanol para 11000 metros', () => {
        expect(calcGastoCombustivelPorKM(11000, 'etanol')).toBe(1);
    });

    it('Deve arredondar para cima para casos de fração de litros necessários', () => {
        expect(calcGastoCombustivelPorKM(8000, 'gasolina')).toBe(1);
    });

    it('Deve lançar um erro se a distância não for um número inteiro positivo', () => {
        expect(() => {
            calcGastoCombustivelPorKM(-10000, 'gasolina');
        }).toThrow('A distância deve ser um número inteiro positivo.');
    });

    it('Deve lançar um erro se o tipo de combustível não for válido', () => {
        expect(() => {
            calcGastoCombustivelPorKM(5000, 'diesel');
        }).toThrow('O tipo de combustível deve ser "gasolina" ou "etanol".');
    });
});
