const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Programmer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Musician";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Human as Zaki Zaidan";
    }, 8000); // 1s = 1000 milliseconds
	setTimeout(() => {
        text.textContent = "Amolani.";
    }, 12000); // 1s = 1000 milliseconds
};

// Initial call to start the text rotation
textLoad();

// Repeat the text rotation every 16 seconds

setInterval(textLoad, 16000);