var _clockBig = true;
var _images = ["amazon.jpg", "blackHole.jpg", "ljubljana.jpg", "london.jpg", "moon.jpg", "mountain.jpg", "newYork.jpg", "orca.jpg", "pianist.jpg", "snake.jpg", "sun.jpg", "war.jpg"];
var _names = ["Amazon<br>Lorem Ipsum", "Black Hole<br>Lorem Ipsum", "Ljubljana<br>Lorem Ipsum", "London<br>Lorem Ipsum", "Moon<br>Lorem Ipsum", "Mountain<br>Lorem Ipsum", "New York<br>Lorem Ipsum", "Orca<br>Lorem Ipsum", "Pianist<br>Lorem Ipsum", "Snake<br>Lorem Ipsum", "Sun<br>Lorem Ipsum", "War<br>Lorem Ipsum", ]

function mouseOver() {
    document.getElementById("clock").style.opacity = "0.7";
}

function mouseOut() {
    document.getElementById("clock").style.opacity = "0.3";
}

function moveClock() {
    let _clockElements = document.getElementsByClassName("clock");
    let _mains = document.getElementsByClassName("num-main");
    let _subs = document.getElementsByClassName("num-sub");
	var x = window.matchMedia("(max-width: 1600px)")
    if (_clockBig) {
		if (x.matches) {
			for(let i = 0; i < _clockElements.length; i++) {
            _clockElements[i].style.top = "112px";
            _clockElements[i].style.left = "112px";
            _clockElements[i].style.width = "200px";
            _clockElements[i].style.height = "200px";
			}
			for(let i = 0; i < _mains.length; i++) {
				_mains[i].style.width = "8px";
				_mains[i].style.height = "8px";
			}
			for(let i = 0; i < _subs.length; i++) {
				_subs[i].style.width = "5.6px";
				_subs[i].style.height = "5.6px";
			}
			document.getElementById("hPointer").style.width = "8px";
			document.getElementById("hPointer").style.height = "58px";
			document.getElementById("mPointer").style.width = "8px";
			document.getElementById("mPointer").style.height = "98px";
			document.getElementById("sPointer").style.width = "0.8px";
			document.getElementById("sPointer").style.height = "98.4px";
			document.getElementById("work-title").style.visibility = "hidden";
		}
		else {
			for(let i = 0; i < _clockElements.length; i++) {
            _clockElements[i].style.top = "140px";
            _clockElements[i].style.left = "140px";
            _clockElements[i].style.width = "250px";
            _clockElements[i].style.height = "250px";
			}
			for(let i = 0; i < _mains.length; i++) {
				_mains[i].style.width = "10px";
				_mains[i].style.height = "10px";
			}
			for(let i = 0; i < _subs.length; i++) {
				_subs[i].style.width = "7px";
				_subs[i].style.height = "7px";
			}
			document.getElementById("hPointer").style.width = "10px";
			document.getElementById("hPointer").style.height = "72.5px";
			document.getElementById("mPointer").style.width = "10px";
			document.getElementById("mPointer").style.height = "122.5px";
			document.getElementById("sPointer").style.width = "1px";
			document.getElementById("sPointer").style.height = "123px";
			document.getElementById("work-title").style.visibility = "hidden";
		}
		_clockBig = false;
    }
    else {
		if (x.matches) {
			for(let i = 0; i < _clockElements.length; i++) {
            _clockElements[i].style.top = "60%";
            _clockElements[i].style.left = "50%";
            _clockElements[i].style.width = "400px";
            _clockElements[i].style.height = "400px";
			}
			for(let i = 0; i < _mains.length; i++) {
				_mains[i].style.width = "16px";
				_mains[i].style.height = "16px";
			}
			for(let i = 0; i < _subs.length; i++) {
				_subs[i].style.width = "11.2px";
				_subs[i].style.height = "11.2px";
			}
			document.getElementById("hPointer").style.width = "16px";
			document.getElementById("hPointer").style.height = "116px";
			document.getElementById("mPointer").style.width = "16px";
			document.getElementById("mPointer").style.height = "196px";
			document.getElementById("sPointer").style.width = "1.6px";
			document.getElementById("sPointer").style.height = "196.8px";
			document.getElementById("work-title").style.visibility = "visible";
		}
		else {
			for(let i = 0; i < _clockElements.length; i++) {
            _clockElements[i].style.top = "50%";
            _clockElements[i].style.left = "50%";
            _clockElements[i].style.width = "500px";
            _clockElements[i].style.height = "500px";
			}
			for(let i = 0; i < _mains.length; i++) {
				_mains[i].style.width = "20px";
				_mains[i].style.height = "20px";
			}
			for(let i = 0; i < _subs.length; i++) {
				_subs[i].style.width = "14px";
				_subs[i].style.height = "14px";
			}
			document.getElementById("hPointer").style.width = "20px";
			document.getElementById("hPointer").style.height = "145px";
			document.getElementById("mPointer").style.width = "20px";
			document.getElementById("mPointer").style.height = "245px";
			document.getElementById("sPointer").style.width = "2px";
			document.getElementById("sPointer").style.height = "246px";
			document.getElementById("work-title").style.visibility = "visible";
		}
        _clockBig = true;
    }
}


