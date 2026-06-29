let p1=document.querySelector('input[name="left"]');
let p2=document.querySelector('input[name="right"]');
let a=document.querySelector('span#answer');

b = document.querySelector('button#calc');
b.addEventListener('click', keisann);
function keisann() {
    let y1=p1.value;
    let y2=p2.value;
    let n1=Number(y1);
    let n2=Number(y2);
    let x=n1+n2;
    a.textContent=x;
}