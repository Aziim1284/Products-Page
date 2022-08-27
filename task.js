var hovv = document.getElementById("hovv");
var premium = document.getElementById("premium");
var proo = document.getElementById("proo");
var family = document.getElementById("family");
var selectt = document.getElementById('selection');

//disabling all button


 selectt.addEventListener('change' , function(){
    const val = selectt.value;
    if(val === '1'){
        alert('Enjoy Your Free Pack');
        hovv.disabled = false;
        premium.disabled = true;
        proo.disabled = true;
        family.disabled = true;
    }else if(val === '10'){
        alert('Enjoy Your pro Pack');
        hovv.disabled = true;
        premium.disabled = true;
        proo.disabled = false;
        family.disabled = true;
    }
    else if(val === '20'){
        alert('Enjoy Your premium Pack');
        hovv.disabled = true;
        premium.disabled = false;
        proo.disabled = true;
        family.disabled = true;
    }else if(val === 'More than 20'){
        alert('Enjoy Your family Pack');
        hovv.disabled = true;
        premium.disabled = true;
        proo.disabled = true;
        family.disabled = false;
    }
    
    else{
        hovv.disabled = true;
        premium.disabled = true;
        proo.disabled = true;
        family.disabled = true;
    }
 })


 