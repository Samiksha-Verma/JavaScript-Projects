const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const btn = document.querySelectorAll(".movie-list-item-btn");

arrows.forEach((arrow, i) =>{
    itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
     arrow.addEventListener("click", () =>{
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if(itemNumber-(7+clickCounter) + (7-ratio)>=0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
              -280}px)`;
        } else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter=0;
        }
    });  
});

// btn.forEach((button, i) =>{
//     console.log(i);
//     button.addEventListener('click',() =>{
//        const videoContainer = document.createElement('video');
//        videoContainer.classList.add('videos');
//        videoContainer.innerHTML = '<source src="https://youtu.be/6amIq_mP4xM"></source>';
//        btn.appendChild(videoContainer);
//     })
// })