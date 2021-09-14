function ensure(value) {
  if (value === undefined) {
    throw new Error("no arguments");
  }

  return value;
}
 console.log(ensure("Ehsan"));
 console.log(ensure());// Throws error
