let $ = document
/**************************************/
//              Header
/**************************************/ 
let searchBtn = $.querySelector(".information-header_search");
let rightHeader = $.querySelector(".header--right");
let leftHeader =$.querySelector(".header--left");
let searchComponents = $.querySelector(".Search-components");
let imgSearch = $.querySelector(".information-header_search--img")
let btnMenu = $.querySelector(".buttom-menu");
let btnMenuLine = $.querySelector(".buttom-menu_line");
let mobileMenu =$.querySelector(".mobile-menu")
let itemList_img = $.querySelectorAll(".list--item_img")
let Box_menuList = $.querySelectorAll(".box-menu_list")
let blackScreen = $.getElementById("blackScreen")
let modalLogin =$.querySelector(".modalLogin")
let modalLoginClose =$.getElementById("modalLogin_main--close")
let loginBottom =$.querySelectorAll(".LB")
let header = $.querySelector(".header");
let HTML =$.getElementById("HTML")

searchBtn.addEventListener("click" , function(){
if(rightHeader.style.display==="flex"){
    rightHeader.style.display="none";
    leftHeader.style.display="none";
    searchComponents.style.display="flex";
    imgSearch.setAttribute("src","icons/close.png")
}else{
    rightHeader.style.display="flex";
    leftHeader.style.display="inline";
    searchComponents.style.display="none";
    imgSearch.setAttribute("src","icons/search.png")
} 
})
btnMenu.addEventListener("click" , function(){
    btnMenuLine.classList.add("buttom-menu_open");
    mobileMenu.style.right="0";
    blackScreen.style.display="flex";
})
blackScreen.addEventListener("click",function(){
        if(modalLogin.style.display!=="block"){
            btnMenuLine.classList.remove("buttom-menu_open");
            mobileMenu.style.right="-30rem";
            blackScreen.style.display="none";
        }
})
loginBottom.forEach(function(btn){
    btn.addEventListener("click", function(){
        modalLogin.style.display="block";
        blackScreen.style.display="flex";
    })
})
modalLoginClose.addEventListener("click" , function(){
    modalLogin.style.display="none";
    blackScreen.style.display="none";
})
let flagMenu = true;
itemList_img.forEach(function(item){
    item.addEventListener("click",function(img){
        if(flagMenu){
            img.target.classList.add("list--item_img--down");
            img.target.parentElement.nextSibling.nextSibling.style.display="flex"
            flagMenu = false
        }else{
            img.target.classList.remove("list--item_img--down");
            img.target.parentElement.nextSibling.nextSibling.style.display="none"
            flagMenu = true
        }
    })
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
// if(headerLarg.style.height==="140px"){
        if (document.body.scrollTop > 227 || document.documentElement.scrollTop > 227) {
            header.classList.add("firstFixed","secondFixed");
        }else{
            header.classList.remove("firstFixed","secondFixed");
        }
    // }
}
/**************************************/
//              Main
/**************************************/ 
let Poster = $.querySelector("Poster")
/*      Education Courses       */
let sliderItems_E = $.querySelector(".slider_items_E")
let sliderItem_E = $.querySelectorAll(".slider_item_E")
let leftArrow_E = $.querySelector(".left_arrow_E")
let rightArrow_E = $.querySelector(".right_arrow_E")
let PageContorolCircle_E = $.querySelectorAll(".PageContorol_circle_E")
/*      Digital Store      */
let sliderItems_D = $.querySelector(".slider_items_D")
let sliderItem_D = $.querySelectorAll(".slider_item_D")
let leftArrow_D = $.querySelector(".left_arrow_D")
let rightArrow_D = $.querySelector(".right_arrow_D")
let PageContorolCircle_D = $.querySelectorAll(".PageContorol_circle_D")
/*      Travel Services       */
let sliderItems_T = $.querySelector(".slider_items_T")
let sliderItem_T = $.querySelectorAll(".slider_item_T")
let leftArrow_T = $.querySelector(".left_arrow_T")
let rightArrow_T = $.querySelector(".right_arrow_T")
let PageContorolCircle_T = $.querySelectorAll(".PageContorol_circle_T")
/*      Comments       */
let CommentsBox = $.querySelector(".Comments_box")
let comment = $.querySelectorAll(".comment")
let leftArrow_C = $.querySelector(".left_arrow_C")
let rightArrow_C = $.querySelector(".right_arrow_C")
let PageContorolCircle_C = $.querySelectorAll(".PageContorol_circle_C")

// let boxPoster=['1.png','2.png','3.png','4.png','5.png']

// let num = 1
// setInterval(function(){ 
// if(num>5){
//     num = 1
// }
// Poster.style.backgroundImage='url(../images/ChangeImage/'+num+'.png)'
// num+=1     
// },5000)

/*      Education Courses       */
let NumberOfSlides_E = sliderItem_E.length
let total_NumberOfSlides_E = 0
let i0_E= 0
let i5_E = 5
let j1_E = 1
let j0_E = 0
setInterval((slids_E) => {
    if(i0_E>sliderItem_E.length-i5_E){
        total_NumberOfSlides_E = 29.5
        sliderItems_E.style.marginLeft=total_NumberOfSlides_E+"rem"
        i0_E=0
        i5_E=4
    }
    total_NumberOfSlides_E = total_NumberOfSlides_E-29.5
    sliderItems_E.style.marginLeft=total_NumberOfSlides_E+"rem"
    sliderItems_E.style.transition="ease-in-out 1s"
    i0_E+=1
},5000);  
setInterval((PageContorolCircle_on_E)=>{
    if(j1_E>PageContorolCircle_E.length-1){
        j1_E = 0
    }
    PageContorolCircle_E[j1_E].classList.add("PageContorol_circle-fill")
    j1_E+=1
},5000)
setInterval((PageContorolCircle_of_E)=>{
    if(j0_E>PageContorolCircle_E.length-1){
        j0_E = 0
    }
    if(PageContorolCircle_E[j0_E]){
        PageContorolCircle_E[j0_E].classList.remove("PageContorol_circle-fill")
    }
    j0_E+=1
},5000)
/*      Digital Store      */
let NumberOfSlides_D = sliderItem_D.length
let total_NumberOfSlides_D = 0
let i0_D=0
let i5_D =5
let j1_D = 1
let j0_D = 0
setInterval((slids_D) => {
    if(i0_D>sliderItem_D.length-i5_D){
        total_NumberOfSlides_D = 29.5
        sliderItems_D.style.marginLeft=total_NumberOfSlides_D+"rem"
        i0_D=0
        i5_D=4
    }
    total_NumberOfSlides_D = total_NumberOfSlides_D-29.5
    sliderItems_D.style.marginLeft=total_NumberOfSlides_D+"rem"
    sliderItems_D.style.transition="ease-in-out 1s"
    i0_D+=1
},5000);  
setInterval((PageContorolCircle_on_D)=>{
    if(j1_D>PageContorolCircle_D.length-1){
        j1_D = 0
    }
    PageContorolCircle_D[j1_D].classList.add("PageContorol_circle-fill")
    j1_D+=1
},5000)
setInterval((PageContorolCircle_of_D)=>{
    if(j0_D>PageContorolCircle_D.length-1){
        j0_D = 0
    }
    if(PageContorolCircle_D[j0_D]){
        PageContorolCircle_D[j0_D].classList.remove("PageContorol_circle-fill")
    }
    j0_D+=1
},5000)
/*      Travel Services       */
let NumberOfSlides_T = sliderItem_T.length
let total_NumberOfSlides_T = 0
let i0_T=0
let i5_T =5
let j1_T= 1
let j0_T= 0
setInterval((slids_T) => {
    if(i0_T>sliderItem_T.length-i5_T){
        total_NumberOfSlides_T = 29.5
        sliderItems_T.style.marginLeft=total_NumberOfSlides_T+"rem"
        i0_T=0
        i5_T=4
    }
    total_NumberOfSlides_T = total_NumberOfSlides_T-29.5
    sliderItems_T.style.marginLeft=total_NumberOfSlides_T+"rem"
    sliderItems_T.style.transition="ease-in-out 1s"
    i0_T+=1
}, 5000);  
setInterval((PageContorolCircle_on_T)=>{
    if(j1_T>PageContorolCircle_T.length-1){
        j1_T = 0
    }
    PageContorolCircle_T[j1_T].classList.add("PageContorol_circle-fill")
    j1_T+=1
},5000)
setInterval((PageContorolCircle_of_T)=>{
    if(j0_T>PageContorolCircle_T.length-1){
        j0_T = 0
    }
    if(PageContorolCircle_T[j0_T]){
        PageContorolCircle_T[j0_T].classList.remove("PageContorol_circle-fill")
    }
    j0_T+=1
},5000)
/*      Comments       */
let NumberOfComment = comment.length
let total_NumberOfComment= 0
let i0_C=0
let i5_C =3
let j1_C= 1
let j0_C= 0
setInterval((Comment) => {
    if(i0_C>comment.length-i5_C){
        total_NumberOfComment = 59
        CommentsBox.style.marginLeft=total_NumberOfComment+"rem"
        i0_C=0
        i5_C=2
    }
    total_NumberOfComment = total_NumberOfComment-59
    CommentsBox.style.marginLeft=total_NumberOfComment+"rem"
    CommentsBox.style.transition="ease-in-out 1s"
    i0_C+=1
}, 5000);  
setInterval((PageContorolCircle_on_C)=>{
    if(j1_C>PageContorolCircle_C.length-1){
        j1_C = 0
    }
    PageContorolCircle_C[j1_C].classList.add("PageContorol_circle-fill")
    j1_C+=1
},5000)
setInterval((PageContorolCircle_of_C)=>{
    if(j0_C>PageContorolCircle_C.length-1){
        j0_C = 0
    }
    if(PageContorolCircle_C[j0_C]){
        PageContorolCircle_C[j0_C].classList.remove("PageContorol_circle-fill")
    }
    j0_C+=1
},5000)





