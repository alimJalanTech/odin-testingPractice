const add = (a, b) => {
    return a + b;
  }
  
  const sub = (a, b) => {
    return a - b;
  }
  
  const multi = (a, b) => {
    return a * b;
  }
  
  const div = (a, b) => {
    if (b === 0) return null;
    return a / b;
  }
  
  export { add, sub, multi, div };
  