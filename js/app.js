'use strict';
let user = prompt("please enter your name ");
let i= 0;
alert("Hello " + user );
let qu1=prompt("Do you think Im tell man ? ","yes or no ");
qu1=qu1.toLocaleLowerCase();
console.log(qu1);
switch(qu1){
case'yes':
case 'y':
 alert("good guess ");
 i=i+1;
 break;

case 'no':
case 'n':
 alert ("nope I am  ");
 break;
 default:
  alert('okay no problem'); 

}

let qu2=prompt("DO you think I like movies");
qu2=qu2.toLocaleLowerCase();
switch(qu2){
case'yes':
case 'y':
alert("You Are super right ");
i=i+1;
break;
case'no':
case 'n':
alert("You Are super wrong ");
break;
default:
  alert('okay no problem'); 
}



let qu3=prompt("do you think Im older then 25 ");
qu3=qu3.toLocaleLowerCase();
switch(qu3){
case'yes':
case 'y':
alert("npoe Im 23 ");
i=i++;
break;
case'no':
case 'n':
alert("ok thats  good guess Im 23  ");

break;
default:
  alert('okay no problem'); 
}



let qu4=prompt("Do you believe in hard work ?");
qu4=qu4.toLocaleLowerCase();
switch(qu4){
case'yes':
case 'y':
alert(" yess me too   ");
i=i+1;
break;
case'no':
case 'n':
alert("you should   ");
break;
default:
  alert('okay no problem'); 
}

let qu5=prompt("Do you think I have a twin?");
qu5=qu5.toLocaleLowerCase();
switch(qu5){
case'yes':
case 'y':
alert(" nope    ");
break;
case'no':
case 'n':
alert(" yeah Im Alone   ");
i=i+1;
break;
default:
  alert('okay no problem'); 
}

alert(`you got ` + i +`/5`)
document.write(user + "Welcome my site ");
console.log(user + " hey Man  ");


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