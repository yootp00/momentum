const images = ["0.jpg", "1.png", "2.png", "3.jpg","4.png",
 "5.png", "6.png", "7.jpg", "8.png",
 "9.jpg", "10.jpg", "11.jpg", "12.png", "13.jpg", "14.jpg"];

const chosenImages =images[Math.floor(Math.random() * images.length)];

function bgImage(){
    const url = "url('img/"+chosenImages+"')";
    document.body.style.backgroundImage = url;
    if(chosenImages ==="8.png")
    {
        document.body.style.color="black";
    }
}

bgImage();