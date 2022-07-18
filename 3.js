let min = 1;
let max = 15;

let ansList = [];
let qsList = ['13 - 5'];
let results =[];

const oper = ["+", "-"];

document.getElementById("box").value = 8;

function generator(min, max) {
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  let x = random(min, max);
  let y = random(min, max);

  let o = oper[Math.floor(Math.random() * oper.length)];

  return String(x) + " " + String(o) + " " + String(y);
}

let count = 0;

function answerForm() {
  pt = count ++;
  console.log('Count : ' + pt);
  

  qsbox = document.getElementById("demo").innerHTML = generator(min, max);
  boxvalue = document.getElementById("box").value;

  ansList.push(boxvalue);
 
  qsList.push(qsbox);

  //================ This code u/ checking =========
   document.getElementById("box").value = "";
  document.getElementById('qty').innerHTML = 'Soal ke : '+pt;

  console.log(ansList);
  console.log(qsList);
  console.log('qsbox : ' +qsbox);


  // ========= Cek jawaban =========

  let regex = /([\+\-])/g;

  let depan = Number(qsList[pt].split(regex)[0]);
  console.log('depan : ' + depan);
  let belakang = Number(qsList[pt].split(regex)[2]);
  console.log('belakang : ' + belakang);
  let operator = qsList[pt].split(regex)[1];
  console.log('Operator : ' + operator);
  //console.log(4-7);
  
  let jaw = Number(ansList[pt]);
  console.log('jaw : '+jaw);
  console.log(ansList[pt]);


  if(operator == '+' && jaw==(depan+belakang)) {
    results.push('Betul');  
    console.log('Betul');
  } else if (operator == '+' && jaw!=(depan+belakang)){
    results.push('Salah');  
    console.log('Salah');
  } else if (operator == '-' && jaw==(depan-belakang)){
    results.push('Betul');   
    console.log('Betul');
  } else  {
    console.log('Salah');
    results.push('Salah');
  }
  console.log('Result : '+results);
  document.getElementById("jawab").innerHTML = results[pt];
  return false; // stop submit
}
