# Calculadora de Gasto de Combustível por KM

Este é um projeto simples desenvolvido com Node.js, que calcula o consumo de combustível com base na distância percorrida e no tipo de combustível utilizado. O foco principal está em **boas práticas com validações** e **testes unitários automatizados** usando **Jest**.

---

## 🚗 Descrição

A função `calcGastoCombustivelPorKM` recebe dois parâmetros:

- `distanciaEmMetros` (inteiro positivo): a distância a ser percorrida em metros.
- `tipoCombustivel` (string): tipo de combustível, que deve ser `"gasolina"` ou `"etanol"`.

A função retorna um número inteiro representando **quantos litros de combustível são necessários**, arredondando sempre para cima.

### Consumo por tipo de combustível:

| Tipo       | Consumo Médio |
|------------|----------------|
| Gasolina   | 16 km/l        |
| Etanol     | 11 km/l        |

---

## 🧪 Testes

Todos os testes foram implementados com Jest e cobrem:

- Casos válidos de gasolina e etanol
- Arredondamento correto de frações
- Validação de distância negativa ou zero
- Validação de tipo de combustível inválido

O relatório de cobertura também é gerado automaticamente após os testes.

---

## ✅ Tecnologias utilizadas

- Node.js  
- Jest  

---

## 📌 Objetivo do projeto

Este projeto foi desenvolvido como exercício para praticar:

- Validação de dados de entrada  
- Cálculo com lógica condicional  
- Testes unitários com Jest  
- Geração de relatório de cobertura de código  

---

## 📄 Licença

Este projeto está sob a licença MIT.


