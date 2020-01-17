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
        console.log("Clicked", event.target);
        console.log("First Child", event.target.childNodes[1])
        let child = event.target.childNodes[1];
        child.style.backgroundColor = "red";
        let textWeWant = child.querySelector(".at_num").innerHTML;
        let otherTextWeWant = child.querySelector(".symbol").innerHTML;

        let modText = document.getElementById("modalText");
        

        modText.innerHTML= textWeWant;

        let atomText = document.getElementById("atomStuff");
        atomText.innerHTML = otherTextWeWant;
        
    })
    // data-toggle="modal" data-target="#elementModal"
    periodArry[i].setAttribute("data-toggle", "modal");
    periodArry[i].setAttribute("data-target", "#elementModal");
}

