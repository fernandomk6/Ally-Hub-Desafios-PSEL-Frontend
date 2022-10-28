const getInvertedString = string => {
  const lastIndex = string.length - 1
  let invertedString = ''

  for (let index = lastIndex; index >= 0; index--) {
    const character = string[index]
    invertedString += character
  }

  return invertedString
}