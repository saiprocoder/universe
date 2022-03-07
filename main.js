console.log("Universe!");

function Welcome() {
    var a=prompt("Welcome to Team Gryffindor's project on Universe! Type S, to see the slides. Type W, to see the HTML project.")
    
        if(a=="S") {
            window.location.href="https://docs.google.com/presentation/d/1x1OxpC_9hln7-HSABcv-poLkoWG0622_co3vJvcNfrQ/present?slide=id.g35f391192_00"
        }
    
        if(a=="W") {
            window.location.href="content.html"
        }
    
        else {
            alert("Type the correct letter. If you have typed the correct letter, type the correct letter at upper case!");
            window.location.href="index.html"
        }
}

Welcome();
