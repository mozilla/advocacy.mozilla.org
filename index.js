var rectangle,
    radius = 18,
    iris = document.querySelector('.iris'),
    center;

function measureThings() {
    rectangle = iris.getBoundingClientRect();
    center = {
        x: (rectangle.width / 2) + (rectangle.left),
        y: (rectangle.height / 2) + (rectangle.top)
    };
}

function doMaths(x, y, radius) {
    var
        pythagoras = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)),
        coordinates = {
            x: x,
            y: y
        };
    if (pythagoras !== 0) {
        coordinates.x = x * radius / pythagoras;
        coordinates.y = y * radius / pythagoras;
    }
    return coordinates;
}

function translatePupil(coords) {
    var transform = 'translate(' + Math.round(coords.x) + 'px, ' + Math.round(coords.y) + 'px)';
    iris.style.transform = transform;
}

var mousemoveTime = Date.now();
var eye = document.querySelector('.privacy-eye');

function checkMovement() {
    var nowTime = Date.now();
    var diffTime = (nowTime - mousemoveTime) / 1000;
    if (diffTime > 3 && !eye.classList.contains('focus')) {
        iris.style.transform = 'translate(0, 0)';
        eye.classList.add('smooth');
        eye.classList.add('wander');
    }

    setTimeout(checkMovement, 1000);
}

checkMovement();

function onMouseMove(e) {
    mousemoveTime = Date.now();
    eye.classList.remove('wander');
    eye.classList.remove('smooth');
    measureThings();
    var pageY = e.pageY - window.pageYOffset;
    translatePupil(doMaths(e.pageX - center.x, pageY - center.y, radius));
}

function onMouseEnter() {
    eye.classList.add('smooth');
    eye.classList.add('focus');
    iris.style.transform = 'translate(0, 0)';
    window.removeEventListener("mousemove", onMouseMove);
}

function onMouseLeave() {
    eye.classList.remove('focus');
    eye.classList.remove('smooth');
    window.addEventListener("mousemove", onMouseMove);
}

if (iris) {
    eye.addEventListener("mouseenter", onMouseEnter);
    eye.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mousemove", onMouseMove);
}