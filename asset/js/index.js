let _li = document.querySelectorAll("#images li");
let _liCarsList = document.getElementsByClassName("carsList");
let _h1 = document.getElementById("h1");
function para(self) {
  let txt = self.innerText;

  for (i = 0; i < _li.length; i++) {
    let temp = _li[i].getAttribute("data-cat");

    if (_liCarsList[i]) {
      _liCarsList[i].classList.remove("active");
    }
    self.classList.add("active");
    _h1.innerText = self.innerText;

    if (txt == "ALLPICTURES") {
      _li[i].classList.add("show");
      _li[i].classList.remove("hide");
      _li[i].classList.add("col-4");
      _li[i].classList.remove("col-6");
      _li[i].classList.remove("h");
      _li[i].classList.add("h550");
    } else {
      if (txt == temp) {
        _li[i].classList.add("show");
        _li[i].classList.remove("hide");
        _li[i].classList.add("col-6");
        _li[i].classList.remove("col-4");
        _li[i].classList.add("h");
        _li[i].classList.remove("h550");
      } else {
        _li[i].classList.add("hide");
        _li[i].classList.remove("show");
        _li[i].classList.remove("col-6");
        _li[i].classList.add("col-4");
        _li[i].classList.remove("h");
        _li[i].classList.add("h550");
      }
    }
  }
}
