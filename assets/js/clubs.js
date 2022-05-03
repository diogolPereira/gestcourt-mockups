
var API_URL = 'https://run.mocky.io/v3/c7e62026-0d70-46ac-8d00-a4501eab3973';


async function fetchClubs() {
    const reponseApi = await fetch(API_URL);
    const body = await reponseApi.json();
    return body.data;
}

function insertRow(id,element,table) {

    elementStr =
        "<tr id=club-"+id+"><td>" +
        element.name +
        "</td>" +

        "<td>" +
        element.address +
        "</td>" +

        '<td class="text-center"> <button type="button" id="remove_club-' + id + '" class="remove-btn btn btn-danger">Delete</button></td></tr>';

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
    thAddress.textContent='Localidade'
    tr.appendChild(thAddress)

    const thActions = document.createElement('th');
    tr.appendChild(thActions)


    thead.appendChild(tr)
    table.appendChild(thead)
    table.appendChild(tbody)

}

function removeRow(id){
    document.getElementById("club-"+id).remove();
    console.log("Removed 1 LINE")
}
function updateLabel(total,labelTotals){
    labelTotals.textContent="Total:"+total;
}
$(document).ready(async function () {
    var total = 0;
    var data = {};
    //get table and div container of table
    const table = document.getElementById("club-table");
    const tableContainer = document.getElementById("table-container");
    const labelTotals = document.createElement('label');
    labelTotals.classList.add('text-muted');

    data = await fetchClubs();
    //Get all clubs enabled
    total = data.length;
    createHeaderTable(table)
    data.forEach(function (element,index) {
        //add row
        insertRow(index,element,table);
        //event delete
        $("#remove_club-"+index).click(function () {
            removeRow(index);
            total--
            updateLabel(total,labelTotals)
        })
    });
    //create label for totals

    updateLabel(total,labelTotals)
    tableContainer.appendChild(labelTotals)
});
