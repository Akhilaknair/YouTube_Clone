var menu=document.querySelector(".menu-icon");
var side=document.querySelector(".side-bar");
var container=document.querySelector(".container");

menu.onclick=function()
{
    //  change width of side bar using toggle because if its not there it will add the mentioned class , if its there it will be removed 
    
    side.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");

}






