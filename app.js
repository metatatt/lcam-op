var onButton = document.getElementById("on-button");
var offButton = document.getElementById("off-button");
var mediaElement = document.getElementById("video-element");
var h2Element = document.querySelector(".hero-text");

window.onload = function() {
      // Set the media element to a black rectangle with dimensions 1024x600
      mediaElement.style.width = "1024px";
      mediaElement.style.height = "600px";
      mediaElement.style.backgroundColor = "black";

      // Set OFF button to active state and ON button to inactive state
      offButton.classList.add("active");
      onButton.classList.remove("active");

      // Update h2 text
      h2Element.innerText = "";
      h2Element.classList.remove("flicker");
      h2Element.classList.add("flicker");
}

onButton.addEventListener("click", function() {
    // Set ON button to active state and OFF button to inactive state
    onButton.classList.add("active-button");
    offButton.classList.remove("active-button");
    offButton.classList.add("inactive-button");
  
    // Fetch the JSON data from the URL
    fetch('https://practiz2023public.blob.core.windows.net/mail/CameraMaster.json')
      .then(response => response.json())
      .then(data => {
        // Set the media element to the trained model
        mediaElement.src = data.camera_id[0].trained_model;
        mediaElement.style.width = "1024px";
        mediaElement.style.height = "600px";
        mediaElement.play();
  
        // Change the h2 text to the camera name with a text flicker effect
        h2Element.textContent = "  -" + data.camera_id[0].wip.name + "- ";
        h2Element.classList.add("flicker");
      });

  setTimeout(function() {
  // Set the media element to the LineCAM video clip and start playback
  mediaElement.src = "https://practiz2023public.blob.core.windows.net/train-dataset/LineCAM_wide.mp4#t=4,50";
  mediaElement.play();
   }, 2500);

  // Change the h2 text to "Live LineCAM Video" with text flicker effect
  h2Element.textContent = "  -Live Now-";
  h2Element.classList.add("flicker");
});

offButton.addEventListener("click", function() {
  // Set OFF button to active state and ON button to inactive state
  offButton.classList.add("active-button");
  onButton.classList.remove("active-button");
  onButton.classList.add("inactive-button");

  // Set media element to black rectangle with dimensions 1024x600
  mediaElement.src = "";
  mediaElement.removeAttribute("autoplay");
  mediaElement.removeAttribute("loop");
  mediaElement.removeAttribute("controls");
  mediaElement.muted = true;
  mediaElement.style.width = "1024px";
  mediaElement.style.height = "600px";
  mediaElement.style.backgroundColor = "black";

  // Update h2 text
  h2Element.innerText = "";
  h2Element.classList.remove("flicker");
})