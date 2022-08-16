// Criando os historicos
let hisMul = [];
let hisDiv = [];
let hisSub = [];
let hisAdi = [];

const dividir = () => {
    // Referenciando do HTML
    let Resultado = document.getElementById("resultadoD");
    let d1 = parseInt(document.getElementById("d1").value);
    let d2 = parseInt(document.getElementById("d2").value);

    // Calculando e mostrando o resultado
    let quociente = d1 / d2;
    Resultado.innerText = (quociente.toFixed(2));

    // Salvando historico
    let espresao = d1+" / "+d2+" = "+quociente;
    hisDiv[hisDiv.length] = espresao;
    console.log(hisDiv);
}

const multiplicar = () => {
    // Referenciando do HTML
    let Resultado = document.getElementById("resultadoM");
    let m1 = parseInt(document.getElementById("m1").value);
    let m2 = parseInt(document.getElementById("m2").value);

    // Calculando e mostrando o resultado
    let multiplicacao = m1 * m2;
    Resultado.innerText = (multiplicacao.toFixed(2));

    // Salvando historico
    let espresao = m1+" x "+m2+" = "+multiplicacao;
    hisMul[hisMul.length] = espresao;
    console.log(hisMul);
}

const subtrair = () => {
    // Referenciando do HTML
    let Resultado = document.getElementById("resultadoS");
    let s1 = parseInt(document.getElementById("s1").value);
    let s2 = parseInt(document.getElementById("s2").value);

    // Calculando e mostrando o resultado
    let resto = s1 - s2;
    Resultado.innerText = (resto.toFixed(2));

    // Salvando historico
    let espresao = s1+" - "+s2+" = "+resto;
    hisSub[hisSub.length] = espresao;
    console.log(hisSub);
}

const somar = () => {
    // Referenciando do HTML
    let Resultado = document.getElementById("resultadoA");
    let a1 = parseInt(document.getElementById("a1").value);
    let a2 = parseInt(document.getElementById("a2").value);

    // Calculando e mostrando o resultado
    let soma = a1 + a2;
    Resultado.innerText = (soma.toFixed(2));

    // Salvando historico
    let espresao = a1+" + "+a2+" = "+soma;
    hisAdi[hisAdi.length] = espresao;
    console.log(hisAdi);
}
