 const clock = document.querySelector("h2#clock");

 const sayHello = () => console.log('hello');


 function getColck(){
    const date = new Date();
    const hour = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2,'0');
    clock.innerHTML = `${hour}:${minutes}:${seconds}`;
 }
getColck();
setInterval(getColck, 1000);