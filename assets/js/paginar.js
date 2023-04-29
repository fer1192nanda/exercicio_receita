function paginar (id){ 
    
    
    
    if(id=="pag1"){
        document.getElementById(id).classList.add("active");
        document.getElementById("pag2").classList.remove("active");
        document.getElementById("pag3").classList.remove("active");

    } else if(id=="pag2"){
        document.getElementById(id).classList.add("active");
        document.getElementById("pag1").classList.remove("active");
        document.getElementById("pag3").classList.remove("active");
    } else if(id=="pag3"){
        document.getElementById(id).classList.add("active");
        document.getElementById("pag1").classList.remove("active");
        document.getElementById("pag2").classList.remove("active");

    }


}
