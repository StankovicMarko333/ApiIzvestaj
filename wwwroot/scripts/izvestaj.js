let tbody = document.getElementById("tBody");

function Trazi() {

    tbody.innerHTML = "";


    CreateColumn();


}

CreateColumn();



   let date = new Date();
   
   
    document.getElementById("from_date").value = date.toLocaleDateString('en-CA');


    document.getElementById("to_date").value = date.toLocaleDateString('en-CA');


function CreateColumn() {


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
                name.textContent = emp.Name + " " + emp.Surname;
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




function Delete() {
    tbody.innerHTML = "";
}

function Print() {
    var divToPrint = document.getElementById("divTable");
    newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
}















///Pouleinting employee list


let employe = document.getElementById("employe");

let worker;
let arrayEmploye = new Array();

worker = document.createElement("option");
worker.value = "AllEmps";
worker.text = "Svi Zaposljeni";
employe.appendChild(worker);

function loadEmp() {
    fetch("/api/allEmps")
        .then(resp => resp.json())
        .then(elements => {
            elements.forEach(emp => {

                worker = document.createElement("option");
                worker.value = emp.Name + " " + emp.Surname;
                worker.text = emp.Name + " " + emp.Surname;
                arrayEmploye.shift(emp.Name + " " + emp.Surname);
                employe.appendChild(worker);


            });
        })
}
loadEmp();



///Pouleinting employee sector list



let sector = document.getElementById("sector");

let optionSector;
let sectorArray = new Array();

optionSector = document.createElement("option");
optionSector.value = "AllSectors";
optionSector.text = "Sve sluzbe";
sector.appendChild(optionSector);



function loadSector() {
    try {

        fetch("/api/allSec")
            .then(resp => resp.json())
            .then(elements => {
                elements.forEach(emp => {
                    optionSector = document.createElement("option");
                    optionSector.value = emp;
                    optionSector.text = emp;
                    sector.appendChild(optionSector);
                });
            })


    } catch (err) {
        console.log(err.message);
    }

}


loadSector();









