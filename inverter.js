let palavra = "Olá, mundo!";
let chars = palavra.split("");
let inverter = "";

for (let i = chars.length - 1; i >= 0; i--) {
  inverter += chars[i];
}
console.log("String original: " + palavra);
console.log("String invertida: " + inverter);
