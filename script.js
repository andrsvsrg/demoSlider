const bNext = document.querySelector(".next");
const bBefor = document.querySelector(".befor");
const img =document.querySelector(".imgSl");

const arr= [1,2,3,4,5];



bBefor.addEventListener("click", function() {
    let currentNmImg = +img.src.match(/(\w\.[a-z]{3})$/)[0].split("")[0]; 
    let currentIndex = arr.indexOf(currentNmImg);

    if(arr[currentIndex -1]) {
       img.src = arr[currentIndex-1] + ".png";
    }

    
});

bNext.addEventListener("click", function() {
    let currentNmImg = +img.src.match(/(\w\.[a-z]{3})$/)[0].split("")[0]; 
    let currentIndex = arr.indexOf(currentNmImg);

    if(arr[currentIndex +1]) {
       img.src = arr[currentIndex+1] + ".png";
    }

    
});
