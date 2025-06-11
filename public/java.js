document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const respostas = {
    q1: "c",
    q2: "b",
    q3: "b"
  };

  let pontuacao = 0;

  for (let q in respostas) {
    const pergunta = document.getElementById(q);
    const selecionada = document.querySelector(`input[name="${q}"]:checked`);
    const opcoes = pergunta.querySelectorAll("label");

    opcoes.forEach(label => {
      label.classList.remove("correct", "incorrect"); // limpa classes anteriores
    });

    if (selecionada) {
      if (selecionada.value === respostas[q]) {
        pontuacao++;
        selecionada.parentElement.classList.add("correct");
      } else {
        selecionada.parentElement.classList.add("incorrect");
        // mostra também a correta
        opcoes.forEach(label => {
          if (label.querySelector("input").value === respostas[q]) {
            label.classList.add("correct");
          }
        });
      }
    } else {
      // marca a correta mesmo que não tenha sido respondida
      opcoes.forEach(label => {
        if (label.querySelector("input").value === respostas[q]) {
          label.classList.add("correct");
        }
      });
    }
  }

  const resultado = document.getElementById("result");
  resultado.textContent = `Você acertou ${pontuacao} de ${Object.keys(respostas).length} perguntas.`;
});
