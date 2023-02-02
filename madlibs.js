/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */

// matching delimiter
const delimiterDict = {
  dot: ".",
  comma: ",",
};

function isDelimiter(char) {
  return char === delimiterDict["dot"] || char === delimiterDict["comma"];
}
function parseStory(rawStory) {
  // Your code here.

  // matching pos
  const posDict = {
    "[n]": "noun",
    "[v]": "verb",
    "[a]": "adjective",
  };
  const parsedStory = [];
  const splittedWords = rawStory.split(/([\s,.])/gm);
  splittedWords.forEach((elem) => {
    const posType = elem.match(/\[[nva]\]/g);
    const wordObj = {};
    if (posType) {
      wordObj.word = elem.replace(posType, "");
      wordObj.pos = posDict[posType];
    } else wordObj.word = elem;
    parsedStory.push(wordObj);
  });
  return parsedStory;
  // return {}; // This line is currently wrong :)
}

function showStory(processedStory) {
  // Grape DOM elements
  const editDOM = document.querySelector(".madLibsEdit");
  const previewDOM = document.querySelector(".madLibsPreview");

  // Reset two DOM elements
  editDOM.innerHTML = "";
  previewDOM.innerHTML = "";

  processedStory.forEach((wordObj, index) => {
    if (wordObj.hasOwnProperty("pos")) {
      //? Input For Edit
      const blankEdit = document.createElement("input");
      blankEdit.type = "text";
      blankEdit.maxLength = "20";
      blankEdit.placeholder = `${wordObj.pos}`;
      blankEdit.setAttribute("onkeypress", "return event.which != 32");
      editDOM.appendChild(blankEdit);

      //? Input For Preview
      const blankPrev = document.createElement("span");
      blankPrev.innerHTML = `[${wordObj.pos}]`;
      blankPrev.classList.add("prev-blank");
      previewDOM.appendChild(blankPrev);
    } else {
      editDOM.innerHTML += `${wordObj.word}`;
      previewDOM.innerHTML += `${wordObj.word}`;
    }
  });
}

function liveUpdate() {
  //! After parsing, we have list of blanks for edit and preview
  const editBlanks = document.querySelectorAll(".madLibsEdit input");
  const prevBlanks = document.querySelectorAll(".madLibsPreview span");

  editBlanks.forEach((input, index) => {
    input.addEventListener("input", e => {
      prevBlanks[index].innerHTML = e.target.value;
    });
  });
}

// Start of hotkeys code

// Check if the addEventListener method is supported by the browser
if (document.addEventListener) {
  // This event listener listens for the "keyup" event on the document
  document.addEventListener("keyup", function (event) {
    // Check if the "keyCode" property of the event is equal to 13 (Enter key)
    if (event.keyCode === 13) {
      // Select all elements with the class "madLibsEdit input" and store them in the "fields" variable
      const fields = document.querySelectorAll(".madLibsEdit input");

      // If no elements with the class "madLibsEdit input" are found, show an error message and return
      if (!fields.length) {
        console.error("No fields found with the class 'madLibsEdit input'");
        return;
      }

      // Get the currently focused field by checking the "event.target" property and finding its index in the "fields" array
      let currentField = event.target;
      let currentIndex = Array.from(fields).indexOf(currentField);

      // Get the next field in the "fields" array, if there is one
      let nextField = fields[currentIndex + 1];

      // If a next field exists, set its focus by calling its "focus()" method
      if (nextField) {
        nextField.focus();
      }
      // If there is no next field, show a message indicating that there are no more fields to focus on
      else {
        console.log("No more fields to focus on");
      }
    }
  });
}
// If the addEventListener method is not supported by the browser, show an error message
else {
  console.error(
    "The 'addEventListener' method is not supported by this browser"
  );
}

//! adding actions
//* cancel button
const cancel = document.getElementById("cancel-btn");
cancel.innerText = "reset";

cancel.addEventListener('click', () => {
  const editBlanks = document.querySelectorAll(".madLibsEdit input");
  const prevBlanks = document.querySelectorAll(".madLibsPreview span");
  editBlanks.forEach(item => {
    item.value = ""
  });
  prevBlanks.forEach(item => {
    item.innerHTML = ""
  });
});

/**
 * An array of all elements with class 'madLibsEdit'
 * @type {NodeList}
 */
const madLibsEdit = document.querySelectorAll('.madLibsEdit');

/**
 * Add a mouseover event listener to each element with class 'madLibsEdit'
 * that focuses on the first input element within it.
 */
madLibsEdit.forEach(function(element) {
  element.addEventListener('mouseover', function() {
    /**
     * The first input element within the hovered element
     * @type {HTMLElement}
     */
    const firstInput = element.querySelector('input');
    firstInput.focus();
  });
});
