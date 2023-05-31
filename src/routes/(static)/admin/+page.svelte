<script lang="ts">

import { user, aid } from '$firebase';
const options = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

const addProduct = () => {
  
  var name = document.getElementById("prodName").value;
  var description = document.getElementById("prodDescrip").value;
  var price = document.getElementById("prodPrice").value;

  const options = {
      method: 'POST',
  };
  fetch( 'http://localhost:8093/api/products/add/' + name + "/" + price + "/" + description + "/1" , options )
  .then(response => response.json())
  .then(data => {console.log(data);});


  document.getElementById("prodName").value = "";
  document.getElementById("prodDescrip").value = "";
  document.getElementById("prodPrice").value = "";


}







function removeProduct() {
  // java api creation
}

function updateProduct() {
  // java api creation
}

const getContacts = () => {

// Fetch data from API
fetch('http://localhost:8093/api/contact/')
.then(response => response.json())
.then(data => {

    let contactsData = data;
    console.log(contactsData);
    
    // get row elements
    let nameRow = document.getElementById("nameRows");
    let idRow = document.getElementById("idRows");
    let companyRow = document.getElementById("companyRows");
    let messageRow = document.getElementById("messageRows");
    let emailRow = document.getElementById("emailRows");
    
    // clear table contents
    for (let j = 0; j < contactsData.length; j++){    

        nameRow.innerHTML = " ";
        idRow.innerHTML = " ";
        companyRow.innerHTML = " ";
        messageRow.innerHTML = " ";
        emailRow.innerHTML = " ";

    }

    // add table contents
    for (let i = 0; i < contactsData.length; i++){  

        let header = document.createElement("th");
        header.setAttribute("id", i);
        header.innerHTML = contactsData[i].name;
        nameRow.appendChild(header);

        let newIdRow = document.createElement("td");
        newIdRow.setAttribute("id", i);
        newIdRow.innerHTML = "id: " + contactsData[i].id;
        idRow.appendChild(newIdRow);

        let newCompanyRow = document.createElement("td");
        newCompanyRow.setAttribute("id", i);
        newCompanyRow.innerHTML = contactsData[i].company;
        companyRow.appendChild(newCompanyRow);


        let newMessageRow = document.createElement("td");
        newMessageRow.setAttribute("id", i);
        newMessageRow.innerHTML = contactsData[i].message;
        messageRow.appendChild(newMessageRow);  

        let newEmailRow = document.createElement("td");
        newEmailRow.setAttribute("id", i);
        newEmailRow.innerHTML = contactsData[i].email;
        emailRow.appendChild(newEmailRow);  
    }

});
}

const showProducts = () => {
  fetch('http://localhost:8093/api/products/getProducts')
.then(response => response.json())
.then(data => {
  console.log(data["data"]);
  let table = document.getElementById("productsTable");
  for (let i =0;i<data["data"].length;i++) {
    var row = table.insertRow(1);
    var prodID = row.insertCell(0);
    var name = row.insertCell(1);
    var price = row.insertCell(2);
    var description = row.insertCell(3);
    var instock = row.insertCell(4);
    prodID.innerText = data["data"][i]["ID"];
    name.innerText = data["data"][i]["NAME"];
    price.innerText = data["data"][i]["PRICE"];
    description.innerText = data["data"][i]["DESCRIPTION"];
    if (data["data"][i]["INSTOCK"] == "0") {
      instock.innerText = "no";
    } else {
      instock.innerText = "yes";
    }
    


  }
})

}
showProducts();

</script>


<div class="flex min-h-screen w-full flex-col md:flex-row gap-10 px-8 py-24 justify-evenly">
  
  <div class="w-full md:w-1/3 flex flex-col h-fit gap-8 self-center md:self-start">

    <!-- Add Products -->
    <div class="collapse bg-base-100 shadow-xl rounded-lg p-4 self-center md:self-start h-fit w-full">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium text-center">
        Add Product Panel
      </div>
      <div class="collapse-content flex flex-col gap-6">
          <div class="form-control w-full">
              <label class="label">
              <span class="label-text">Product Name</span>
              </label>
              <input id = "prodName" type="text" placeholder="Ex: Induced Pluripotent Stem Cells, Normal" class="input input-bordered w-full" />
          </div>
          <div class="form-control">
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <textarea id = "prodDescrip" class="textarea textarea-bordered h-24" placeholder="Product Description"></textarea>
            </div>
            <div class="form-control w-full">
              <label class="label">
              <span class="label-text">Price ($)</span>
              </label>
              <input id="prodPrice" type="number" placeholder="Ex: 100.00" class="input input-bordered w-full" />
          </div>
          <input type="button" value="Add Product" class="btn btn-primary my-4 w-full" on:click={addProduct}>
      </div>
    </div>

    <!-- Remove Product -->
    <div class="w-full bg-base-100 shadow-xl rounded-lg p-8 self-center md:self-start">
      <input type="button" value="Remove Product" class="btn btn-primary h-full w-full" on:click={removeProduct}>
    </div>

    


</div>


  <!-- Table -->
  <div class="overflow-x-auto w-full md:w-2/3 self-center md:self-start bg-base-100 shadow-xl rounded-lg">
    <table id="productsTable" class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>In Stock?</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </table>
  </div>

  <!-- View Contact Forms-->
  <div class="collapse bg-base-100 shadow-xl rounded-lg p-4 self-center md:self-start h-full w-full">
    <input type="checkbox"/>
    <div class="collapse-title text-xl font-medium text-center">
      Contacts
    </div>
    <div class="collapse-content flex flex-col gap-6">
      <button class="btn" on:click={getContacts}>Get Latest Data</button>
      <table>

        <tr id="nameRows">
        </tr>
      
        <tr id="idRows">
        </tr>
      
        <tr id="companyRows">
        </tr>
      
        <tr id="messageRows">
        </tr>
      
        <tr id="emailRows">
        </tr>
      
      </table>
    </div>
  </div>
</div>