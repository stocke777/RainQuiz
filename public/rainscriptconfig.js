function rain() {
    const image = document.getElementById("background");
    image.onload = function () {
        var rainyday = new RainyDay({
            image: this,
            blur: 0.3,
        })
        RainyDay.rain([
            [5, 2, 2],

        ], 0)
    }

    image.src = src;

}

const backgroundImages = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"]
let index = 0
let src = backgroundImages[index]

function changeRain() {
    index += 1
    index %= backgroundImages.length
    src = backgroundImages[index]
    rain()
};

console.log("rain script ran")

rain();