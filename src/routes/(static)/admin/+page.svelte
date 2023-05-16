<script lang="ts">

function post() {

}

</script>

<div class="flex flex-col w-full h-full px-8 py-24">
    <div class ="flex flex-col w-96 md:w-1/2 self-center gap-6">
      <div class="form-control w-full">
          <label class="label">
          <span class="label-text">Product name</span>
          </label>
          <input type="text" placeholder="Ex: Induced Pluripotent Stem Cells, Normal" class="input input-bordered w-full" />
      </div>
      <div class="form-control">
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <textarea class="textarea textarea-bordered h-24" placeholder="Product Decription"></textarea>
        </div>
        <div class="form-control w-full">
          <label class="label">
          <span class="label-text">Price ($)</span>
          </label>
          <input type="number" placeholder="Ex: 100.00" class="input input-bordered w-full" />
      </div>
      <input type="button" value="Submit" class="btn btn-primary my-4 w-full" on:click={post}>
  </div>
</div>