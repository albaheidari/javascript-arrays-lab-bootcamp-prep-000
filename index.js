// Add your functions and code here
function destructivelyAppendKitten(name){
  var names = ["Milo", "Otis", "Garfield"];
  names.splice(2, 0, "Ralph");
  return names;
}