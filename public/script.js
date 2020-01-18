$(".elementCell").click((e) => {
    console.log("This is working")
    $(e.target).css("color", "red")
    
    // console.log(e.target.children[0])
})

let periodicElem = document.getElementsByClassName("elementCell");
let periodArry = Array.from(periodicElem);


for(let i = 0; i < periodArry.length; i++)
{
    periodArry[i].addEventListener("click", (event)=>{
        console.log("First Child", event.target.childNodes[1])
        let child = event.target.childNodes[1];
        child.style.backgroundColor = "red";
        //variables
        let atomicNumber = child.querySelector(".at_num").innerHTML;
        let elementName = child.querySelector(".at_details").innerHTML.match(/\w+/);
        let symbol = child.querySelector(".symbol").innerHTML;
        let atomicMass = child.querySelector(".at_details").innerHTML.match(/\d+\W\d+/);
        // let period = child.querySelector("")

        //modal stuff
        let elementSymbolText = document.getElementById("elementSymbol");
        elementSymbolText.innerHTML= "Symbol: " + symbol;

        let atomicNumberText = document.getElementById("atomicNumber");
        atomicNumberText.innerHTML = "Atomic Number: " + atomicNumber;

        let elementNameText = document.getElementById("elementName");
        elementNameText.innerHTML = "Element Name: " + elementName.toString().toUpperCase();

        let atomicMassText = document.getElementById("atomicMass");
        atomicMassText.innerHTML = "Atomic Mass: " + atomicMass;

        let protonsText = document.getElementById("protons");
        protonsText.innerHTML = "Protons: " + atomicNumber;

        let neutronsText = document.getElementById("neutrons");
        neutronsText.innerHTML = "Neutrons: " + Math.round(atomicMass - atomicNumber);

        let electronsText = document.getElementById("electrons");
        electronsText.innerHTML = "Electrons: ";
        
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
