var pass = prompt('enter the password');
var paragraph = document.querySelector('p');
if (pass === '12345'){
    paragraph.classList.remove('transparent');
    paragraph.classList.add('green')
}