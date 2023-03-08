document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let family = document.getElementById("family-in").value;
  let noun = document.getElementById("noun-in").value;
  let action = document.getElementById("action-in").value;

  //PROCESS
  let msg = `My ${family} loves to eat ${noun} and then ${action}.`;

  //OUTPUT
  document.getElementById("output").innerHTML = msg;
}
