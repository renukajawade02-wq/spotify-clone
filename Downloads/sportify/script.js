console.log('welcome to spotify');

//initialize the variables
let songindex=0;
let audioelement=new Audio('mp3_song.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songs=[
  {songname:"headlight",filepath:"song/mp3_song.mp3",coverpath:"covers/ 1.jpg"},
   {songname:"headlight",filepath:"song/mp3_song.mp3",coverpath:"covers/1.jpg"},
   {songname:"headlight",filepath:"song/mp3_song.mp3",coverpath:"covers/1.jpg"},
   {songname:"headlight",filepath:"song/mp3_song.mp3",coverpath:"covers/1.jpg"},
   {songname:"headlight",filepath:"song/mp3_song.mp3",coverpath:"covers/1.jpg"},
   {songname:"headlight",filepath:"song/mp3_song.mp3",coverpath:"covers/1.jpg"},
   {songname:"headlight",filepath:"song/mp3_song.mp3",coverpath:"covers/1.jpg"},
]

//handle play pause click
masterplay.addEventListener('click',()=>{
  if(audioelement.paused||audioelement.currentTime<=0){
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
  }
  else{
    audioelement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity=0;
  }
});

j
//listen to events
audioelement.addEventListener('timeupdate',()=>{
  console.log("timeupdate");
  //update seekbar
  progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
  console.log(progress);
myprogressbar.val
});