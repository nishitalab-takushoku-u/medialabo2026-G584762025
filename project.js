let push = document.querySelector('button#kensaku');
push.addEventListener('click', serch);

function serch(){
    let a= document.querySelector('select#kuni');
    let ai = a.selectedIndex;
    let as = a.querySelectorAll('option');
    let a1 = as.item(ai); 

    let b= document.querySelector('select#koumoku');
    let bi = b.selectedIndex;
    let bs = b.querySelectorAll('option');
    let b1 = bs.item(bi); 

    console.log('検索キー:' + a1.textContent);
    console.log('項目:' + b1.textContent);
    
}