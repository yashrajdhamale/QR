let text = document.getElementById("text");
let qrcode = document.getElementById("qr-code").children[0];
let buttonCopy = document.getElementById("buttonCopy");

function generate() {
  qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`;
  text.value = "";
}

function copy(){

}