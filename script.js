const apiurl = "https://api.adviceslip.com/advice";
const diceBtn = document
  .getElementById("advicegenerator")
  .addEventListener("click", getAdvice);
async function getAdvice() {
  const response = await fetch(apiurl, { cache: "no-store" });
  const data = await response.json();
  let adviceGener = data.slip.advice;
  let numGener = data.slip.id;
  document.getElementById("advicenumber").innerHTML = `${numGener}`;
  document.getElementById("advicetext").innerHTML = `${adviceGener}`;
}
getAdvice();
