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
    ramenPicture.src=`${ramenObject.image}`
    console.log(ramenObject.image)
    let focusedInfoDiv =document.getElementById('ramen-detail')
   focusedInfoDiv.append(ramenObject.image,ramenObject.name, ramenObject.restaurant)
}


 