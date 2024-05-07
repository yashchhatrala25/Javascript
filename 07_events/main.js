// document.getElementById("owl").onclick = function () {
//     alert('owl');
// };

// attachEvent()
// jQuery - on

// type, timestemp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shift, keyCode

// Bubbling (bottom to top)
// document.getElementById("images").addEventListener('click', function (e) {
//     console.log("clicked inside the ul");
// },false)

// document.getElementById("owl").addEventListener('click', function (e) {
//     console.log("owl clicked");
//     e.stopPropagation();
// },false)

// Capturing mode (top to bottom)
// document.getElementById("images").addEventListener('click', function (e) {
//     console.log("clicked inside the ul");
// },true)

// document.getElementById("owl").addEventListener('click', function (e) {
//     console.log("owl clicked");
// },true)

// document.getElementById('google').addEventListener('click', function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("Google Clicked");
// }, false)

document
  .querySelector("#images")
  .addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        let removeIt = e.target.parentNode;
        removeIt.remove()
    }
    // removeIt.parentNode.removeChild(removeIt);
  }, false);
