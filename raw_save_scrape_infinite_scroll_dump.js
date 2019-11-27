



// copy paste in console after having pasted / imporrted logs2indexeddb.js

l2i.init(function() {// successfully initialized
    l2i.on(function() {


var lastScrollHeight = 0;

function autoScroll() {
  var sh = document.documentElement.scrollHeight;
  var i = 0;
  if (sh != lastScrollHeight) {
    lastScrollHeight = sh;
    document.documentElement.scrollTop = sh;
    var htmlString = document.getElementsByTagName('html')[0].innerHTML;
    console.log(htmlString);    



  }
}
window.setInterval(autoScroll, 11);


    });
});


l2i.download();

l2i.clear();





