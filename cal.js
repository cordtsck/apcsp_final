
function openPage(pageName, elmnt, color) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    //specific tab content
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  //allows it t
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement(daynum) {
    let z = "myUl" + daynum;
    let y = "myInput" + daynum;
    let inside = document.getElementById(z);
    let out= document.getElementById(y);
    console.log(y);
    console.log(z);
    console.log(inside);
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput" + daynum).value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something to do");
    } else {
      document.getElementById("myUL"+ daynum).appendChild(li);
    }
    document.getElementById("myInput" +daynum).value = "";
    var span = document.createElement("SPAN");
    //create x to delete next to doc
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

  function newHighlight(daynum) {
    let x = "Ulmy" + daynum;
    let c = "myInput" + daynum;
    let inside = document.getElementById(x);
    let out= document.getElementById(c);
    console.log(c);
    console.log(x);
    console.log(inside);
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput" + daynum).value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something to do if it is IMPORTANT");
    } else {
      document.getElementById("ULmy"+ daynum).appendChild(li);
    }
    document.getElementById("myInput" +daynum).value = "";
    var span = document.createElement("SPAN");
    //create x to delete next to doc
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }


  // document.addEventListener("DOMContentLoaded", ready);