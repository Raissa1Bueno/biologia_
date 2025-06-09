    function verificarRespostas() {
      const respostasCorretas = {
        q1: "c",
        q2: "c",
        q3: "b"
      };

      let pontuacao = 0;
      let total = Object.keys(respostasCorretas).length;

      for (let pergunta in respostasCorretas) {
        const respostaSelecionada = document.querySelector(`input[name="${pergunta}"]:checked`);
        if (respostaSelecionada && respostaSelecionada.value === respostasCorretas[pergunta]) {
          pontuacao++;
        }
      }

      const resultado = document.getElementById("resultado");
      resultado.textContent = `Você acertou ${pontuacao} de ${total} perguntas.`;
    }

