fetch("home.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("home").innerHTML = html;
  });
