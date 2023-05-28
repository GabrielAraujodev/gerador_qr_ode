const image = document.querySelector("img");
 input = document.querySelector("input");
 button = document.querySelector("button");
api = 'http://api.qrserver.com/v1/create-qr-code/?size=100x100&data=';

button.addEventListener("click", () => {
  const inputData = encodeURIComponent(input.value);
  const qrCodeUrl = `${api}${inputData}`;
  image.src = qrCodeUrl;
});
