function verificarMaioridade(idade) {
 return idade >= 18; 
}

function calcularIMC(peso, altura) { 
const imc = peso / (altura * altura); 
return Number(imc.toFixed(2)); 
}

function formatarNome(nome, sobrenome) { 
return `${sobrenome}, ${nome}`; 
}

function ehPar(numero) { 
return numero % 2 === 0; 
}

function celsiusParaFahrenheit(c) { 
return (c * 1.8) + 32; 
}

function adicionarHobby(lista, hobby) {
 return [...lista, hobby]; 
}

function dividir(a, b) { 
if (b === 0) throw new Error('Divisão por zero não permitida'); 
return a / b; 
}

function criarAluno(nome, curso) { 
return { nome, curso, ativo: true }; 
}

function aplicarDesconto(preco, porcentagem) { 
return preco - (preco * (porcentagem / 100)); 
}

function validarTamanhoSenha(senha) { 
return senha.length >= 8;
}

module.exports = {
    verificarMaioridade,
    calcularIMC,
    formatarNome,
    ehPar,
    celsiusParaFahrenheit,
    adicionarHobby,
    dividir,
    criarAluno,
    aplicarDesconto,
    validarTamanhoSenha
}