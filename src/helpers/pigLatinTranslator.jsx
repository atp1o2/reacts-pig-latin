const pigLatinChecker = (word, n) => {
  const library = ['a', 'e', 'i', 'o', 'u', 'bl', 'br', 'ch', 'ck', 'cl', 'cr', 'dr', 'fl', 'fr', 'gh', 'gl', 'gr', 'ng', 'ph', 'pl', 'pr', 'qu', 'sc', 'sh', 'sk', 'sl', 'sm', 'sn', 'sp', 'st', 'sw', 'th', 'tr', 'tw', 'wh', 'wr', 'sch',  'scr',  "shr",  'sph',  'spl',  'spr',  'squ',  'str'];
  return library.includes(word.slice(0, n));
};

const pigLatinTranslator = (sentence) => {
  let translated_sentence = [];
  let regex = /\b/;
  let words = sentence.split(regex).join('|').toLowerCase().split('|');

  words.forEach(word => {
    if (word.match(regex)) {
      for (let n = 3; n > 0; n--) {
        if (pigLatinChecker(word, n)) {
          if (n === 1) { n = 0 }
            translated_sentence.push(word.substring(n, word.length) + word.toLowerCase().slice(0, n) + "ay");
            n = 0;
        } else if (n === 1) {
          translated_sentence.push(word.substring(n, word.length) + word.toLowerCase().slice(0, n) + "ay");
          n = 0;
        }
      }
    } else {
      translated_sentence.push(word);
    }
  });
  return translated_sentence.join("");
};

export { pigLatinTranslator };
