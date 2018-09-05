 var kittens = ["Milo", "Otis", "Garfield"];
 
function destructivelyAppendKitten(name){
 kittens.push("Ralph")
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var kittens2 = ["Broom"];
  return(kittens.concat(kittens2));
}

function prependKitten(name){
 var kittens2 = kittens.splice(0, 0, "Arnold");
 return kittens2;
}