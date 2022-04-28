const iptFast = document.getElementById("fast");
const iptCheap = document.getElementById("cheap");
const iptGood = document.getElementById("good");
var lastCheckbox = null;

function toggle(clickedCheckbox, otherCheckbox1, otherCheckbox2) {
  if (
    clickedCheckbox.checked &&
    otherCheckbox1.checked &&
    otherCheckbox2.checked
  ) {
    lastCheckbox.checked = false;
  }
  lastCheckbox = clickedCheckbox;
}

iptFast.addEventListener("change", function () {
  toggle(iptFast, iptCheap, iptGood);
});

iptCheap.addEventListener("change", function () {
  toggle(iptCheap, iptFast, iptGood);
});

iptGood.addEventListener("change", function () {
  toggle(iptGood, iptCheap, iptFast);
});
