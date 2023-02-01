let locale = "en";
document.addEventListener("DOMContentLoaded", () => {
    setLocale();
    /**
     * All your other JavaScript code goes here, inside the function. Don't worry about
     * the `then` and `async` syntax for now.
     *
     * You'll want to use the results of parseStory() to display the story on the page.
     */

    // Get the raw story data as a Promise object
    getRawStory(locale)
    .then(
    // Once the raw story data is available, parse it
    parseStory
    )
    .then(
    // After the story has been parsed, pass it as an argument to the "showStory" function
    (processedStory) => {
        showStory(processedStory);
        // Call the "liveUpdate" function
        liveUpdate();
    }
    );
});