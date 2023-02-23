const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];

/* Declaring the alternative text for each image file */
const alts = ["eye", "wave", "flower", "egypt", "butterfly"];

/* Looping through images */

for(let i = 0; i < filenames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filenames[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", (event) => {
        displayedImage.setAttribute("src", newImage.getAttribute("src"));
        displayedImage.setAttribute("alt", newImage.getAttribute("alt"));
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", (event) => {
    const className = btn.getAttribute("class");
    if(className === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});