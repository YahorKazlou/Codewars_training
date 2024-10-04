var wordCounter = function (text) {
  const wordsArray = text.replace(/[.,]/g, "").split(" ");

  const wordCount = {};

  wordsArray.forEach((word) => {
    const lowerCaseWord = word.toUpperCase();
    if (lowerCaseWord) {
      wordCount[lowerCaseWord] = (wordCount[lowerCaseWord] || 0) + 1;
    }
  });

  return { count: (word) => wordCount[word.toUpperCase()] || 0 };
};
