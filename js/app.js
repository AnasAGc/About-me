

'use strict';
let user = prompt("please enter your name ");
let i= 1;
alert("Hello " + user );
let qu1=prompt("Do you think Im tell man ? ","yes or no ");
qu1=qu1.toLocaleLowerCase();
console.log(qu1);
switch(qu1){
case'yes':
case 'y':
 alert("good guess ");
 i=i+1;
 console.log(i);

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
console.log(i);

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
console.log(i);

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
console.log(i);

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
i=i + 1;
console.log(i);

break;
default:
  alert('okay no problem'); 
}

for (let h=3 ; h>=0;h--){
  
 let userage=prompt("Guess what is my age ???");
  userage=parseInt(userage);
  
  if (userage>=23){
    if(userage===23){
      alert(" Thats Right ");
      i=i+1;
      console.log(i);
        break;
    }else{
      alert("Too high ")
            alert("you have "+ h  +" trails left")
    }
  
  }else{
    alert("Too low")
    alert("you have "+ h + " trails left")
    
    
  }
  if(h===0){
    alert("THE Right Answer is 23" )
  }
}


let cars=['bmw','mercedes',"audi"]
for ( let k =5;k>=0;k--){
  let favcar=prompt("Guess what is my favarate cars are ?")
  favcar=favcar.toLocaleLowerCase()

switch(favcar){
  
  case cars[0]:
  case cars[1]:
  case cars[2]:
  alert(" GOOD GUESS")
  i=i+1
  console.log(i)
  k=-1
  break;

  default:
  alert("TRY AGAIN ");
  alert("you have "+ k + " trails left");
 
   if (k===0){
    alert("THE CORRECT ANSWERS ARE BMW MERCEDES AUDI ");
  }
}
}
alert(`you got ` + i +`/7`)
document.write(user + "Welcome my site ");


