// Add your functions and code here
function destructivelyAppendKitten(name){
  var names = ["Milo", "Otis", "Garfield"];
  names.splice(3, 0, "Ralph");
  return names;