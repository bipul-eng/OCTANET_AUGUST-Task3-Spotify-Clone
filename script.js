let songindex=0;
let audioelement= new Audio('song/1.mp3.mp3');
let play=document.getElementById('play');
let myprogess=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitem=Array.from(document.getElementsByClassName('songItem'));

let duration=(audioelement.duration);

let songs=[
    
    {songName:"Tere Karib Hoke", filepath:"song/1.mp3", coverpath:"covers/dasara.jpg"},
    {songName:"Hamdard", filepath:"song/2.mp3", coverpath:"covers/cover1.avif"},
    {songName:"10 Bahane", filepath:"song/3.mp3", coverpath:"covers/pathan.avif"},
    {songName:"Suit Karda", filepath:"song/4.mp3", coverpath:"covers/Hidimba-feat.avif"},
    {songName:"Teri Aankhein", filepath:"song/5.mp3", coverpath:"covers/blind.jpg"},
    {songName:"2 Jism", filepath:"song/6.mp3", coverpath:"covers/bhediya.jpg"},
    {songName:"Tu Pyar hai", filepath:"song/7.mp3", coverpath:"covers/ved.webp"}

]
songitem.forEach((element,i)=>{
console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverpath;
element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})


audioelement.addEventListener('timeupdate',()=>
{
progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
myprogess.value=progress;
if(audioelement.currentTime==audioelement.duration)
{
  play.classList.add('fa-circle-play');
  play.classList.remove('fa-circle-pause');
  gif.style.opacity=0;
  makeallplays();
}
})

myprogess.addEventListener('change',()=>{
audioelement.currentTime=myprogess.value*audioelement.duration/100;
})

const makeallplays=()=>
{
    Array.from(document.getElementsByClassName('songplays')).forEach((element)=>
    {
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');
    
    })
}
Array.from(document.getElementsByClassName('songplays')).forEach((element)=>
{
element.addEventListener('click',(e)=>
{
  if(audioelement.paused|| audioelement.currentTime<=0)
  {
    makeallplays();
    songindex=parseInt(e.target.id);
    audioelement.src=`song/${songindex+1}.mp3.mp3`;
    mastersongname.innerText=songs[songindex].songName;
    audioelement.play();
    gif.style.opacity=1;
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
  }
  else
  {
    makeallplays();
    audioelement.pause();
    gif.style.opacity=0;
    play.classList.remove('fa-circle-pause');
    play.classList.add('fa-circle-play');
    e.target.classList.remove('fa-circle-pause');
    e.target.classList.add('fa-circle-play');
  }
})
})
  play.addEventListener('click',()=>
{
    if(audioelement.paused|| audioelement.currentTime<=0)
    {
        audioelement.play();
        mastersongname.innerText=songs[songindex].songName;
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        makeallplays();
        document.getElementById(`${songindex}`).classList.add('fa-circle-pause');
        document.getElementById(`${songindex}`).classList.remove('fa-circle-play');
    }
  
    else
    {
        audioelement.pause();
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
        gif.style.opacity=0;
        document.getElementById(`${songindex}`).classList.add('fa-circle-pause');
        document.getElementById(`${songindex}`).classList.remove('fa-circle-play');
        makeallplays();
    }
})
document.getElementById('next').addEventListener('click',()=>
{
  if(songindex>=7)
  {
    songindex = 0;
  }  
  else
  {
    songindex += 1;
  }
  audioelement.src=`song/${songindex+1}.mp3.mp3`;
  mastersongname.innerText=songs[songindex].songName;
  audioelement.currentTime=0;
  audioelement.play();
  gif.style.opacity=1;
  play.classList.remove('fa-circle-play');
  play.classList.add('fa-circle-pause');
  makeallplays();
  document.getElementById(`${songindex}`).classList.add('fa-circle-pause');
  document.getElementById(`${songindex}`).classList.remove('fa-circle-play');
})

document.getElementById('previous').addEventListener('click',()=>
{
  if(songindex<=0)
  {
    songindex=0;
  }  
  else
  {
    songindex -= 1;
  }
  audioelement.src=`song/${songindex+1}.mp3.mp3`;
  mastersongname.innerText=songs[songindex].songName;
  document
  audioelement.currentTime=0;
  audioelement.play();
  play.classList.remove('fa-circle-play');
  play.classList.add('fa-circle-pause');
  makeallplays();
  document.getElementById(`${songindex}`).classList.add('fa-circle-pause');
  document.getElementById(`${songindex}`).classList.remove('fa-circle-play');
})
if(audioelement.paused)
{
  play.classList.add('fa-circle-play');
}
console.log(audioelement.currentTime);