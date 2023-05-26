<script lang="ts">

import { user, aid } from '$firebase';

function addProduct() {
  // java api creation
}

function removeProduct() {
  // java api creation
}

function updateProduct() {
  // java api creation
}

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
              <input type="text" placeholder="Ex: Induced Pluripotent Stem Cells, Normal" class="input input-bordered w-full" />
          </div>
          <div class="form-control">
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <textarea class="textarea textarea-bordered h-24" placeholder="Product Description"></textarea>
            </div>
            <div class="form-control w-full">
              <label class="label">
              <span class="label-text">Price ($)</span>
              </label>
              <input type="number" placeholder="Ex: 100.00" class="input input-bordered w-full" />
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
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>In Stock?</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center space-x-3">
                <div class="font-bold">Hart Hagerty erag sd fg sdfg fasdfasdfasdf</div>
            </div>
          </td>
          <td>
            stem cells are blah blah blah...
          </td>
          <td>$1000.00</td>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</div>