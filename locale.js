let transDetails = {};
async function setLocale() {
  response = await fetch(`/lang/${locale}/details.json`);
  transDetails = await response.json();
  translatePage();
}

function translatePage(){
  document
    .querySelectorAll("[data-key]")
    .forEach(elem => {
        const key = elem.getAttribute("data-key");
        const translation = transDetails[key];
        elem.innerText = translation;
    });
}

const flipImage = (dir) => {
  return `url(./images/funny_beaver_${dir}.png)`;
}


const langSwicher = document.querySelector(".lang-switcher");
langSwicher.addEventListener("change", e => {
    locale = e.target.value;
    document.body.dir = locale === "en" ? "ltr":"rtl";
    document.querySelector(".madLibsEdit").style.setProperty('--background-image', flipImage(document.body.dir))
    setLocale();
    getRawStory(locale)
    .then(parseStory)
    .then((processedStory) => {
        showStory(processedStory);
        liveUpdate();
    });
});




