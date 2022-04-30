// write your code here
document.addEventListener('DOMContentLoaded',
    fetch('http://localhost:3000/ramens')
    .then(res=>res.json())
    .then(ramenDataObjects=>renderRamenImages(ramenDataObjects))
)
document.getElementById('submitBtn').addEventListener('click', (e)=>{ 
    e.preventDefault()
    let nameValue =document.getElementById('new-name').value
    let restaurantValue= document.getElementById('new-restaurant').value
    let imageValue = document.getElementById('new-image').value
    let ratingValue = document.getElementById('new-rating').value
    let commentValue =document.getElementById('new-comment').value


    let ramenObject= {
      name: nameValue, 
      restaurant: restaurantValue,
      image: imageValue,
      rating: ratingValue,
      comment: commentValue
    }
    createNewRamenEntry(ramenObject)
    
  })

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

function createNewRamenEntry(ramenObject){
   return fetch('http://localhost:3000/ramens',{
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
            Accept: "application/json"
            },
        body:JSON.stringify(ramenObject)
          })
    .then(res =>res.json())
    .then(ramen=>addNewRamen(ramen))
    }

function addNewRamen(ramen){
    const ramenMenuBar=document.getElementById('ramen-menu')
    let ramenPicture =document.createElement('img')
        ramenPicture.src = ramen.image
    
    ramenMenuBar.append(ramenPicture)
        ramenPicture.addEventListener('click', ()=>displayIndividualRamenInfo(ramen))
    }



 