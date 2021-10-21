window.load = photos(1)
let image = 1;

function photos(n) {
    let allPhotos = 5;
    document.getElementById('slideshow').style.backgroundImage = "url('images/image"+n+".jpg')";
}

function next() {
    if (image < 5) {
        image++;
        photos(image);
    }
    else if (image == 5) {
        image = 1;
        photos(image);
    }
}

function previous() {
    if (image > 1) {
        image--;
        photos(image);
    }
    else if (image == 1) {
        image = 5;
        photos(image);
    }
}
