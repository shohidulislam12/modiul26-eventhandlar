//option-1
       //direkly
// option 2 
function makered(){
    document.body.style.backgroundColor='red';
}
//option3
const makeblue=document.getElementById('makeblue');
makeblue.onclick= makebluef;
function makebluef(){
    document.body.style.backgroundColor='blue';
}
//option 3 another

const parpleButton=document.getElementById('make_parple');
parpleButton.onclick=function makeParple () {
    document.body.style.backgroundColor='purple'
}
   //option 4
   const pinkButton=document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)
function makePink(){
    document.body.style.backgroundColor='pink'
}
//another
const makeGreenButton=document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen()
{
    document.body.style.backgroundColor='green'
}
)
//another 
document.getElementById('make-goldenRod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod'
});

