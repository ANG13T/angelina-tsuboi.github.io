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
        let atomicNumber = child.querySelector(".at_num").innerHTML;
        let symbol = child.querySelector(".symbol").innerHTML;

        //modal stuff
        let modText = document.getElementById("modalText");
        modText.innerHTML= atomicNumber;

        let atomText = document.getElementById("atomStuff");
        atomText.innerHTML = symbol;
        
    })
    // data-toggle="modal" data-target="#elementModal"
    periodArry[i].setAttribute("data-toggle", "modal");
    periodArry[i].setAttribute("data-target", "#elementModal");
}

let periodicRows = document.getElementsByClassName("periodic-row");

for(let i = 0; i < periodicRows.length - 3; i++){
    periodicRows[i].setAttribute("period", i + 1)
}
