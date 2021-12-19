const menus=document.querySelectorAll('.menu');

menus.forEach(menu=>{
    const btns =menu.querySelectorAll('.btn');
    btns.forEach(btn =>{
        btn.addEventListener('click',()=>{
            menu.classList.toggle('show-benefit');
        });
    }); 
});