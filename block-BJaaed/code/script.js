
let ul = document.querySelector('ul');
books.forEach((char) =>{
    let li = document.createElement('li');
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let btn = document.createElement('btn');
    img.src = char.image;
    h2.innerText = char.title;
    p.innerText = char.author;
    btn.innerText = "Buy Now";
    li.append(img,h2,p,btn);
    ul.append(li);
});

































