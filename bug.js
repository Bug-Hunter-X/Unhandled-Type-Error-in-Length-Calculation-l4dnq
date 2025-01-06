function foo(x){
  if (x === null) {
    return 0; // Handle null case
  }
  return x.length; // Potential error if x is not an array or string
}