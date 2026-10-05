const { verificarMaioridade, calcularIMC, formatarNome, ehPar, celsiusParaFahrenheit, adicionarHobby, dividir, criarAluno, aplicarDesconto, validarTamanhoSenha} = require('./sistema.js');

describe('Testes do sistema', () => {
    describe("Teste para verificarMaioridade", () => {
        test('deve testar idades de 15 anos', () => {
            const resultado = verificarMaioridade(15);
            expect(resultado).toBe(false);
        });
        test('deve testar idades de 18 anos', () => {
            const resultado = verificarMaioridade(18);
            expect(resultado).toBe(true);
        });
        test('deve testar idades de 21 anos', () => {
            const resultado = verificarMaioridade(21);
            expect(resultado).toBe(true);
        });
    })

    describe("Teste para calcularIMC", () => {
        test('deve verificar se peso 70 e altura 1.75 retorna 22.86 (use toBeCloseTo)', () => {
            const resultado = calcularIMC(70, 1.75);
            expect(resultado).toBeCloseTo(22.86);
        });
    })

    describe("Teste para formatarNome", () => {
        test('deve verificar se "Lucas" e "Silva" retorna "Silva, Lucas"', () => {
            const resultado = formatarNome("Lucas", "Silva");
            expect(resultado).toBe("Silva, Lucas");
        });
    })


    describe("Teste para ehPar", () => {
        test('deve testar um número par', () => {
            const resultado = ehPar(2);
            expect(resultado).toBe(true);
        });
        test('deve testar um número ímpar', () => {
            const resultado = ehPar(3);
            expect(resultado).toBe(false);
        });
        test('deve testar o número 0', () => {
            const resultado = ehPar(0);
            expect(resultado).toBe(true);
        });
    })

    describe("Teste para celsiusParaFahrenheit", () => {
        test('deve testar 0°C', () => {
            const resultado = celsiusParaFahrenheit(0);
            expect(resultado).toBe(32);
        });
        test('deve testar 100°C', () => {
            const resultado = celsiusParaFahrenheit(100);
            expect(resultado).toBe(212);
        });
        test('deve testar -40°C', () => {
            const resultado = celsiusParaFahrenheit(-40);
            expect(resultado).toBe(-40);
        });
    })


    describe("Teste para adicionarHobby", () => {
        test("deve adicionar um novo hobby à lista", () => {
            const lista = ["futebol", "jogar"];
            const resultado = adicionarHobby(lista, "programar");

            expect(resultado).toHaveLength(3);
            expect(resultado).toContain("programar");
            expect(lista).toHaveLength(2);
        });
    });

    describe("Teste para dividir", () => {
        test("deve testar uma divisão normal", () => {
            const resultado = dividir(10, 2);
            expect(resultado).toBe(5);
        });

        test("deve validar erro ao dividir por zero", () => {
            expect(() => dividir(10, 0)).toThrow("Divisão por zero não permitida");
        });
    });


    describe("Teste para criarAluno", () => {
        test("deve validar a estrutura e dados do objeto retornado usando toEqual", () => {
            const resultado = criarAluno("Aluno", "ADS");
            expect(resultado).toEqual({
                nome: "Aluno",
                curso: "ADS",
                ativo: true
            });
        });
    });

    describe("Teste para aplicarDesconto", () => {
        test("deve testar desconto de 10%", () => {
            const resultado = aplicarDesconto(100, 10);
            expect(resultado).toBe(90);
        });

        test("deve testar desconto de 0%", () => {
            const resultado = aplicarDesconto(100, 0);
            expect(resultado).toBe(100);
        });
    });

    describe("Teste para validarTamanhoSenha", () => {
        test("deve retornar false para senha com 5 caracteres", () => {
            const resultado = validarTamanhoSenha("12345");
            expect(resultado).toBe(false);
        });

        test("deve retornar true para senha com 8 caracteres", () => {
            const resultado = validarTamanhoSenha("12345678");
            expect(resultado).toBe(true);
        });
    });
});