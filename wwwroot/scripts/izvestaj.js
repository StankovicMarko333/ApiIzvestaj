


function Trazi(){
    // window.location.reload();   pre ponovne pretrage potrebno je najpre isprazniti tabelu
    CreateColumn();
    CreateColumn();
    CreateColumn();
}

function CreateColumn(){

let body = document.getElementById("tBody");

let tr = document.createElement("tr");
body.appendChild(tr);

let dOd = document.createElement("td");
tr.appendChild(dOd);
dOd.textContent = "dat od";
dOd.className = "thTable";

let dDo = document.createElement("td");
tr.appendChild(dDo);
dDo.textContent = "dat do";
dDo.className = "thTable";

let name = document.createElement("td");
tr.appendChild(name);
name.textContent = "Ime i prez";
name.className = "thTable";

let sluzba = document.createElement("td");
tr.appendChild(sluzba);
sluzba.textContent = "dat od";
sluzba.className = "thTable";

let JBMG = document.createElement("td");
tr.appendChild(JBMG);
JBMG.textContent = "dat od";
JBMG.className = "thTable";

let PIC = document.createElement("td");
tr.appendChild(PIC);
PIC.textContent = "dat od";
PIC.className = "thTable";

}

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
let niz = new Array(10);
let i=0;


// let op = document.createElement("option");
// op.value = "doktor";
// op.text = "Doktor";
// team.appendChild(op);

function loadPosition(){  
    fetch("/api/allEmps")
        .then(resp => resp.json())
        .then(elements => {
            elements.forEach(emp => {

                op = document.createElement("option");
                op.value = emp.Title;
                op.text = emp.Title; 
                niz[i] = emp.Title;
                i++;
                team.appendChild(op);
            });
        })
    }
loadPosition();

        //         LiItem = document.createElement("li");
        //         LiItem.className = 'newEmp'
        //         InItem = document.createElement("input");

        //         InItem.type = 'submit';
        //         InItem.value = emp.Name + " " + emp.Surname + " " + emp.Id + " " + emp.Sector;
        //         InItem.addEventListener('click', function () {
        //             document.getElementById('InId').value = emp.Id;
        //             document.getElementById('InCode').value = emp.Code;
        //             document.getElementById('InName').value = emp.Name;
        //             document.getElementById('InSurname').value = emp.Surname;
        //             document.getElementById('InTitle').value = emp.Title;
        //             document.getElementById('InSector').value = emp.Sector;
        //             document.getElementById('InKey').value = emp.Key;

        //         });
        //         LiItem.appendChild(InItem);
        //         document.getElementById('empList').appendChild(LiItem)
        //     });
        // })
