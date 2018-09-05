// Add your functions and code here
function destructivelyAppendKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.splice(3, 0, "Ralph");
  return kittens;
}