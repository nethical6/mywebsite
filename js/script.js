// Code from bugswriters website


function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

function getRandomImage() {
    path = '/pics/'
    var num = randomNumber(1000, 1194);
    var img = path + num + '.jpg';
    return img;
}
document.addEventListener('DOMContentLoaded', (event) => {
    var gal = document.getElementById('img-gallery');
	var img = document.createElement("img");
	img.src = getRandomImage();
	gal.appendChild(img);
    
});
