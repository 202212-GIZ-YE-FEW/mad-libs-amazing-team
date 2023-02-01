/**
 * DO NOT TOUCH ANY OF THE CODE BELOW HERE.
 * 
 * Or you will be very sad.
 */

/**
 * getRawStory is a function that returns a Promise which resolves to the text content of the story.txt file.
 * 
 * @returns {Promise} A Promise that resolves to the text content of the story.txt file.
 */
const getRawStory = (locale) => {
  // Make a fetch request to the "./story.txt" URL
  return fetch(`./lang/${locale}/story.txt`)
    // When the response is received, extract its text content
    .then(response => response.text());
};
