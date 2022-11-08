var video;
var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to false");
	console.log("Loop is set to false");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed up video");
	console.log("Speed is " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function(){
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0
	} else {
		video.currentTime = video.currentTime + 10;
	}
	console.log("Skip ahead");
	console.log("Video current time is " + video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted === false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Mute")
	} else if (video.muted === true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmute")
	}
})

document.querySelector("#slider").addEventListener("input", function(){
	var slider = document.querySelector("#slider");
	video.volume = slider.value * .01;
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
	console.log("The current value is " + slider.value * 0.01);
})

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
})












