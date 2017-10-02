
window.onload = function() {

var text = document.getElementById("text");
var btn = document.getElementById("btn");
var liste = document.getElementById("liste");

btn.addEventListener("click",ekle);

function ekle () {
    var li = document.createElement("li");
    li.innerHTML = text.value;
    li.appendChild(silBtnEkle());
    liste.appendChild(li);
};

function silBtnEkle () {
    var silButton = document.createElement("button");
    silButton.innerText="Sil";
    silButton.addEventListener("click",sil);

    return silButton;
}

function sil () {

    var parent = this.parentNode.parentNode;
    var child = this.parentNode

    parent.removeChild(child);
}

}