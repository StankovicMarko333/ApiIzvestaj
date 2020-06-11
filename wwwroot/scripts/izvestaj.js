


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