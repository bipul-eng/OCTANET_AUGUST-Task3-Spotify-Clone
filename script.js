let songindex=0;
let play=document.getElementById('play');
let myprogess=document.getElementById('myprogressbar');
let songitem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    
    {songname:"salam-e-ishq", filepath:"song/1.mp3", coverpath:"covers/2.jpg"},
    {songname:"salam-e-ishq", filepath:"song/2.mp3", coverpath:"covers/2.jpg"},
    {songname:"salam-e-ishq", filepath:"song/3.mp3", coverpath:"covers/2.jpg"},
    {songname:"salam-e-ishq", filepath:"song/4.mp3", coverpath:"covers/2.jpg"},
    {songname:"salam-e-ishq", filepath:"song/5.mp3", coverpath:"covers/2.jpg"},
    {songname:"salam-e-ishq", filepath:"song/6.mp3", coverpath:"covers/2.jpg"},
    {songname:"salam-e-ishq", filepath:"song/7.mp3", coverpath:"covers/2.jpg"}

]
songitem.forEach((element,i)=>{
console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[1].coverpath;
element.getElementsByClassName("songname")[0].innerText=songs[1].songname;
})
play.addEventListener('click',()=>
{
    if(audioelement.paused|| audioelement.currentTime<=0)
    {
        audioelement.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioelement.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

let audioelement= new Audio('song/1.mp3');
audioelement.addEventListener('timeupdate',()=>
{
progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
myprogess.value=progress;
})

myprogess.addEventListener('change',()=>{
audioelement.currentTime=myprogess.value*audioelement.duration/100;
})

const makeallplays=()=>
{
    Array.from(document.getElementsByClassName('songplays')).forEach((element)=>
    {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songplays')).forEach((element)=>
{
element.addEventListener('click',(e)=>
{
    makeallplays();
    index=parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-pause-circle');
audioelement.src='song/${index+1}.mp3.mp3';
audioelement.currentTime=0;
audioelement.play();
play.classList.remove('fa-circle-play');
play.classList.add('fa-pause-circle');
})
})