var checked = document.querySelectorAll(".check");
for (var i = 0; i < checked.length; i++) {
    checked[i].addEventListener("click", function () {
        this.parentNode.style.color = "#ccc";
        this.style.color = "green";
        this.style.fontWeight = "900";
    });
}