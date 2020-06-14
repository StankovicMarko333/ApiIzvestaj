let tbody = document.getElementById("tBody");

 function Trazi(){
  
    tbody.innerHTML = "";




    
     CreateColumn();

}

CreateColumn();


function CreateColumn(){ 
    // let body = document.getElementById("tBody");
    
    let from_date = document.getElementById("from_date").value;
    console.log(from_date);
    let to_date = document.getElementById("to_date").value;
    console.log(to_date);
    


    fetch("/api/allTimesEmps")
        .then(resp => resp.json())
        .then(elements => {
            elements.forEach(emp => {
                

            let tr = document.createElement("tr");
            tbody.appendChild(tr);
            
            let dOd = document.createElement("td");
            tr.appendChild(dOd);
            dOd.textContent = emp.Date;
            dOd.className = "thTable";
            
            let dDo = document.createElement("td");
            tr.appendChild(dDo);
            dDo.textContent = emp.Time;
            dDo.className = "thTable";
            
            let name = document.createElement("td");
            tr.appendChild(name);
            name.textContent = emp.Name + " " +  emp.Surname;
            name.className = "thTable";
            
            let sluzba = document.createElement("td");
            tr.appendChild(sluzba);
            sluzba.textContent = emp.Sector;
            sluzba.className = "thTable";
            
            let JBMG = document.createElement("td");
            tr.appendChild(JBMG);
            JBMG.textContent = emp.Id;
            JBMG.className = "thTable";
            
            let PIC = document.createElement("td");
            tr.appendChild(PIC);
            var image = new Image();
            image.src = emp.Pic
            // PIC.textContent = emp.Pic;
            PIC.className = "thTable";
            PIC.appendChild(image);

            });
        })
    }






// function CreateColumn(){

// let body = document.getElementById("tBody");

// let tr = document.createElement("tr");
// body.appendChild(tr);

// let dOd = document.createElement("td");
// tr.appendChild(dOd);
// dOd.textContent = "dat od";
// dOd.className = "thTable";

// let dDo = document.createElement("td");
// tr.appendChild(dDo);
// dDo.textContent = "dat do";
// dDo.className = "thTable";

// let name = document.createElement("td");
// tr.appendChild(name);
// name.textContent = "Ime i prez";
// name.className = "thTable";

// let sluzba = document.createElement("td");
// tr.appendChild(sluzba);
// sluzba.textContent = "dat od";
// sluzba.className = "thTable";

// let JBMG = document.createElement("td");
// tr.appendChild(JBMG);
// JBMG.textContent = "dat od";
// JBMG.className = "thTable";

// let PIC = document.createElement("td");
// tr.appendChild(PIC);
// PIC.textContent = "dat od";
// PIC.className = "thTable";

// }

function Delete(){
    window.location.reload();
}

function Print(){
   var divToPrint=document.getElementById("divTable");
   newWin= window.open("");
   newWin.document.write(divToPrint.outerHTML);
   newWin.print();
   newWin.close();
}









let team;
    team = document.getElementById("team");

let op;
let arrayTitle = new Array(10);
let i=0;

let employe;
    employe = document.getElementById("employe");
    
let op2;
let arrayEmploye = new Array(1000);
let j=0;




function loadPosition(){  
    fetch("/api/allEmps")
        .then(resp => resp.json())
        .then(elements => {
            elements.forEach(emp => {

                op = document.createElement("option");
                op.value = emp.Title;
                op.text = emp.Title; 
                arrayTitle[i] = emp.Title;
                i++;
                team.appendChild(op);




                op2 = document.createElement("option");
                op2.value = emp.Name + " " +  emp.Surname;
                op2.text = emp.Name + " " + emp.Surname; 
                arrayEmploye[j] = emp.Name + " " + emp.Surname;
                j++;
                employe.appendChild(op2);



            });
        })
    }
loadPosition();









