let hover = document.getElementsByClassName('digitalisering__h1');
for (let i=0; i<hover.length; i++) {
    hover[i].innerHTML = hover[i].innerHTML.replace(/(.)/g, '<span>$1</span>');
}