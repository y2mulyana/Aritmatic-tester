let min = 1;
let max = 15;

let ansList = [];
let qsList = ['13 - 5'];
let results =[];

const oper = ["+", "-"];

// var toke = document.getElementById("demo");
// toke.innerHTML = generator(min, max);
// console.log('toke : ' + toke);

// let toke = generator(min, max);
// document.getElementById("demo").innerHTML = toke;
// qsList.push(toke);
// console.log('toke : ' + toke);
document.getElementById("box").value = 8;
//document.getElementById("qty").innerHTML = '0';

//qsList.push(toke);

function generator(min, max) {
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  let x = random(min, max);
  let y = random(min, max);

  //let z = random(min, max);
  let o = oper[Math.floor(Math.random() * oper.length)];

  return String(x) + " " + String(o) + " " + String(y);

  //return String(x) +  ' + '  + String(y);
}

let count = 0;

function answerForm() {
  pt = count ++;
  console.log('Count : ' + pt);
  //document.getElementById("qty").innerHTML = count;

  qsbox = document.getElementById("demo").innerHTML = generator(min, max);
  boxvalue = document.getElementById("box").value;

  ansList.push(boxvalue);
  //console.log(boxvalue);
  qsList.push(qsbox);

  //================ This code u/ checking =========
  

  //document.getElementById("qs").innerHTML = qsList.toString();
  //document.getElementById("tes").innerHTML = ansList.toString();

  document.getElementById("box").value = "";
  document.getElementById('qty').innerHTML = 'Soal ke : '+pt;

  console.log(ansList);
  console.log(qsList);
  console.log('qsbox : ' +qsbox);


  // Cek jawaban

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
