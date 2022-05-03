
var API_URL = 'https://run.mocky.io/v3/3fc2bed7-3c64-491a-a16d-bb842f7623f8';


async function fetchEquipments() {
    const reponseApi = await fetch(API_URL);
    const body = await reponseApi.json();
    return body.data;
}

function insertRow(id,element,table) {

    elementStr =
        "<tr id=equipment-"+id+"><td>" +
        element.name +
        "</td>" +

        "<td>" +
        element.type +
        "</td>" +
        '<td class="text-center"> <button type="button" id="remove_equipment-' + id + '" class="remove-btn btn btn-danger">Delete</button></td></tr>';

    $(elementStr).appendTo(table);
    // $("td").addClass("text-center");
}


/* this function generate this 
<thead>
<tr>
  <th >Nome</th>
  <th >Localização</th>
  <th >Preço</th>
</tr>
</thead> 
<tbody></tbody>
*/

function createHeaderTable(table) {
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const tr = document.createElement('tr');

    const thName = document.createElement('th');
    thName.textContent='Nome'
    tr.appendChild(thName)

    const thAddress = document.createElement('th');
    thAddress.textContent='Tipo'
    tr.appendChild(thAddress)

    const thActions = document.createElement('th');
    tr.appendChild(thActions)


    thead.appendChild(tr)
    table.appendChild(thead)
    table.appendChild(tbody)

}

function removeRow(id){
    document.getElementById("equipment-"+id).remove();
    console.log("Removed 1 LINE")
}
function updateLabel(total,labelTotals){
    labelTotals.textContent="Total:"+total;
}
$(document).ready(async function () {
    var total = 0;
    var data = {};
    //get table and div container of table
    const table = document.getElementById("customer-table");
    const tableContainer = document.getElementById("table-container");
    const labelTotals = document.createElement('label');
    labelTotals.classList.add('text-muted');

    data = await fetchEquipments();
    total = data.length;
    createHeaderTable(table)
    data.forEach(function (element,index) {
        //add row
        insertRow(index,element,table);
        //event delete
        $("#remove_equipment-"+index).click(function () {
            removeRow(index);
            total--
            updateLabel(total,labelTotals)
        })
    });
    //create label for totals

    updateLabel(total,labelTotals)
    tableContainer.appendChild(labelTotals)
});
