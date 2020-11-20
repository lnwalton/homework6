var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("New speed is " + video.playbackRate); 
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	if (video.currentTime >= video.duration - 5) {
		video.load()
	}
	else{
		video.currentTime = video.currentTime + 5
	};
	console.log("Current location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function (){
	if (document.querySelector("#mute").innerHTML == "Mute") {
		video.muted = true
		let mute = document.querySelector("#mute").innerHTML = "Unmute"
	}

	else {
		video.muted = false
		let mute = document.querySelector("#mute").innerHTML = "Mute"	};
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this.value);
	video.volume = this.value / 100;
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#old").addEventListener("click", function(){
	video.classList.add("oldTime")
});

document.querySelector("#original").addEventListener("click", function(){
	video.classList.remove("oldTime");
});
