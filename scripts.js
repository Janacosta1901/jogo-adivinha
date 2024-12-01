let numeroSecreto;
let tentativasRestantes;
let nivel;

function iniciarJogo(dificuldade) {
    nivel = dificuldade;
    const config = {
        basico: { max: 10, tentativas: 3 },
        intermedio: { max: 100, tentativas: 3 },
        profissional: { max: 100000, tentativas: 6 },
    };

    numeroSecreto = Math.floor(Math.random() * (config[nivel].max + 1));
    tentativasRestantes = config[nivel].tentativas;

    // Atualiza a interface
    document.getElementById("dificuldades").classList.add("d-none");
    document.getElementById("jogo").classList.remove("d-none");
    document.getElementById("mensagem").textContent = "O computador já pensou num número. Tente adivinhar!";
    document.getElementById("vidasRestantes").textContent = tentativasRestantes;
}

function fazerTentativa() {
    const palpite = parseInt(document.getElementById("tentativa").value);
    if (isNaN(palpite)) {
        alert("Por favor, insira um número válido!");
        return;
    }

    tentativasRestantes--;
    document.getElementById("vidasRestantes").textContent = tentativasRestantes;

    if (palpite === numeroSecreto) {
        finalizarJogo(true);
    } else if (tentativasRestantes === 0) {
        finalizarJogo(false);
    } else {
        const dica = palpite < numeroSecreto ? "maior" : "menor";
        document.getElementById("mensagem").textContent = `O meu número é ${dica} que o teu! Tente novamente.`;
    }
}

function finalizarJogo(venceu) {
    document.getElementById("jogo").classList.add("d-none");
    document.getElementById("resultado").classList.remove("d-none");

    if (venceu) {
        document.getElementById("animacao").setAttribute("src", "https://assets2.lottiefiles.com/packages/lf20_pqnfmone.json");
        document.getElementById("mensagemFinal").textContent = `🎉 Parabéns! Você acertou o número em ${nivel}!`;
    } else {
        document.getElementById("animacao").setAttribute("src", "https://assets2.lottiefiles.com/packages/lf20_jzqnxlvs.json");
        document.getElementById("mensagemFinal").textContent = "😢 Game over! Você usou todas as tentativas.";
    }
}

function reiniciarJogo() {
    document.getElementById("resultado").classList.add("d-none");
    document.getElementById("dificuldades").classList.remove("d-none");
    document.getElementById("tentativa").value = "";
}
