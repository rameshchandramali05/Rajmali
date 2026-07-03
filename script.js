fetch("home.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("home").innerHTML = html;
  });



function load(file, id){
    fetch(file)
      .then(res => res.text())
      .then(html => {
          document.getElementById(id).innerHTML = html;
      });
}

load("header.html","header");
load("welcom.html","welcom");
load("add.html","add");
load("readmore.html","readmore");
load("Func.html","Func");
load("sadasy.html","sadasy");
