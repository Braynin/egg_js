function stringIncludes(phrase1, phrase2) {
  if (phrase1.includes(phrase2)) {
    console.log(`True: La frase ${phrase2} esta dentro la frase ${phrase1}`);
  } else {
    console.log(
      `False: La frase ${phrase2} no esta dentro la frase ${phrase1}`
    );
  }
}

stringIncludes("hello world", "hello");
stringIncludes("hello world", "World");
