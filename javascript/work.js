function swichHead(num){
    const head = document.getElementById("hed");
    
    if(num == 1){
        head.classList.add("active");
    }
    else if(num == 2){
        head.classList.remove("active");
    }
    else{}
}


function wSwich(num){
    const i1 = document.getElementById("wI1");
    const i2 = document.getElementById("wI2");
    const i3 = document.getElementById("wI3");
    const i4 = document.getElementById("wI4");

    const d1 = document.getElementById("wD1");
    const d2 = document.getElementById("wD2");
    const d3 = document.getElementById("wD3");
    const d4 = document.getElementById("wD4");

    const s1 = document.getElementById("ws1");
    const s2 = document.getElementById("ws2");
    const s3 = document.getElementById("ws3");
    const s4 = document.getElementById("ws4");

    const Is = [i1, i2, i3, i4];
    const Ds = [d1, d2, d3, d4];
    const Ss = [s1, s2, s3, s4];

    for(var i = 0; i < Is.length; i++){
        Is[i].classList.remove("active");
        Ds[i].classList.remove("active");
        Ss[i].classList.remove("active");
        
        Is[num].classList.add("active");
        Ds[num].classList.add("active");
        Ss[num].classList.add("active");
    }
    
}

var t = 0;

setInterval(
    function ff(){
        
        if(t < 4){
            t++
        }
        else{
            t = 0;
        }

        wSwich(t);
    }, 6000)


var be = 0;

function sBe(num){
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    const b3 = document.getElementById("b3");

    const Bs = [b1, b2, b3];

    if(num == 1){
        if(0 < be){
            be--
        }
        else{
            be = Bs.length - 1;
        }
    }
    else if(num == 2){
        if(be < Bs.length - 1){
            be++
        }
        else{
            be = 0;
        }
    }
    
    for(var i = 0; i < Bs.length; i++){
        Bs[i].classList.remove("active");
        
        Bs[be].classList.add("active");
    }
}

function telefonClap(){
    const swich = document.getElementById('checkbox2');
    const input = document.getElementById('telefonInput');

    if(swich.checked){
        input.style.display = "block";
        input.style.opacity = "1";
        input.style.zIndex = "5";
    }
    else{
        input.style.display = "none";
        input.style.opacity = "0";
        input.style.zIndex = "-5";
    }
}