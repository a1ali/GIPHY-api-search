const img = document.querySelector('img');
const btn = document.querySelector('.submit-container');
const search = document.querySelector('input');

async function getGIF() {
    try {
        let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=FPV2YZmDl68tTOF617F6usbRavLumZN9&s=${search.value}`, {mode: 'cors'})
        let parsedResponse = await response.json();
        img.src = parsedResponse.data.images.original.url; 
    }
    catch (err) {
        console.log(err);
        img.src = 'https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif';
    }
}

btn.addEventListener('click', () => {
    getGIF();
})

document.addEventListener("keyup", function(e) {

    if (e.key === 'Enter') {
        getGIF();
    }
  });
