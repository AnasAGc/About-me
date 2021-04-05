'use strict'
let user = prompt("please enter your name ")
alert("Hello " + user )
let qu1=prompt("Do you believe in ghosts? ","yes or no ")
qu1=qu1.toLocaleLowerCase();
console.log(qu1)
switch(qu1){
case'yes':
case 'y':
 alert("Wooow");
 break;

case 'no':
case 'n':
 alert ("Im happy for you ");
 break;

}

let qu2=prompt("Can you see out the back of your head?");
qu2=qu2.toLocaleLowerCase();
switch(qu2){
case'yes':
case 'y':
alert("You Are A super man ");
break;
case'no':
case 'n':
alert("Its Ok dont be Sad ")
break;
}



let qu3=prompt("Can you see the moon?");
qu3=qu3.toLocaleLowerCase();
switch(qu3){
case'yes':
case 'y':
alert("IT IS YOU ");
break;
case'no':
case 'n':
alert("IT IS YOU  ")
break;
}



let qu4=prompt("Do you believe in Santa Claus?");
qu4=qu4.toLocaleLowerCase();
switch(qu4){
case'yes':
case 'y':
alert(" He nover Show up  ");
break;
case'no':
case 'n':
alert("ME too  ")
break;
}

let qu5=prompt("Do you have a twin?");
qu5=qu5.toLocaleLowerCase();
switch(qu5){
case'yes':
case 'y':
alert(" You are lucky   ");
break;
case'no':
case 'n':
alert(" ME too  ")
break;
}

document.write(user + "Welcome my site ")
console.log(user + " hey Man  ")


//  let answer=prompt("yesss")
// switch(answer){
// case 'yes': // T
// case 'y':
//   alert('Yes actually i do');
//   break; // stop the switch statement
// case 'no':
// case 'n':
//   alert('No i do like handmade stuff');
//   break;
// case 'maybe':
//   alert('your not sure');
//   break;
// default:
//   alert('okay no problem'); 
// }