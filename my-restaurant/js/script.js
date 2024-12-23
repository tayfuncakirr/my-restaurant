
const sec =document.querySelectorAll('section');
const links =document.querySelectorAll('nav a');

window.onscroll =()=>{
    sec.forEach(section => {
        let top= window.scrollY;
        let offset= section.offsetTop - 95;
        let height= section.offsetHeight;
        let id= section.getAttribute('id');
        if (top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');

            })
            
        }
        
    });
};


/*

const linkHome=document.querySelector('.link-home');
const linkAbout=document.querySelector('.link-about');
const linkMenu=document.querySelector('.link-menu');
const linkProducts=document.querySelector('.link-products');
const linkReview=document.querySelector('.link-review');
const linkContact=document.querySelector('.link-contact');
const linkBlogs=document.querySelector('.link-blogs');

           

linkHome.addEventListener('click', ()=>{
    linkHome.classList.add('active');
    linkAbout.classList.remove('active');
    linkMenu.classList.remove('active');
    linkProducts.classList.remove('active');
    linkReview.classList.remove('active');
    linkContact.classList.remove('active');
    linkBlogs.classList.remove('active');
    
   });
linkAbout.addEventListener('click', ()=>{
    linkHome.classList.remove('active');
    linkAbout.classList.add('active');
    linkMenu.classList.remove('active');
    linkProducts.classList.remove('active');
    linkReview.classList.remove('active');
    linkContact.classList.remove('active');
    linkBlogs.classList.remove('active');
    
   });
linkMenu.addEventListener('click', ()=>{
    linkHome.classList.remove('active');
    linkAbout.classList.remove('active');
    linkMenu.classList.add('active');
    linkProducts.classList.remove('active');
    linkReview.classList.remove('active');
    linkContact.classList.remove('active');
    linkBlogs.classList.remove('active');
});
linkProducts.addEventListener('click', ()=>{
    linkHome.classList.remove('active');
    linkAbout.classList.remove('active');
    linkMenu.classList.remove('active');
    linkProducts.classList.add('active');
    linkReview.classList.remove('active');
    linkContact.classList.remove('active');
    linkBlogs.classList.remove('active');

    
});
linkReview.addEventListener('click', ()=>{
    linkHome.classList.remove('active');
    linkAbout.classList.remove('active');
    linkMenu.classList.remove('active');
    linkProducts.classList.remove('active');
    linkReview.classList.add('active');
    linkContact.classList.remove('active');
    linkBlogs.classList.remove('active');

    
});
linkContact.addEventListener('click', ()=>{
    linkHome.classList.remove('active');
    linkAbout.classList.remove('active');
    linkMenu.classList.remove('active');
    linkProducts.classList.remove('active');
    linkReview.classList.remove('active');
    linkContact.classList.add('active');
    linkBlogs.classList.remove('active');

    
});
linkBlogs.addEventListener('click', ()=>{
    linkHome.classList.remove('active');
    linkAbout.classList.remove('active');
    linkMenu.classList.remove('active');
    linkProducts.classList.remove('active');
    linkReview.classList.remove('active');
    linkContact.classList.remove('active');
    linkBlogs.classList.add('active');

    
});
*/
           
   

/**********************************************************************************************************************/ 
const searchForm=document.querySelector('.search-form');
const cartItem=document.querySelector('.cart-items-container');
const navbar=document.querySelector('.navbar');

const searchBtn=document.querySelector('#search-btn');
const cartBtn=document.querySelector('#cart-btn');
const menuBtn=document.querySelector('#menu-btn');


                        /* NAVBAR MENU */
menuBtn.addEventListener('click', ()=>{
   navbar.classList.toggle('active');
   document.addEventListener('click',(e)=>{
    if (!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar)) 
        {
        navbar.classList.remove('active');
    }

   });
});                        

                   /* CART ITEM CONTAINER */
cartBtn.addEventListener('click', ()=>{
    cartItem.classList.toggle('active');
    document.addEventListener('click',(e)=>{
        if (!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem)) 
            {
                cartItem.classList.remove('active');
        }

    });
});

                        /*SEARCH INPUT */
searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    document.addEventListener('click', (e) =>{
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm) ) 
           
        {
            searchForm.classList.remove('active');
        }

    });

});

