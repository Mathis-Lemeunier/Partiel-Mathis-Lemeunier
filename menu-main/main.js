

const burger = document.querySelector(".burger")

const menu = document.querySelector(".menu")

const content = document.querySelector('.content')

const boutonPresentation1 = document.querySelector("#presentation1")
const boutonPresentation2 = document.querySelector("#presentation2")
const boutonContact = document.querySelector('#contact')

const pagePresentation1 = document.querySelector('.presentation1')
const pagePresentation2 = document.querySelector('.presentation2')
const pageContact = document.querySelector('.contact')



burger.addEventListener("click", ()=>{

            menu.classList.toggle("menu-visible")

} )


boutonPresentation1.addEventListener("click", ()=>{

         afficher(pagePresentation1)

})
boutonPresentation2.addEventListener("click",()=>{
    afficher(pagePresentation2)
})

boutonContact.addEventListener("click", ()=>{
    afficher(pageContact)
})


function cacherTout(){

    let toutesLesPages = content.querySelectorAll('div.page')



   toutesLesPages.forEach(page=>{
        page.classList.add('hidden')

   })

}


function afficher(unePage){

    cacherTout()
   
    unePage.classList.remove('hidden')  
    menu.classList.remove("menu-visible") 

}



afficher(pagePresentation1)


