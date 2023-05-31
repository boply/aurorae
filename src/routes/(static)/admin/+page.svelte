<script lang="ts">

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

  /** @type {import('./$types').PageData} */
  export let data: any;
  let products = data.products.data;
  let contacts = data.contacts;

  console.log(products)
  console.log("------")
  console.log(contacts)

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


  
</script>


<div class="flex flex-col min-h-screen w-full gap-10 px-8 py-24">
  
  <div class="flex w-full h-fit flex-col md:flex-row gap-8">
  
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
          {#each products as product}
          <tr>
            <td>{product.ID}</td>
            <td>{product.NAME}</td>
            <td>{product.DESCRIPTION}</td>
            <td>{product.PRICE}</td>
            <td>{product.INSTOCK}</td>
          </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>

  <!-- View Contact Forms-->
  <div class="collapse bg-base-100 shadow-xl rounded-lg p-4 self-center md:self-start h-full w-full">
    <input type="checkbox"/>
    <div class="collapse-title text-xl font-medium text-center">
      Contacts
    </div>
    <div class="collapse-content flex flex-col gap-6">
      <button class="btn btn-primary">Get Latest Data</button>
      <table id="productsTable" class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th>Email</th>
            <th>Company</th>
            <th>Name</th>
            <th>Message</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {#each contacts as contact}
          <tr>
            <td>{contact.email}</td>
            <td>{contact.company}</td>
            <td>{contact.name}</td>
            <td>{contact.message}</td>
          </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>