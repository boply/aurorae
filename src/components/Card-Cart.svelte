<script lang="ts">

    import Counter from "$components/Counter.svelte";

    export let product: any;
    export let item: any;

    let counter: number = 1;

    async function post() {
      console.log(counter)
    }

</script>

<div class="card bg-base-100 shadow-xl max-h-96 h-fit w-full box">
    <figure class="h-4 w-full"><img src={product.THUMBNAIL} alt="picture" /></figure>
    <div class="card-body">
      <button class="btn btn-sm btn-circle btn-secondary absolute -right-2 -top-2">X</button>
      <h2 class="card-title">{product.ITEM}</h2>
      <p>{product.DESCRIPTION}</p>
      <div class="card-actions justify-end flex flex-row">
        <Counter/>
        <!-- <button class="btn btn-primary">Buy Now</button> -->
      </div>
    </div>
  </div>