var _current = new Date();
var _hPointer = document.createElement("div");
var _mPointer = document.createElement("div");
var _sPointer = document.createElement("div");

_hPointer.id = "hPointer";
_hPointer.classList.add("clock");
document.body.appendChild(_hPointer);
_hPointer.style.transform = "translate(-50%, -100%) rotate(" + ((_current.getHours() % 12)*30 + _current.getMinutes()*0.5 + _current.getSeconds()*0.0005) + "deg)";
_mPointer.id = "mPointer";
_mPointer.classList.add("clock");
document.body.appendChild(_mPointer);
_mPointer.style.transform = "translate(-50%, -100%) rotate(" + (_current.getMinutes()*6 + _current.getSeconds()*0.1 + _current.getMilliseconds()*0.0001) + "deg)";
_sPointer.id = "sPointer";
_sPointer.classList.add("clock");
document.body.appendChild(_sPointer);
_sPointer.style.transform = "translate(-50%, -100%) rotate(" + (_current.getSeconds()*6 + _current.getMilliseconds()*0.006) + "deg)";

document.body.style.backgroundImage = "url('assets/" + _images[Math.floor(_current.getMinutes()/5)] + "')";
document.getElementById("work-title").innerHTML = _names[Math.floor(_current.getMinutes()/5)];

