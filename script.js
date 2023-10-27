var draggableElements = document.getElementsByClassName("draggable");

for (var i = 0; i < draggableElements.length; i++) {
  dragElement(draggableElements[i]);
}

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    pos3 = parseInt(e.clientX);
    pos4 = parseInt(e.clientY);
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
    return false;
  }

  function elementDrag(e) {
    e = e || window.event;
    pos1 = pos3 - parseInt(e.clientX);
    pos2 = pos4 - parseInt(e.clientY);
    pos3 = parseInt(e.clientX);
    pos4 = parseInt(e.clientY);
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    console.log(elmnt.offsetTop);
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var draggableElements2 = document.getElementsByClassName("draggable2");

for (var i = 0; i < draggableElements2.length; i++) {
  dragElement(draggableElements2[i]);
}

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    pos3 = parseInt(e.clientX);
    pos4 = parseInt(e.clientY);
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
    return false;
  }

  function elementDrag(e) {
    e = e || window.event;
    pos1 = pos3 - parseInt(e.clientX);
    pos2 = pos4 - parseInt(e.clientY);
    pos3 = parseInt(e.clientX);
    pos4 = parseInt(e.clientY);
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    console.log(elmnt.offsetTop);
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document
  .querySelector("#desktopmapp1header")
  .addEventListener("dblclick", openNewFolder1);

function openNewFolder1() {
  if (document.querySelector("#window1").classList.contains("draggable2")) {
    document.querySelector("#window1").classList.remove("draggable2");
    document.querySelector("#window1").classList.add("draggable");
    document.querySelector("#window1").classList.add("front");
    document.querySelector("#window1").classList.remove("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window1").classList.remove("draggable");
    document.querySelector("#window1").classList.add("draggable2");
  }
}

document
  .querySelector("#window1mapp1header")
  .addEventListener("dblclick", openNewFolderOne2);

function openNewFolderOne2() {
  if (document.querySelector("#window1-2").classList.contains("draggable2")) {
    document.querySelector("#window1-2").classList.remove("draggable2");
    document.querySelector("#window1-2").classList.add("draggable");
    document.querySelector("#window1-2").classList.add("front");
    document.querySelector("#window1-2").classList.remove("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
  } else {
    document.querySelector("#window1-2").classList.remove("draggable");
    document.querySelector("#window1-2").classList.add("draggable2");
  }
}

document
  .querySelector("#desktopmapp2header")
  .addEventListener("dblclick", openNewFolder2);

function openNewFolder2() {
  if (document.querySelector("#window2").classList.contains("draggable2")) {
    document.querySelector("#window2").classList.remove("draggable2");
    document.querySelector("#window2").classList.add("draggable");
    document.querySelector("#window2").classList.add("front");
    document.querySelector("#window2").classList.remove("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window2").classList.remove("draggable");
    document.querySelector("#window2").classList.add("draggable2");
  }
}

document
  .querySelector("#window2mapp1header")
  .addEventListener("dblclick", openNewFolderTwo1);

function openNewFolderTwo1() {
  if (document.querySelector("#window2-2").classList.contains("draggable2")) {
    document.querySelector("#window2-2").classList.remove("draggable2");
    document.querySelector("#window2-2").classList.add("draggable");
    document.querySelector("#window2-2").classList.add("front");
    document.querySelector("#window2-2").classList.remove("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
  } else {
    document.querySelector("#window2-2").classList.remove("draggable");
    document.querySelector("#window2-2").classList.add("draggable2");
  }
}

document
  .querySelector("#window2mapp2header")
  .addEventListener("dblclick", openNewFolderTwo2);

function openNewFolderTwo2() {
  if (document.querySelector("#window2-3").classList.contains("draggable2")) {
    document.querySelector("#window2-3").classList.remove("draggable2");
    document.querySelector("#window2-3").classList.add("draggable");
    document.querySelector("#window2-3").classList.add("front");
    document.querySelector("#window2-3").classList.remove("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
  } else {
    document.querySelector("#window2-3").classList.remove("draggable");
    document.querySelector("#window2-3").classList.add("draggable2");
  }
}

document
  .querySelector("#desktopmapp3header")
  .addEventListener("dblclick", openNewFolder3);

function openNewFolder3() {
  if (document.querySelector("#window3").classList.contains("draggable2")) {
    document.querySelector("#window3").classList.remove("draggable2");
    document.querySelector("#window3").classList.add("draggable");
    document.querySelector("#window3").classList.add("front");
    document.querySelector("#window3").classList.remove("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window3").classList.remove("draggable");
    document.querySelector("#window3").classList.add("draggable2");
  }
}

document.querySelector("#window3mapp1header")
        .addEventListener("dblclick", openNewFolderThree1);

function openNewFolderThree1() {
  if (document.querySelector("#window3-1").classList.contains("draggable2")) {
    document.querySelector("#window3-1").classList.remove("draggable2");
    document.querySelector("#window3-1").classList.add("draggable");
    document.querySelector("#window3-1").classList.add("front");
    document.querySelector("#window3-1").classList.remove("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
  } else {
    document.querySelector("#window3-1").classList.remove("draggable");
    document.querySelector("#window3-1").classList.add("draggable2");
  }
}

document.querySelector("#desktopmapp4header")
        .addEventListener("dblclick", openNewFolder4);

function openNewFolder4() {
  if (document.querySelector("#window4").classList.contains("draggable2")) {
    document.querySelector("#window4").classList.remove("draggable2");
    document.querySelector("#window4").classList.add("draggable");
    document.querySelector("#window4").classList.add("front");
    document.querySelector("#window4").classList.remove("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window4").classList.remove("draggable");
    document.querySelector("#window4").classList.add("draggable2");
  }
}

document.querySelector("#window4mapp1header")
        .addEventListener("dblclick", openNewFolderFour1);

function openNewFolderFour1() {
  if (document.querySelector("#window4-1").classList.contains("draggable2")) {
    document.querySelector("#window4-1").classList.remove("draggable2");
    document.querySelector("#window4-1").classList.add("draggable");
    document.querySelector("#window4-1").classList.add("front");
    document.querySelector("#window4-1").classList.remove("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
  } else {
    document.querySelector("#window4-1").classList.remove("draggable");
    document.querySelector("#window4-1").classList.add("draggable2");
  }
}

document.querySelector("#desktopmapp5header")
        .addEventListener("dblclick", openNewFolder5);

function openNewFolder5() {
  if (document.querySelector("#window5").classList.contains("draggable2")) {
    document.querySelector("#window5").classList.remove("draggable2");
    document.querySelector("#window5").classList.add("draggable");
    document.querySelector("#window5").classList.add("front");
    document.querySelector("#window5").classList.remove("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window5").classList.remove("draggable");
    document.querySelector("#window5").classList.add("draggable2");
  }
}

document.querySelector("#window5mapp1header")
        .addEventListener("dblclick", openNewFolderFive1);

function openNewFolderFive1() {
  if (document.querySelector("#window5-1").classList.contains("draggable2")) {
    document.querySelector("#window5-1").classList.remove("draggable2");
    document.querySelector("#window5-1").classList.add("draggable");
    document.querySelector("#window5-1").classList.add("front");
    document.querySelector("#window5-1").classList.remove("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
  } else {
    document.querySelector("#window5-1").classList.remove("draggable");
    document.querySelector("#window5-1").classList.add("draggable2");
  }
}

document
  .querySelector("#desktopmapp6header")
  .addEventListener("dblclick", openNewFolder6);

function openNewFolder6() {
  if (document.querySelector("#window6").classList.contains("draggable2")) {
    document.querySelector("#window6").classList.remove("draggable2");
    document.querySelector("#window6").classList.add("draggable");
    document.querySelector("#window6").classList.add("front");
    document.querySelector("#window6").classList.remove("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window6").classList.remove("draggable");
    document.querySelector("#window6").classList.add("draggable2");
  }
}

document
  .querySelector("#desktopmapp8header")
  .addEventListener("dblclick", openNewFolder8);

function openNewFolder8() {
  if (document.querySelector("#window8").classList.contains("draggable2")) {
    document.querySelector("#window8").classList.remove("draggable2");
    document.querySelector("#window8").classList.add("draggable");
    document.querySelector("#window8").classList.add("front");
    document.querySelector("#window8").classList.remove("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window8").classList.remove("draggable");
    document.querySelector("#window8").classList.add("draggable2");
  }
}

document
  .querySelector("#desktopmapp9header")
  .addEventListener("dblclick", openNewFolder9);

function openNewFolder9() {
  if (document.querySelector("#window9").classList.contains("draggable2")) {
    document.querySelector("#window9").classList.remove("draggable2");
    document.querySelector("#window9").classList.add("draggable");
    document.querySelector("#window9").classList.add("front");
    document.querySelector("#window9").classList.remove("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window9").classList.remove("draggable");
    document.querySelector("#window9").classList.add("draggable2");
  }
}

document
  .querySelector("#desktopmapp10header")
  .addEventListener("dblclick", openNewFolder10);

function openNewFolder10() {
  if (document.querySelector("#window10").classList.contains("draggable2")) {
    document.querySelector("#window10").classList.remove("draggable2");
    document.querySelector("#window10").classList.add("draggable");
    document.querySelector("#window10").classList.add("front");
    document.querySelector("#window10").classList.remove("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window10").classList.remove("draggable");
    document.querySelector("#window10").classList.add("draggable2");
  }
}

document
  .querySelector("#desktopmapp11header")
  .addEventListener("dblclick", openNewFolder11);

function openNewFolder11() {
  if (document.querySelector("#window11").classList.contains("draggable2")) {
    document.querySelector("#window11").classList.remove("draggable2");
    document.querySelector("#window11").classList.add("draggable");
    document.querySelector("#window11").classList.add("front");
    document.querySelector("#window11").classList.remove("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window11").classList.remove("draggable");
    document.querySelector("#window11").classList.add("draggable2");
  }
}

document
  .querySelector("#desktopmapp12header")
  .addEventListener("dblclick", openNewFolder12);

function openNewFolder12() {
  if (document.querySelector("#window12").classList.contains("draggable2")) {
    document.querySelector("#window12").classList.remove("draggable2");
    document.querySelector("#window12").classList.add("draggable");
    document.querySelector("#window12").classList.add("front");
    document.querySelector("#window12").classList.remove("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window12").classList.remove("draggable");
    document.querySelector("#window12").classList.add("draggable2");
  }
}

document.querySelector("#window1").addEventListener("mousedown", bringToFront1);

function bringToFront1() {
  if (document.querySelector("#window1").classList.contains("ejFront")) {
    document.querySelector("#window1").classList.remove("ejFront");
    document.querySelector("#window1").classList.add("front");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window1").classList.add("front");
  }
}

document
  .querySelector("#window1-2")
  .addEventListener("mousedown", bringToFrontOne2);

function bringToFrontOne2() {
  if (document.querySelector("#window1-2").classList.contains("ejFront")) {
    document.querySelector("#window1-2").classList.remove("ejFront");
    document.querySelector("#window1-2").classList.add("front");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window1-2").classList.add("front");
    document.querySelector("#window1-2").classList.remove("ejFront");
  }
}

document.querySelector("#window2").addEventListener("mousedown", bringToFront2);

function bringToFront2() {
  if (document.querySelector("#window2").classList.contains("ejFront")) {
    document.querySelector("#window2").classList.remove("ejFront");
    document.querySelector("#window2").classList.add("front");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window2").classList.add("front");
  }
}

document.querySelector("#window2-2")
        .addEventListener("mousedown", bringToFrontTwo1);

function bringToFrontTwo1() {
  if (document.querySelector("#window2-2").classList.contains("ejFront")) {
    document.querySelector("#window2-2").classList.remove("ejFront");
    document.querySelector("#window2-2").classList.add("front");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window2-2").classList.add("front");
  }
}

document.querySelector("#window2-3")
        .addEventListener("mousedown", bringToFrontTwo2);

function bringToFrontTwo2() {
  if (document.querySelector("#window2-3").classList.contains("ejFront")) {
    document.querySelector("#window2-3").classList.remove("ejFront");
    document.querySelector("#window2-3").classList.add("front");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window2-3").classList.add("front");
  }
}

document.querySelector("#window3")
        .addEventListener("mousedown", bringToFront3);

function bringToFront3() {
  if (document.querySelector("#window3").classList.contains("ejFront")) {
    document.querySelector("#window3").classList.remove("ejFront");
    document.querySelector("#window3").classList.add("front");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window3").classList.add("front");
  }
}

document.querySelector("#window3-1")
        .addEventListener("mousedown", bringToFrontThree1);

function bringToFrontThree1() {
  if (document.querySelector("#window3-1").classList.contains("ejFront")) {
    document.querySelector("#window3-1").classList.remove("ejFront");
    document.querySelector("#window3-1").classList.add("front");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window3-1").classList.add("front");
  }
}

document.querySelector("#window4")
        .addEventListener("mousedown", bringToFront4);

function bringToFront4() {
  if (document.querySelector("#window4").classList.contains("ejFront")) {
    document.querySelector("#window4").classList.remove("ejFront");
    document.querySelector("#window4").classList.add("front");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window4").classList.add("front");
  }
}

document.querySelector("#window4-1")
        .addEventListener("mousedown", bringToFrontFour1);

function bringToFrontFour1() {
  if (document.querySelector("#window4-1").classList.contains("ejFront")) {
    document.querySelector("#window4-1").classList.remove("ejFront");
    document.querySelector("#window4-1").classList.add("front");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window4-1").classList.add("front");
  }
}

document.querySelector("#window5").addEventListener("mousedown", bringToFront5);

function bringToFront5() {
  if (document.querySelector("#window5").classList.contains("ejFront")) {
    document.querySelector("#window5").classList.remove("ejFront");
    document.querySelector("#window5").classList.add("front");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
  } else {
    document.querySelector("#window5").classList.add("front");
  }
}

document.querySelector("#window5-1")
        .addEventListener("mousedown", bringToFrontFive1);

function bringToFrontFive1() {
  if (document.querySelector("#window5-1").classList.contains("ejFront")) {
    document.querySelector("#window5-1").classList.remove("ejFront");
    document.querySelector("#window5-1").classList.add("front");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window5-1").classList.add("front");
  }
}

document.querySelector("#window6").addEventListener("mousedown", bringToFront6);

function bringToFront6() {
  if (document.querySelector("#window6").classList.contains("ejFront")) {
    document.querySelector("#window6").classList.remove("ejFront");
    document.querySelector("#window6").classList.add("front");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window6").classList.add("front");
  }
}

document.querySelector("#window8").addEventListener("mousedown", bringToFront8);

function bringToFront8() {
  if (document.querySelector("#window8").classList.contains("ejFront")) {
    document.querySelector("#window8").classList.remove("ejFront");
    document.querySelector("#window8").classList.add("front");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window8").classList.add("front");
  }
}

document.querySelector("#window9").addEventListener("mousedown", bringToFront9);

function bringToFront9() {
  if (document.querySelector("#window9").classList.contains("ejFront")) {
    document.querySelector("#window9").classList.remove("ejFront");
    document.querySelector("#window9").classList.add("front");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window9").classList.add("front");
  }
}

document
  .querySelector("#window10")
  .addEventListener("mousedown", bringToFront10);

function bringToFront10() {
  if (document.querySelector("#window10").classList.contains("ejFront")) {
    document.querySelector("#window10").classList.remove("ejFront");
    document.querySelector("#window10").classList.add("front");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window10").classList.add("front");
  }
}

document
  .querySelector("#window11")
  .addEventListener("mousedown", bringToFront11);

function bringToFront11() {
  if (document.querySelector("#window11").classList.contains("ejFront")) {
    document.querySelector("#window11").classList.remove("ejFront");
    document.querySelector("#window11").classList.add("front");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window12").classList.remove("front");
    document.querySelector("#window12").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window11").classList.add("front");
  }
}

document
  .querySelector("#window12")
  .addEventListener("mousedown", bringToFront12);

function bringToFront12() {
  if (document.querySelector("#window12").classList.contains("ejFront")) {
    document.querySelector("#window12").classList.remove("ejFront");
    document.querySelector("#window12").classList.add("front");
    document.querySelector("#window1").classList.remove("front");
    document.querySelector("#window1").classList.add("ejFront");
    document.querySelector("#window3").classList.remove("front");
    document.querySelector("#window3").classList.add("ejFront");
    document.querySelector("#window4").classList.remove("front");
    document.querySelector("#window4").classList.add("ejFront");
    document.querySelector("#window5").classList.remove("front");
    document.querySelector("#window5").classList.add("ejFront");
    document.querySelector("#window6").classList.remove("front");
    document.querySelector("#window6").classList.add("ejFront");
    document.querySelector("#window8").classList.remove("front");
    document.querySelector("#window8").classList.add("ejFront");
    document.querySelector("#window9").classList.remove("front");
    document.querySelector("#window9").classList.add("ejFront");
    document.querySelector("#window10").classList.remove("front");
    document.querySelector("#window10").classList.add("ejFront");
    document.querySelector("#window11").classList.remove("front");
    document.querySelector("#window11").classList.add("ejFront");
    document.querySelector("#window2").classList.remove("front");
    document.querySelector("#window2").classList.add("ejFront");
    document.querySelector("#window1-2").classList.remove("front");
    document.querySelector("#window1-2").classList.add("ejFront");
    document.querySelector("#window2-2").classList.remove("front");
    document.querySelector("#window2-2").classList.add("ejFront");
    document.querySelector("#window2-3").classList.remove("front");
    document.querySelector("#window2-3").classList.add("ejFront");
    document.querySelector("#window3-1").classList.remove("front");
    document.querySelector("#window3-1").classList.add("ejFront");
    document.querySelector("#window4-1").classList.remove("front");
    document.querySelector("#window4-1").classList.add("ejFront");
    document.querySelector("#window5-1").classList.remove("front");
    document.querySelector("#window5-1").classList.add("ejFront");
  } else {
    document.querySelector("#window12").classList.add("front");
  }
}

var divs = document.getElementsByClassName("desktopplacerare");

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

for (var i = 0; i < divs.length; i++) {
  var thisDiv = divs[i];

  randomTop = getRandomNumber(0, winHeight - 100);
  randomLeft = getRandomNumber(0, winWidth - 100);

  thisDiv.style.top = randomTop + "px";
  thisDiv.style.left = randomLeft + "px";
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

var allDocumentsInFolders = document.querySelectorAll(".window .dokument");
var randomDocument =
  allDocumentsInFolders[
    Math.floor(Math.random() * allDocumentsInFolders.length)
  ];

randomDocument.querySelector(".dokument-namn").innerText = "the right document";

randomDocument.addEventListener("dblclick", theRightDocument);

function theRightDocument() {
  if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
  ) {
    document.querySelector("#therightdocument").classList.remove("rightDocumentNotShow");
    document.querySelector("#therightdocument").classList.add("rightDocumentShow");
    document.querySelector("#therightdocument").classList.add("front");
    document.querySelector("#therightdocument").classList.remove("ejFront");
  } 
}



// openWrongDocument1 / close

document.querySelector("#desktopdokument2header")
        .addEventListener("dblclick", openWrongDocument1);

function openWrongDocument1() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument1").classList.add("draggable2");
  document.querySelector("#feldokument1").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument1").classList.add("draggable");
  document.querySelector("#feldokument1").classList.remove("draggable2");
  }   
  }

document.querySelector("#kryss1")
        .addEventListener("click", closeDocument1);

function closeDocument1() {
  document.querySelector("#feldokument1").classList.remove("draggable");
  document.querySelector("#feldokument1").classList.add("draggable2");
}


// openWrongDocument2 / close 

document.querySelector("#desktopdokument3header")
        .addEventListener("dblclick", openWrongDocument2);

function openWrongDocument2() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument4").classList.add("draggable2");
  document.querySelector("#feldokument4").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument4").classList.add("draggable");
  document.querySelector("#feldokument4").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss4")
        .addEventListener("click", closeDocument4);

function closeDocument4() {
  document.querySelector("#feldokument4").classList.remove("draggable");
  document.querySelector("#feldokument4").classList.add("draggable2");
}

// 

document.querySelector("#window1dokument1header")
        .addEventListener("dblclick", openWrongDocument3);

function openWrongDocument3() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument3").classList.add("draggable2");
  document.querySelector("#feldokument3").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument3").classList.add("draggable");
  document.querySelector("#feldokument3").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss3")
        .addEventListener("click", closeDocument3);

function closeDocument3() {
  document.querySelector("#feldokument3").classList.remove("draggable");
  document.querySelector("#feldokument3").classList.add("draggable2");
}


// 

document.querySelector("#window1-2dokument1header")
        .addEventListener("dblclick", openWrongDocument5);

function openWrongDocument5() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument5").classList.add("draggable2");
  document.querySelector("#feldokument5").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument5").classList.add("draggable");
  document.querySelector("#feldokument5").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss5")
        .addEventListener("click", closeDocument5);

function closeDocument5() {
  document.querySelector("#feldokument5").classList.remove("draggable");
  document.querySelector("#feldokument5").classList.add("draggable2");
}


// 

document.querySelector("#window2-2dokument1header")
        .addEventListener("dblclick", openWrongDocument6);

function openWrongDocument6() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument6").classList.add("draggable2");
  document.querySelector("#feldokument6").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument6").classList.add("draggable");
  document.querySelector("#feldokument6").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss6")
        .addEventListener("click", closeDocument6);

function closeDocument6() {
  document.querySelector("#feldokument6").classList.remove("draggable");
  document.querySelector("#feldokument6").classList.add("draggable2");
}

// 

document.querySelector("#window2-3dokument1header")
        .addEventListener("dblclick", openWrongDocument7);

function openWrongDocument7() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument7").classList.add("draggable2");
  document.querySelector("#feldokument7").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument7").classList.add("draggable");
  document.querySelector("#feldokument7").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss7")
        .addEventListener("click", closeDocument7);

function closeDocument7() {
  document.querySelector("#feldokument7").classList.remove("draggable");
  document.querySelector("#feldokument7").classList.add("draggable2");
}


// 

document.querySelector("#window3-1dokument1header")
        .addEventListener("dblclick", openWrongDocument8);

function openWrongDocument8() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument8").classList.add("draggable2");
  document.querySelector("#feldokument8").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument8").classList.add("draggable");
  document.querySelector("#feldokument8").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss8")
        .addEventListener("click", closeDocument8);

function closeDocument8() {
  document.querySelector("#feldokument8").classList.remove("draggable");
  document.querySelector("#feldokument8").classList.add("draggable2");
}

// 

document.querySelector("#window4dokument1header")
        .addEventListener("dblclick", openWrongDocument9);

function openWrongDocument9() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument9").classList.add("draggable2");
  document.querySelector("#feldokument9").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument9").classList.add("draggable");
  document.querySelector("#feldokument9").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss9")
        .addEventListener("click", closeDocument9);

function closeDocument9() {
  document.querySelector("#feldokument9").classList.remove("draggable");
  document.querySelector("#feldokument9").classList.add("draggable2");
}

// 

document.querySelector("#window4-1dokument1header")
        .addEventListener("dblclick", openWrongDocument10);

function openWrongDocument10() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument10").classList.add("draggable2");
  document.querySelector("#feldokument10").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument10").classList.add("draggable");
  document.querySelector("#feldokument10").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss10")
        .addEventListener("click", closeDocument10);

function closeDocument10() {
  document.querySelector("#feldokument10").classList.remove("draggable");
  document.querySelector("#feldokument10").classList.add("draggable2");
}


// 


document.querySelector("#window5dokument1header")
        .addEventListener("dblclick", openWrongDocument11);

function openWrongDocument11() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument11").classList.add("draggable2");
  document.querySelector("#feldokument11").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument11").classList.add("draggable");
  document.querySelector("#feldokument11").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss11")
        .addEventListener("click", closeDocument11);

function closeDocument11() {
  document.querySelector("#feldokument11").classList.remove("draggable");
  document.querySelector("#feldokument11").classList.add("draggable2");
}


// 


document.querySelector("#window5-1dokument1header")
        .addEventListener("dblclick", openWrongDocument12);

function openWrongDocument12() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument12").classList.add("draggable2");
  document.querySelector("#feldokument12").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument12").classList.add("draggable");
  document.querySelector("#feldokument12").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss12")
        .addEventListener("click", closeDocument12);

function closeDocument12() {
  document.querySelector("#feldokument12").classList.remove("draggable");
  document.querySelector("#feldokument12").classList.add("draggable2");
}


// 


document.querySelector("#window6dokument1header")
        .addEventListener("dblclick", openWrongDocument13);


function openWrongDocument13() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument13").classList.add("draggable2");
  document.querySelector("#feldokument13").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument13").classList.add("draggable");
  document.querySelector("#feldokument13").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss13")
        .addEventListener("click", closeDocument13);

function closeDocument13() {
  document.querySelector("#feldokument13").classList.remove("draggable");
  document.querySelector("#feldokument13").classList.add("draggable2");
}


//


document.querySelector("#window6dokument2header")
        .addEventListener("dblclick", openWrongDocument14);


function openWrongDocument14() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument14").classList.add("draggable2");
  document.querySelector("#feldokument14").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument14").classList.add("draggable");
  document.querySelector("#feldokument14").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss14")
        .addEventListener("click", closeDocument14);

function closeDocument14() {
  document.querySelector("#feldokument14").classList.remove("draggable");
  document.querySelector("#feldokument14").classList.add("draggable2");
}



//


document.querySelector("#window8dokument1header")
        .addEventListener("dblclick", openWrongDocument15);


function openWrongDocument15() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument15").classList.add("draggable2");
  document.querySelector("#feldokument15").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument15").classList.add("draggable");
  document.querySelector("#feldokument15").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss15")
        .addEventListener("click", closeDocument15);

function closeDocument15() {
  document.querySelector("#feldokument15").classList.remove("draggable");
  document.querySelector("#feldokument15").classList.add("draggable2");
}


//


document.querySelector("#window10dokument1header")
        .addEventListener("dblclick", openWrongDocument16);


function openWrongDocument16() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument16").classList.add("draggable2");
  document.querySelector("#feldokument16").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument16").classList.add("draggable");
  document.querySelector("#feldokument16").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss16")
        .addEventListener("click", closeDocument16);

function closeDocument16() {
  document.querySelector("#feldokument16").classList.remove("draggable");
  document.querySelector("#feldokument16").classList.add("draggable2");
}

//

document.querySelector("#window11dokument1header")
        .addEventListener("dblclick", openWrongDocument17);


function openWrongDocument17() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument17").classList.add("draggable2");
  document.querySelector("#feldokument17").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument17").classList.add("draggable");
  document.querySelector("#feldokument17").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss17")
        .addEventListener("click", closeDocument17);

function closeDocument17() {
  document.querySelector("#feldokument17").classList.remove("draggable");
  document.querySelector("#feldokument17").classList.add("draggable2");
}


//


document.querySelector("#window12dokument1header")
        .addEventListener("dblclick", openWrongDocument18);


function openWrongDocument18() {
  if (
  document.querySelector("#therightdocument").classList.contains("rightDocumentShow")
  ) {
  document.querySelector("#feldokument18").classList.add("draggable2");
  document.querySelector("#feldokument18").classList.remove("draggable");
  } else if (
    document.querySelector("#therightdocument").classList.contains("rightDocumentNotShow")
    ) {
  document.querySelector("#feldokument18").classList.add("draggable");
  document.querySelector("#feldokument18").classList.remove("draggable2");
  } 
    
  }

document.querySelector("#kryss18")
        .addEventListener("click", closeDocument18);

function closeDocument18() {
  document.querySelector("#feldokument18").classList.remove("draggable");
  document.querySelector("#feldokument18").classList.add("draggable2");
}

// 

document.querySelector("#desktopdokument1header")
        .addEventListener("dblclick", openAbout);

function openAbout() {
  document.querySelector("#aboutdokument").classList.add("draggable");
  document.querySelector("#aboutdokument").classList.remove("draggable2");
}

document.querySelector("#kryss-about")
        .addEventListener("click", closeAbout);

function closeAbout() {
  document.querySelector("#aboutdokument").classList.remove("draggable");
  document.querySelector("#aboutdokument").classList.add("draggable2");
}



document.querySelector("#kryss2")
        .addEventListener("click", startaOm);

function startaOm () {
   document.location.reload()
}



// WEBRING 

   var webringSites = [
        'http://www.empty-frames.com',
        'http://www.1outof3.se',
        'http://www.microscopictrance.com',
        'http://www.amidonenow.com',
        'http://www.diplomaprinter.biz',
        'http://www.findivanshobby.com',
        'http://www.online-ikebana.garden',
        'http://www.qwertyuiopasdfghjklzxcvbnm.life',
        'http://www.findtherightdocument.com',
        'http://www.connectome.nu',
        'http://www.destiny.exposed',
        'http://www.wordsdrifting.space',
        'http://www.cyrillicintersections.com',
        'http://www.rockyis.training',
        'http://www.learnaboutmodernart.com',
        'http://www.persiancarpetstakestime.digital'
    ];

  function randomWebringSite() {
        var i = parseInt(Math.random() * webringSites.length);
        location.href = webringSites[i];
    }

  function natureWebringInfo() {
      document.getElementById("natureLogo").src = "https://cdn.glitch.com/43f5acc6-f26c-4fcb-879e-d1be56496526%2Fart-webring-hover-2.svg?v=1618478386122";
    }

  function natureWebringLogo() {
      document.getElementById("natureLogo").src = "https://cdn.glitch.com/43f5acc6-f26c-4fcb-879e-d1be56496526%2Fart-webring-2.svg?v=1618478386121";
    }