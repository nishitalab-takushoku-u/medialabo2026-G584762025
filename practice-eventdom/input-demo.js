let p=document.querySelector('p#message');
let i=document.querySelector('input[name="shimei"]');

b = document.querySelector('button#print');
b.addEventListener('click', greeting);
function greeting() {
    aisatu='こんにちは、'+i.value+'さん'
    p.textContent=aisatu;
}