var video;
video = document.querySelector("#player1"); // Assuming the video has an id of 'player1'
window.addEventListener("load", function() {
	console.log("Good job opening the window")
    //video = document.querySelector("#player1"); // Assuming the video has an id of 'player1'
    video.autoplay = false;
    video.pause(); // Ensure video is paused on load
    video.load(); // This will load the video as per the 'preload' attribute in the HTML.
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
    video.play();
    document.querySelector("#volume").textContent = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9; // Decrease speed by 10%
    console.log("New speed is " + video.playbackRate.toFixed(2));
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.9; // Increase speed proportionally
    console.log("New speed is " + video.playbackRate.toFixed(5));
});

document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0; // If skipping exceeds the length, restart from beginning
        console.log("Skip to start");
    } else {
        video.currentTime += 10; // Advance by 10 seconds
    }
    console.log("Current location is " + video.currentTime.toFixed(2)); // Log the current time
});

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted) {
        video.muted = false; // Unmute the video
        this.textContent = "Mute"; // Update the button text to "Mute"
    } else {
        video.muted = true; // Mute the video
        this.textContent = "Unmute"; // Update the button text to "Unmute"
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    var volumeLevel = this.value / 100; // Convert the slider value to a decimal
    video.volume = volumeLevel; // Set the video volume
    document.querySelector("#volume").textContent = this.value + "%"; // Update the volume information display
    console.log("Volume is: " + volumeLevel.toFixed(2) * 100 + "%"); // Log the volume to the console, formatted to two decimal places
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool"); // Add the 'oldSchool' class to the video
    console.log("Old school style applied");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
    console.log("Old school style removed");
})