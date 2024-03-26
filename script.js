let text = document.getElementById("text");
let qrcode = document.getElementById("qr-code").children[0];
let buttonCopy = document.getElementById("buttonCopy");
let h6 = document.getElementById("h6");

function generate() {
  qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`;
  text.value = "";
  h6.style.display = "block";
}

async function copy() {
  const img = document.getElementById("QR-Code");
  const blob = await fetch(img.src).then((response) => response.blob());

  try {
    await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
    alert("Image copied to clipboard!");
  } catch (error) {
    console.error("Error copying image:", error);
  }
}
