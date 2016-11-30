document.addEventListener("DOMContentLoaded", function(event) {
    var randomImage = document.getElementById("randomImage");
    if(randomImage) {
        var images = ["ashton-kutcher", "barack-obama", "barack-obama-new", "chris-bosh", "malala-yousafzai", "marissa-mayer", "mark-zuckerberg", "sheryl-sandberg", "susan"];
        var thisImage = images[Math.floor(images.length * Math.random())];
        var theImage = document.createElement("img");
        theImage.src = "/posters/" + thisImage + ".jpg";
        randomImage.appendChild(theImage);
    }
});
