


// const refreshRate = 1000 / 60;
// const maxXPosition = 400;
// let rect = document.getElementsByClassName('ground')[0];
// let speedX = 1;
// let positionX = 0;

// window.setInterval(() => {
//   positionX = positionX + speedX;
//   if (positionX > maxXPosition || positionX < 0) {
//     speedX = speedX * (-1);
//   }
//   rect.style.left = positionX + 'px';
// }, refreshRate);






// // let counter=5
// // for(let i=0;i<=n/75;i++){
// //     let img=document.createElement('img')
// //     img.classList.add('ground')
// //     img.src="./ground.png"
// //     // img.style.left=`${counter}%`
// //     counter+=5


// //     document.body.appendChild(img)
// // }


const ground= document.getElementsByClassName('ground')[0]
const logo= document.getElementsByClassName('logo')[0]
const bird=document.getElementsByClassName('bird')[0]

console.log(document.body.offsetWidth)

const n=document.body.offsetWidth

//  const refreshRate = 300 / 200;
//  const maxXPosition = 1400;
//  let speedX = 10;
// let positionX = 0

// window.setInterval(() => {
//   positionX = positionX + speedX;

// for(let i=0;i<=n/75;i++){
//     let img=document.createElement('img')
//     img.classList.add('ground')
//     img.src="./ground.png"
    
//     document.body.appendChild(img)

//     if (positionX > maxXPosition || positionX < 0) {
//         speedX = speedX * 1;
//       }
//       img.style.left = positionX + 'px';
// }
  
// }, refreshRate);


function birdFall(){
const refreshRate = 300 / 200;
const maxXPosition = 1400;
let speedX = 1;
let positionX = 0
    window.setInterval(()=>{
        positionX = positionX + speedX;

    if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * 1;
      }
      bird.style.top = positionX + 'px';


    }, refreshRate)

}



let clicked=0


function whenClicked(){

document.body.addEventListener('click', ()=>{
    clicked++
    console.log(clicked)
    logo.style.display='none'
    const birdImg= bird.getBoundingClientRect()
   
     if(clicked){
        bird.style.top=birdImg.top-100 +'px'
        
}

 

})

 

}

whenClicked()



// let loaded=0
// window.addEventListener('load',()=>{
//     loaded++
//     if(loaded){
//     whenClicked()
//     }
//     console.log("loaded")
// })


function fun(){

    document.body.addEventListener('load',()=>{

        const birdImg= bird.getBoundingClientRect()
        bird.style.top=birdImg.top+50 +'px'
        console.log('load')

    })
  

}



