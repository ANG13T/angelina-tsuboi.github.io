$(".elementCell").click((e) => {
    console.log("This is working")
    $(e.target).css("color", "red")
})

$(".cell:nth-child(1)").attr("valenceElectrons", 1);
$(".cell:nth-child(1)").attr("charge", 1);

$(".cell:nth-child(2)").attr("valenceElectrons", 2);
$(".cell:nth-child(2)").attr("charge", 2);

$(".cell:nth-child(13)").attr("valenceElectrons", 3);
$(".cell:nth-child(13)").attr("charge", 3);

$(".cell:nth-child(14)").attr("valenceElectrons", 4);
$(".cell:nth-child(14)").attr("charge", 4);

$(".cell:nth-child(15)").attr("valenceElectrons", 5);
$(".cell:nth-child(15)").attr("charge", -3);

$(".cell:nth-child(16)").attr("valenceElectrons", 6);
$(".cell:nth-child(16)").attr("charge", -2);

$(".cell:nth-child(17)").attr("valenceElectrons", 7);
$(".cell:nth-child(17)").attr("charge", -1);

$(".cell:nth-child(18)").attr("valenceElectrons", 8);
$(".cell:nth-child(18)").attr("charge", 0);


let periodicElem = document.getElementsByClassName("elementCell");
let periodArry = Array.from(periodicElem);

$("input").submit((e) => {
    search();
})

$("#searchButton").click((e) => {
    e.preventDefault();
    search();
})

function search(){
    var inputText = $("input").val();

    if(inputText !== ""){
        for(var i = 0; i < periodArry.length; i++){
            // let child = periodArry[i].childNodes[1];
            // let elementName = child.querySelector(".at_details").innerHTML.match(/\w+/);
            var child = periodArry[i].childNodes[1];
            var symbol = child.querySelector(".symbol").innerHTML
            var name = periodArry[i].childNodes[1].querySelector(".at_details").innerHTML.match(/\w+/)[0];
            if(name.startsWith(inputText)){
                console.log(name);
                console.log(child);
                child.style.border = "0.3rem solid #00FFFF"
                console.log(symbol)
            }else{
                child.style.border = "none"
            }
        }
    } else{
        alert("Invalid Input!")
    }
}


for(let i = 0; i < periodArry.length; i++)
{
    periodArry[i].addEventListener("click", (event)=>{
        console.log("First Child", event.target.childNodes[1])
        let child = event.target.childNodes[1];
        //variables
        let atomicNumber = child.querySelector(".at_num").innerHTML;
        let elementName = child.querySelector(".at_details").innerHTML.match(/\w+/);
        let symbol = child.querySelector(".symbol").innerHTML;
        let atomicMass = child.querySelector(".at_details").innerHTML.match(/\d+\W\d+/);
        let energyLevel = event.target.parentNode.attributes[1].value;
        let valence = event.target.attributes[1].value;
        let charge = event.target.attributes[2].value;
        let family = child.attributes[1].value;
        console.log(family)

        //modal stuff
        let elementSymbolText = document.getElementById("elementSymbol");
        elementSymbolText.innerHTML= "<b>Symbol: </b>" + symbol;

        let atomicNumberText = document.getElementById("atomicNumber");
        atomicNumberText.innerHTML = "<b>Atomic Number: </b>" + atomicNumber;

        let elementNameText = document.getElementById("elementName");
        elementNameText.innerHTML = "<b>Element Name: </b>" + elementName.toString().toUpperCase();

        let atomicMassText = document.getElementById("atomicMass");
        atomicMassText.innerHTML = "<b>Atomic Mass: </b>" + atomicMass;

        let protonsText = document.getElementById("protons");
        protonsText.innerHTML = "<b>Protons: </b>" + atomicNumber;

        let neutronsText = document.getElementById("neutrons");
        neutronsText.innerHTML = "<b>Neutrons: </b>" + Math.round(atomicMass - atomicNumber);

        energyLevel = energyLevel % 1 == 0 ? energyLevel : "depends"
        let energyLevelText = document.getElementById("energyLevel");
        energyLevelText.innerHTML = "<b>Energy Level: </b>" + energyLevel;
        
        valence = valence % 1 == 0 ? valence : "depends"
        let valenceText = document.getElementById("valence");
        valenceText.innerHTML = "<b>Valence Electrons: </b>" + valence;

        if(charge == 4){
            charge = "+/- " + 4
        } else if(charge > 0){
            charge = "+" + charge
        }

        charge = charge % 1 == 0 ? charge : "depends";
        let chargeText = document.getElementById("charge");
        chargeText.innerHTML = "<b>Charge: </b>" + charge

        charge = charge % 1 == 0 ? charge : 0;
        let electronsText = document.getElementById("electrons");
        electronsText.innerHTML = "<b>Electrons: </b>" + (atomicNumber - charge);

        let familyNameText = document.getElementById("group");
        familyNameText.innerHTML = "<b>Family: </b>" + family;

    })
    // data-toggle="modal" data-target="#elementModal"
    periodArry[i].setAttribute("data-toggle", "modal");
    periodArry[i].setAttribute("data-target", "#elementModal");
}

let periodicRows = document.getElementsByClassName("periodic-row");

//setting the period for every element
for(let i = 0; i < periodicRows.length - 3; i++){
    periodicRows[i].setAttribute("period", i + 1)
}

