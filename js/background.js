const iamge = ["0.jpeg", "1.jpeg", "2.jpeg"]

const chosenImage = Images [Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage);