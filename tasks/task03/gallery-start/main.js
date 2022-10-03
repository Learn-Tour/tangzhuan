const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];
/* Declaring the alternative text for each image file */
const alts = {
  'pic1.jpg' : 'Closeup of a human eye',
  'pic2.jpg' : 'Rock that looks like a wave',
  'pic3.jpg' : 'Purple and white pansies',
  'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
  'pic5.jpg' : 'Large moth on a leaf'
}

/* Looping through images */
for(const pic of pics){
    const newImage = document.createElement('img');
    newImage.src = "images/"+ pic;
    newImage.setAttribute('alt', alts[pic]);
    newImage.onclick = e => {
        // console.log(e);
        displayedImage.setAttribute('src',e.target.src);
        displayedImage.setAttribute('alt',e.target.alt);
    }
    thumbBar.appendChild(newImage);
    // const newImage = document.createElement('img');
    // newImage.setAttribute('src', xxx);
    // newImage.setAttribute('alt', xxx);
    // thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',()=> {
    // rgba(0,0,0,0.5)
    // rgba(0,0,0,0.0)
    const state = btn.getAttribute('class');
    if(state == 'dark'){
        btn.setAttribute("class",'light');
        // overlay.setAttribute('style',"background-color: rgba(0,0,0,0.5);");
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
        btn.textContent ="Lighten";
    }else {
        btn.setAttribute("class",'dark');
        // overlay.setAttribute('style',"background-color: rgba(0,0,0,0);");
        overlay.style.backgroundColor = "rgba(0,0,0,0)"
        btn.textContent ="Darken";
    }

})
