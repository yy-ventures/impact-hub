export const getSummary = (string, length) => {
  const maxLength = length; // maximum number of characters to extract

  // take the 3rd paragraph as the summary & trim the string to the maximum length
  let trimmedString = string.innerText.substring(0, maxLength);

  //re-trim if we are in the middle of a word
  trimmedString = trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
  return trimmedString;
};
