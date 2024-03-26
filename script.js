let text = document.getElementById("text");
let qrcode = document.getElementById("qr-code").children[0];
let buttonCopy = document.getElementById("buttonCopy");
let h6 = document.getElementById("h6");
let button = document.getElementById("button");

async function generate() {
  if (text.value === "") {
    h6.innerText = "Enter Text!";
  } else {
  qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`;
  text.value = "";
  h6.innerText = "QR Code Generated!";
  setTimeout(() => {
    h6.innerText = "";
  }, 3000);
}
}
async function copy() {
  const img = document.getElementById("QR-Code");
  const blob = await fetch(img.src).then((response) => response.blob());

  try {
    await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
    h6.innerText = "QR Code Copied!";
  } catch (error) {
    console.error("Error copying image:", error);
  }
}
