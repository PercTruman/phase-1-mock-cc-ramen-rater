// write your code here
document.addEventListener('DOMContentLoaded',
    fetch('http://localhost:3000/ramens')
    .then(res=>res.json())
    .then(ramenDataObjects=>renderRamenImages(ramenDataObjects))
)

function renderRamenImages(ramenObjects){
  const ramenMenuBar=document.getElementById('ramen-menu')

    ramenObjects.forEach(ramenObject=>{
        let ramenPicture =document.createElement('img')
        ramenPicture.src=`${ramenObject.image}`
        ramenMenuBar.append(ramenPicture)
        ramenPicture.addEventListener('click', ()=>displayIndividualRamenInfo(ramenObject))
    })
}

function displayIndividualRamenInfo(ramenObject){
    // let focusedInfoDiv =document.getElementById('ramen-detail')
    let focusedRamenPic =document.getElementById('detail-image')
        focusedRamenPic.src = ramenObject.image
    let focusedRamenName = document.getElementById('name')
        focusedRamenName.innerText = ramenObject.name
    let focusedRamenRestaurant = document.getElementById("restaurant")
        focusedRamenRestaurant.innerText = ramenObject.restaurant
    let focusedRamenRating = document.getElementById("rating-display")
        focusedRamenRating.innerText = ramenObject.rating
    let focusedRamenComment = document.getElementById("comment-display")
        focusedRamenComment.innerText = ramenObject.comment
}


 