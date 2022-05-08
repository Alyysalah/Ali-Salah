var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle(){
    If(MenuItems.style.maxHeight == "0px") 
    {
        MenuItems.style.maxHeight = "200px";
    }
    Else
    {
        MenuItems.style.maxHeight = "0px";
    }
}