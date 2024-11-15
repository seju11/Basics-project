z = document.getElementById('Box')

function ChangeColor(){
    if(z.style.backgroundColor == "red"){
        z.style.backgroundColor = "yellow"
    }
    else if(z.style.backgroundColor == "yellow"){
        z.style.backgroundColor = "green"
    }
    else if(z.style.backgroundColor == "green"){
        z.style.backgroundColor = "blue"
    }
    else{
        z.style.backgroundColor = "red"
    }

}