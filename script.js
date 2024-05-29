// Select all elements with the class 'heart'
var heartIcon = document.querySelectorAll('.heart');
console.log(heartIcon);

heartIcon.forEach(function(icon) {

    console.log(icon.textContent);
    // Add a click event listener
    icon.addEventListener('click', function() {
        // Toggle the 'redLike' class on click
        icon.classList.toggle('redLike');
    });
});

var allImgs = document.getElementsByTagName('img');
console.log(allImgs)
// small imgs are 7 8 9

var div = document.querySelector('#changeDiv > #container');  // stying 

var headLineName = document.querySelector('#container h2');

var headLineText = document.querySelector('#container p');


allImgs[7].addEventListener('click', function() {
    div.style.backgroundImage = `
        linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), 
        url('https://mohamedreda112.github.io/Travelo/IMGS/egypt.webp')
    `;
   
    console.log("changed to egypt");

    headLineName.innerHTML = 'Egypt';
    headLineText.innerHTML = 'Pack Your Bags And Head To Egypt, Where The Pharaohs And Ancient Ancient Buildings Are.';

});

allImgs[8].addEventListener('click', function() {
    div.style.backgroundImage = `
        linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.3)), 
        url('https://mohamedreda112.github.io/Travelo/IMGS/indones-1.webp')
    `;
    console.log("changed to maldives");

    headLineName.innerHTML = 'Maldives';
    headLineText.innerHTML = 'Rest Your Eyes On The Natural Beauty Of The Maldives Amid The Sand, Seas And Blue Waters.';

});
   

allImgs[9].addEventListener('click', function() {
    div.style.backgroundImage = `
        linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
        url('https://mohamedreda112.github.io/Travelo/IMGS/italy-1.webp')
    `;
    console.log("changed to italy");

    headLineName.innerHTML = 'Italy';
    headLineText.innerHTML = 'Here There Is Beauty And Romance, In Italy On The Mountains Magic Is Born, Just Come To That Charming City.';

});

// animation using js on cards

// function load or scroll for cards

window.addEventListener("scroll", reveal);
function reveal() {

  let reveals = document.querySelectorAll(".cards .card");

  for(let i = 0; i < reveals.length ; i++) {

    let height = window.innerHeight;
    let revealPoint = 100;
    let revealTop = reveals[i].getBoundingClientRect().top;

    if (revealTop < height - revealPoint) {
      reveals[i].classList.add("activ");
    } else {
      reveals[i].classList.remove("activ");
    }
  }
}

// function load or scroll for gallery image 
//egypt,amestrdam left 
// londom dubia bottom
//maldeve and greece top

var revealleft_1 = document.querySelector('.egypt');
var revealleft_2 = document.querySelector('.Amesterdam');

var revealBottom_1 = document.querySelector('.london');
var revealBottom_2 = document.querySelector('.Dubai');

var revealtop_1 = document.querySelector('.Greece');
var revealtop_2 = document.querySelector('.Maldives');


// function for top items
window.addEventListener("scroll", function() {
  let height = window.innerHeight;
  let revealPoint =350;

  if (revealtop_1) {
      let revealTop_1_Position = revealtop_1.getBoundingClientRect().top;
      if (revealTop_1_Position < height - revealPoint) {
          revealtop_1.classList.add("top");
      } else {
          revealtop_1.classList.remove("top");
      }
  }

  if (revealtop_2) {
      let revealTop_2_Position = revealtop_2.getBoundingClientRect().top;
      if (revealTop_2_Position < height - revealPoint) {
          revealtop_2.classList.add("top");
      } else {
          revealtop_2.classList.remove("top");
      }
  }
});


// function for left items

window.addEventListener('scroll', function (){

  let height = window.innerHeight;
  let point = 100;

  if(revealleft_1 ){
    let revealLeft_1_Position = revealleft_1.getBoundingClientRect().top;
    if (revealLeft_1_Position < height - point){
        revealleft_1.classList.add('left');
      }
    else{
      revealleft_1.classList.remove('left');
    }
  }

  if(revealleft_2){
    let revealLeft_2_Position = revealleft_2.getBoundingClientRect().top;
    if(revealLeft_2_Position < height - point){
      revealleft_2.classList.add('left');
    }
    else{
      revealleft_2.classList.remove('left');
    }
  }
});

// function scrool bottom items

window.addEventListener("scroll" , function () {

  let point = 70;
  let height = window.innerHeight;

  if(revealBottom_1){
    let revealBottom_1_Position = revealBottom_1.getBoundingClientRect().top;
    if(revealBottom_1_Position < height - point){
      revealBottom_1.classList.add("bottom");
    }
    else {
      revealBottom_1.classList.remove("bottom");
    }
  }

  if(revealBottom_2){
    let revealBottom_2_Position = revealBottom_2.getBoundingClientRect().top;
    if(revealBottom_2_Position < height - point){
      revealBottom_2.classList.add("bottom");
    }
    else {
      revealBottom_2.classList.remove("bottom");
    }
  }

});