setInterval(function() {
	let _clockElements = document.getElementsByClassName("clock");
    let _mains = document.getElementsByClassName("num-main");
    let _subs = document.getElementsByClassName("num-sub");
	var x = window.matchMedia("(max-width: 1600px)")
	var x = window.matchMedia("(max-width: 1600px)")
    if (!_clockBig) {
		if (x.matches) {
			for(let i = 0; i < _clockElements.length; i++) {
            _clockElements[i].style.top = "112px";
            _clockElements[i].style.left = "112px";
            _clockElements[i].style.width = "200px";
            _clockElements[i].style.height = "200px";
			}
			for(let i = 0; i < _mains.length; i++) {
				_mains[i].style.width = "8px";
				_mains[i].style.height = "8px";
			}
			for(let i = 0; i < _subs.length; i++) {
				_subs[i].style.width = "5.6px";
				_subs[i].style.height = "5.6px";
			}
			document.getElementById("hPointer").style.width = "8px";
			document.getElementById("hPointer").style.height = "58px";
			document.getElementById("mPointer").style.width = "8px";
			document.getElementById("mPointer").style.height = "98px";
			document.getElementById("sPointer").style.width = "0.8px";
			document.getElementById("sPointer").style.height = "98.4px";
			document.getElementById("work-title").style.visibility = "hidden";
		}
		else {
			for(let i = 0; i < _clockElements.length; i++) {
            _clockElements[i].style.top = "140px";
            _clockElements[i].style.left = "140px";
            _clockElements[i].style.width = "250px";
            _clockElements[i].style.height = "250px";
			}
			for(let i = 0; i < _mains.length; i++) {
				_mains[i].style.width = "10px";
				_mains[i].style.height = "10px";
			}
			for(let i = 0; i < _subs.length; i++) {
				_subs[i].style.width = "7px";
				_subs[i].style.height = "7px";
			}
			document.getElementById("hPointer").style.width = "10px";
			document.getElementById("hPointer").style.height = "72.5px";
			document.getElementById("mPointer").style.width = "10px";
			document.getElementById("mPointer").style.height = "122.5px";
			document.getElementById("sPointer").style.width = "1px";
			document.getElementById("sPointer").style.height = "123px";
			document.getElementById("work-title").style.visibility = "hidden";
		}
    }
    else {
		if (x.matches) {
			for(let i = 0; i < _clockElements.length; i++) {
            _clockElements[i].style.top = "60%";
            _clockElements[i].style.left = "50%";
            _clockElements[i].style.width = "400px";
            _clockElements[i].style.height = "400px";
			}
			for(let i = 0; i < _mains.length; i++) {
				_mains[i].style.width = "16px";
				_mains[i].style.height = "16px";
			}
			for(let i = 0; i < _subs.length; i++) {
				_subs[i].style.width = "11.2px";
				_subs[i].style.height = "11.2px";
			}
			document.getElementById("hPointer").style.width = "16px";
			document.getElementById("hPointer").style.height = "116px";
			document.getElementById("mPointer").style.width = "16px";
			document.getElementById("mPointer").style.height = "196px";
			document.getElementById("sPointer").style.width = "1.6px";
			document.getElementById("sPointer").style.height = "196.8px";
			document.getElementById("work-title").style.visibility = "visible";
		}
		else {
			for(let i = 0; i < _clockElements.length; i++) {
            _clockElements[i].style.top = "50%";
            _clockElements[i].style.left = "50%";
            _clockElements[i].style.width = "500px";
            _clockElements[i].style.height = "500px";
			}
			for(let i = 0; i < _mains.length; i++) {
				_mains[i].style.width = "20px";
				_mains[i].style.height = "20px";
			}
			for(let i = 0; i < _subs.length; i++) {
				_subs[i].style.width = "14px";
				_subs[i].style.height = "14px";
			}
			document.getElementById("hPointer").style.width = "20px";
			document.getElementById("hPointer").style.height = "145px";
			document.getElementById("mPointer").style.width = "20px";
			document.getElementById("mPointer").style.height = "245px";
			document.getElementById("sPointer").style.width = "2px";
			document.getElementById("sPointer").style.height = "246px";
			document.getElementById("work-title").style.visibility = "visible";
		}
    }
	_current = new Date();
    _hPointer.style.transform = "translate(-50%, -100%) rotate(" + ((_current.getHours() % 12)*30 + _current.getMinutes()*0.5 + _current.getSeconds()*0.0005) + "deg)";
    _mPointer.style.transform = "translate(-50%, -100%) rotate(" + (_current.getMinutes()*6 + _current.getSeconds()*0.1 + _current.getMilliseconds()*0.0001) + "deg)";
    _sPointer.style.transform = "translate(-50%, -100%) rotate(" + (_current.getSeconds()*6 + _current.getMilliseconds()*0.006) + "deg)";
    if (_current.getMinutes() % 5 == 0) {
        document.body.style.backgroundImage = "url('assets/" + _images[_current.getMinutes()/5] + "')";
        document.getElementById("work-title").innerHTML = _names[_current.getMinutes()/5];
    }
}, 1);
