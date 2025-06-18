// aapne ek circle banavvanu 6e.tena mate ek div lai ne teni size ne equal rakhi ne tama border radius 50% rakhvani 6e.
// const circle1=document.createElement('div');
// circle1.style.width='20px';
// circle1.style.height='20px';
// circle1.style.borderRadius='50%';
// circle1.style.position='absolute'
// // have aa circle1 kya banvu joiye te random number decide karse.
// let random1=Math.floor(Math.random()*100);
// let random2=Math.floor(Math.random()*100);
// circle1.style.top=`${random1}vh`
// circle1.style.left=`${random2}vh`

// have aapne aa circle automatically screen ma game tya aave tevu karvanu 6e.
let randomnumber;
RandomNumber()

function CreateBubble(){
    // aapne aa circle body ma game tya mukavanu 6e.
    const body1=document.body;

    // aa body ma upar banave cicle ne mukvanu 6e.
    let circle1=document.createElement('div');
    circle1.style.width='80px';
    circle1.style.height='80px';
    circle1.style.borderRadius='50%';
    circle1.style.position='absolute'
    // have aa circle1 kya banvu joiye te random number decide karse.
    //aapne aa random1 and random2 ma random1 j khali 60 aave 
    let random1=Math.floor(Math.random()*(80-10+1))+10;
    // let random1=Math.floor(Math.random()*100);
    let random2=Math.floor(Math.random()*90);
    circle1.style.top=`${random1}vh`;
    circle1.style.left=`${random2}vw`;

    circle1.style.backgroundColor='blue'

    //have aa circle ne body me muki daiye
    body1.append(circle1)
    // console.log(random1,random2,circle1)

    // aa circle ne nikavva mate aapne aane ek class aapiye ane tena par queryselector lagavine aapne je aa class nu pahla aavse tene nikali devano 6e.
    circle1.setAttribute('class','round')
    // console.log(circle1.className)

    // have aa circle ma random number lakhelo ave 0 to 9. tena mate aa circle na innerHTML ma aa random number mukvu padse.
    let random3=Math.floor(Math.random()*10);
    circle1.innerHTML=random3

    // aama font ni size big kariye
    circle1.style.fontSize='60px';
    // aa font ne center ma lavvo padse.tena mate aana par display flex kari ne justify content center and align item center karvi padse.
    circle1.style.display='flex';
    circle1.style.justifyContent='center';
    circle1.style.alignItems='center'

    // circle random color na aave tena mate
    let random5=Math.floor(Math.random()*257);
    let random6=Math.floor(Math.random()*257);
    let random7=Math.floor(Math.random()*257);
    circle1.style.backgroundColor=`rgb(${random5},${random6},${random7})`;

    

    
}

setInterval(()=>{
    CreateBubble()
},2000)


//aa circle ne thime thime nikava pan padse.to setinterval lagaviye.
setInterval(() => {
    let round1=document.querySelector('.round');
    round1.remove()
    
}, 4000);

// let randomnumber;
function RandomNumber(){
    // random number ne aapne aa random1 id vala na InnerHTML ma plus kari devano and aa function 5 second ma farithi chale tevu karvanu 6e.
    let random4=Math.floor(Math.random()*10)
    let PutNumber=document.getElementById('random1');
    PutNumber.innerHTML=`Click ON This Number:${random4}`;
    randomnumber=random4;

    // aa random4 ne randomnumber ma put kari daiye check karva mate 
    
}

setInterval(()=>{
    RandomNumber()
},4000)


let score=0;
// have aapne aa body par addeveventlistener lagavi ne check kariye ke aa bubble par click karvathi aapana score ma increment thay thase and jo wrong hase to decrement thase. and aa bubble te jagya thi nikali javo joiye.
document.body.addEventListener('click',(e)=>{
    // console.log(e.target)
    let score1=document.getElementById('score1');
    console.log(e.target.innerHTML)
    if (Number(e.target.innerHTML)===randomnumber){
        // to score ma increment karvano 6e.
        score+=1
        
        score1.innerHTML=`SCORE:${score}`
        // jo number same hase to aapne ahiya random number pan change karvo padse.
        RandomNumber()
        console.log('right')

    }
    else {
        score-=1
        score1.innerHTML=`SCORE:${score}`
    }

    // je event.target par click kare tene aapne remove kari devani 6e.
    e.target.remove()
})






