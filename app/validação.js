function checkTheKick(kick) {
  const number = +kick;

  if (validNumber(number)) {
    elementKick.innerHTML += "<div>Valor Invalido</div>";
    return;
  }
  if (biggerOrSmaller(number)) {
    elementKick.innerHTML += `<div> valor invalido: O numero é maior que ${smallerValue} e ${greaterValue}</div>`;
    return;
  }

  if (number == numberSecret)
    document.body.innerHTML = `
      <h2>Você Acertou!</h2>
      <h3>O numero secreto é ${numberSecret}</h3>

      <button id="jogar-novamente" class="btn-jogar">Jogar</button>
    `;
  else if (number > numberSecret)
    elementKick.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
  else
    elementKick.innerHTML += `<div>O numero secreto é Maior <i class="fa-solid fa-arrow-up"></i></div>`;
}

function validNumber(number) {
  return Number.isNaN(number);
}

function biggerOrSmaller(numb) {
  return numb > greaterValue || numb < smallerValue;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") window.location.reload();
});
