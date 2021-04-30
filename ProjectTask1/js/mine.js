// Fawzy SliderJS section
var imgs = document.querySelectorAll(".sliderImg");
var fixedBox = document.getElementById("fixedBox");
var smallBox = document.getElementById("smallBox");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var closeBtn = document.getElementById("closeBtn");
var closeDiv = document.querySelectorAll(".close");

var clickedImg;
var index;
var imgsArr = [];

for(var i =0 ; i < closeDiv.length; i++){
  closeDiv[i].addEventListener("click", closeImg);
}

for(var i = 0; i <imgs.length; i++){
  imgsArr.push(imgs[i]);
  console.log(imgsArr[i]);
}

for(var i=0; i<imgs.length; i++){
  imgs[i].addEventListener("click",function(eventInfo){
      fixedBox.classList.replace("d-none", "d-block");
      clickedImg = eventInfo.target;
      index = imgsArr.indexOf(clickedImg);

      var imgSrc = clickedImg.getAttribute("src");
      
      smallBox.style.backgroundImage = `url(${imgSrc})`;
  });  
}



function getNextImg(){
  index = (index + 1)% imgs.length; //modulus incrementor
  clickedImg = imgsArr[index];
  var imgSrc = clickedImg.getAttribute("src");
  smallBox.style.backgroundImage = `url(${imgSrc})`;
}

function getPrevImg(){
  index = (index + imgs.length - 1)% imgs.length; //modulus decrementor
  clickedImg = imgsArr[index];
  var imgSrc = clickedImg.getAttribute("src");
  smallBox.style.backgroundImage = `url(${imgSrc})`;
}

function closeImg(){
  fixedBox.classList.replace("d-block", "d-none");
  fixedBox.style.transition = 'display 2s s';
}

nextBtn.addEventListener("click", getNextImg);

prevBtn.addEventListener("click", getPrevImg);

closeBtn.addEventListener("click", closeImg);



document.addEventListener("keyup", function(e){
  // console.log(e);
  console.log(fixedBox.getAttribute("class").includes("d-block"));
  if(fixedBox.getAttribute("class").includes("d-block")){
    if(e.key == "ArrowRight"){
      getNextImg();
    }
    else if(e.key == "ArrowLeft"){
      getPrevImg();
    }
    else if(e.key == "Escape"){
      closeImg();
    }
  }
})

