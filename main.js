function telephoneCheck(str) {
  const exp = /^(1[\s]?)?((?:[(](?:[2-9]{1}\d{2})[)][\s]?)|(?:(?:[2-9]{1}\d{2})[\s-]?)){1}([2-9]{1}\d{2}|[2-9]{1}\d{2}[\s-]?){1}([0-9]{4}){1}$/im;
  return exp.test(str);
   
  }
  
  telephoneCheck("555-555-5555");