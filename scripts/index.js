var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    setTimeout(() => {
        document.getElementById("navbar").style.top = "0";
    }, 200)
  } else {
    setTimeout(() => {
        document.getElementById("navbar").style.top = "-80px";
    }, 200)
  }
  prevScrollpos = currentScrollPos;
}

function openNav() {
    document.getElementById("curtain").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("curtain").style.width = "0%";
}


