let button = document.querySelector("#btn")
button.addEventListener("click", function() {
  let pos = document.getElementById("future-table").rows.length + 1;
  let tr = document.createElement("tr");
  tr.id = "row_" + pos;
  let td1 = document.createElement("td");
  td1.textContent = document.getElementById('title').value;
  let td2 = document.createElement("td");
  td2.textContent = document.getElementById('decription').value;
  let td3 = document.createElement("td");
  td3.textContent = document.getElementById('batch').value;
  let td4 = document.createElement("td");
  td4.textContent = document.getElementById('date').value;
  let td5 = document.createElement("td");
  td5.innerHTML = "<button id='del' onclick='deleteRow(`" + tr.id + "`)'> delete</button>";
  document.getElementById('title').value = '';
  document.getElementById('decription').value = ''; 
  document.getElementById('batch').value = '';
  document.getElementById('date').value = '';
  tr.append(td1);
  tr.append(td2);
  tr.append(td3);
  tr.append(td4);
  let d = new Date();
  let b = new Date(td4.textContent)
  if(d<b){
    tr.append(td5);
  }
  if (b.getFullYear() <= d.getFullYear() && b.getMonth() <= d.getMonth() && b.getDate() < d.getDate()) {
    document.getElementById('past-table').appendChild(tr);
  }
  else {
    document.getElementById('future-table').appendChild(tr);
  }
});
function deleteRow(id) {
  document.getElementById(id).style.display = "none"
}
function showHideContent(type) {
  if (type == 'form') {
    document.getElementById('assignment-form').style.display = 'block';
    document.getElementById('past-assignment').style.display = 'none';
    document.getElementById('future-assignment').style.display = 'none';
    document.getElementById('add').style.backgroundColor = 'orange';
    document.getElementById('past').style.backgroundColor = 'lightblue';
    document.getElementById('future').style.backgroundColor = 'lightblue';
  }
  else if (type == 'past') {
    document.getElementById('assignment-form').style.display = 'none';
    document.getElementById('past-assignment').style.display = 'block';
    document.getElementById('future-assignment').style.display = 'none';
    document.getElementById('add').style.backgroundColor = 'lightblue';
    document.getElementById('past').style.backgroundColor = 'orange';
    document.getElementById('future').style.backgroundColor = 'lightblue';
  }
  else {
    document.getElementById('assignment-form').style.display = 'none';
    document.getElementById('past-assignment').style.display = 'none';
    document.getElementById('future-assignment').style.display = 'block';
    document.getElementById('add').style.backgroundColor = 'lightblue';
    document.getElementById('past').style.backgroundColor = 'lightblue';
    document.getElementById('future').style.backgroundColor = 'orange';
  }
}


