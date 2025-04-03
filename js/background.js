const images = ["africa.jpg", "banff.jpg", "beach.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `images/${chosenImage}`;
bgImage.style.position = "fixed";
bgImage.style.top = "0";
bgImage.style.left = "0";
bgImage.style.width = "100vw";     // 화면 너비 고정
bgImage.style.height = "100vh";    // 화면 높이 고정
bgImage.style.objectFit = "cover"; // 이미지가 찌그러지지 않게, 꽉 차게
bgImage.style.zIndex = "-1";    
document.body.appendChild(bgImage);
