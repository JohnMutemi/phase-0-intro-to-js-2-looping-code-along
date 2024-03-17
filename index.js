// Code your solutions in this file

//Assignment on writeCards

function writeCards(names, eventName){
    let cardsMsg=[];
    for (let i=0; i<names.length; i++){
        cardsMsg.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
      
return cardsMsg;
}
let cardsArray=(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));
console.log(cardsArray);

//Assignment on while loop

function countDown(myNumber) {
    while (myNumber >= 0) {
        console.log(myNumber);
        myNumber--;
    }
}

countDown(20);