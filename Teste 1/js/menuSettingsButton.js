var MenuSettingsActive = false;


function createMenuSettingsButton(buttonInitialPosition=20, containerHeight=500){
    document.getElementsByClassName("menu-itens")[0].style.height = containerHeight + "px";
    document.getElementsByClassName("settings-menu")[0].style.transform = "translateY(-" + buttonInitialPosition +"px)";
   console.log("container height é: "+containerHeight)
}


function menuSettingsButton(){
    //document.getElementsByClassName('menu-item')[0].style.transform = "translateY(-300px)"


    if (!MenuSettingsActive) {
            document.getElementsByClassName('menu-itens')[0].style.display = 'flex'
            document.getElementsByClassName('settings-menu')[0].style.boxShadow = "inset  1px 1px 5px rgb(133, 133, 133)"
            for (let i = 0; i <= document.getElementsByClassName('menu-item').length; i++) {
                const element = document.getElementsByClassName('menu-item')[i];
                      element.style.display = 'flex';
                setTimeout(() => {
                    element.style.transform = "translateY(-300px)"
                }, 30);
                
                MenuSettingsActive = true;
               
            }
    }else{

        

        for (let i = 0; i <= document.getElementsByClassName('menu-item').length; i++) {
            const element = document.getElementsByClassName('menu-item')[i];
            
                element.style.transform = "translateY(300px)"
            document.getElementsByClassName('settings-menu')[0].style.boxShadow = "1px 1px 5px rgb(133, 133, 133)"
           
            setTimeout(() => {
                element.style.display = 'none'
                document.getElementsByClassName('menu-itens')[0].style.display = 'none'
             }, 50);
             MenuSettingsActive = false;
        }


    }



}


setInterval(() => {


    if (window.innerWidth <= 930) {
        document.getElementsByClassName('settings-menu')[0].style.display = 'block';
    } else if (window.innerWidth >= 930){
        document.getElementsByClassName('settings-menu')[0].style.display = 'none'; 
    }
    
}, 300);