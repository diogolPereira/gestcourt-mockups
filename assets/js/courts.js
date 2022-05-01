
var API_URL = 'https://run.mocky.io/v3/236b96f3-09a9-4cf4-a082-60020ac16aa5';


async function fetchCustomers() {
    const reponseApi = await fetch(API_URL);
    const body = await reponseApi.json();
    return body.data;
}

function insertRow(id,element,table) {

    elementStr =
        "<tr id=court-"+id+"><td>" +
        element.name +
        "</td>" +

        "<td>" +
        element.address +
        "</td>" +

        "<td>" +
        element.price +
        "</td>" +
        '<td class="text-center"> <button type="button" id="remove_court-' + id + '" class="remove-btn btn btn-danger">Delete</button></td></tr>';

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
    thAddress.textContent='Localização'
    tr.appendChild(thAddress)

    const thPrice = document.createElement('th');
    thPrice.textContent='Preço'
    tr.appendChild(thPrice)

    const thActions = document.createElement('th');
    tr.appendChild(thActions)


    thead.appendChild(tr)
    table.appendChild(thead)
    table.appendChild(tbody)

}

function removeRow(id){
    document.getElementById("court-"+id).remove();
    console.log("Removed 1 LINE")
}

$(document).ready(async function () {
    var data = {};
    //get table and div container of table
    const table = document.getElementById("customer-table");
    const tableContainer = document.getElementById("table-container");
    

    console.log(table)
   
    data = await fetchCustomers();

    createHeaderTable(table)
    data.forEach(function (element,index) {
        //add row
        insertRow(index,element,table);
        //event delete
        $("#remove_court-"+index).click(function () {
            removeRow(index);
        })
    });
    //create label for totals
    const labelTotals = document.createElement('label');
    labelTotals.classList.add('text-muted');
    labelTotals.textContent="Total:"+data.length;
    tableContainer.appendChild(labelTotals)
});
