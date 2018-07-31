var position = 0;
var playlist;
var video;

window.onload = function() {
	playlist = ["jsPDF1.mp4", 
				"jsPDF2.mp4", 
				"jsPDF3.mp4",
				"jsPDF4.mp4",
				];
	video = document.getElementById('video');
	if(video){
		video.volume = 0.1;
		video.addEventListener("ended", nextVideo,false);

		video.src = playlist[position];
		video.load();
		video.play();
	}
};

function nextVideo() {
	position++;
	if (position >= playlist.length) {
		position = 0;
	}
	video.src = playlist[position];
	video.load();
	video.play();
}