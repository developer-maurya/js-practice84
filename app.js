const URL1 = "https://catfact.ninja/fact";
let promise= fetch(URL)
console.log(promise);
const factPara1 = document.querySelector("#fact");


const getFact=async() =>{
    console.log("getting data.....")
let response= await fetch(URL)
console.log(response);
let data = await response.json();
// console.log(data[0].text);
factPara1.innerText = data[0].text;

}
const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const button = document.querySelector("#btn");


const getFacts = async () => {
  console.log("getting data.....");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data); // { fact: "Cats sleep 70% of their lives.", length: 38 }
  factPara.innerText = data[1].fact;
};
btn.addEventListener("click",getFact)