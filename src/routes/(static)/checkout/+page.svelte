<script lang="ts">

    function Checkout () {

    }

</script>

<div class="flex flex-col min-h-screen w-full py-24 px-8 lg:px-24">

    <div class="flex flex-col gap-6 bg-base-100 shadow-xl rounded-lg p-4 self-center w-full lg:w-1/2">
        <div class="form-control w-full">
            <label class="label">
            <span class="label-text">Card Number</span>
            </label>
            <input type="text" class="input input-bordered w-full" placeholder="*** *** ****" />
        </div>
        <div class="form-control">
            <label class="label">
              <span class="label-text">Address</span>
            </label>
            <input class="input input-bordered w-full" placeholder="Product Description" />
          </div>
          <div class="form-control w-full">
            <label class="label">
            <span class="label-text">Price ($)</span>
            </label>
            <input type="number" placeholder="Ex: 100.00" class="input input-bordered w-full" />
        </div>
        <input type="button" value="Checkout" class="btn btn-primary my-4 w-full" on:click={Checkout}>
    </div>

</div>