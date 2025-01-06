function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  }
  if (typeof x === 'string' || Array.isArray(x)) {
    return x.length; // Only access length if x is a string or array
  } else {
    return undefined; // Or throw an error, depending on desired behavior
  }
}