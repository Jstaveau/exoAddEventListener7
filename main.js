//1
let div = document.getElementById('content');
function test(e) {
    if (e.target.tagName == 'DIV') {
        e.target.style.border = 'solid red 3px'
    } else if (e.target.tagName == 'P') {
        e.target.style.fontWeight = 'bold'
        e.target.style.color = 'red'
    } else if (e.target.tagName == 'H1') {
        e.target.style.backgroundColor = 'gold'
    } else if (e.target.tagName == 'H2') {
        e.target.innerText = e.target.innerText.substr(0, e.target.innerText.length-1)
    }
}

div.addEventListener('click', test);

//2
let texte = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";
let section = document.getElementsByTagName('section')[0];
let p = section.firstElementChild

section.style.height = '10px'
section.addEventListener('mouseover', function(){
    p.innerText = texte
})