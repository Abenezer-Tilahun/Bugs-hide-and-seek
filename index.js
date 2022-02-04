let calls = "";

function Abenezer(str) {
  str += 'Abenezer';
  return Beyk(str);
  //return str;
}

function Said(str) {
  str += "Said";
  return Samuel(str);
}

function Samuel(str) {
  str + "Samuel";
  return str;
}

function Beyk(str) {
  str += "Beyk";
  return Said(str);
}


// Uncomment these to check your work!
 calls = Abenezer(calls);
 console.log(calls); // should log: 'AbenezerBeykSaidSamuel

