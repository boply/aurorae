<script lang="ts">

    import Counter from "../components/Counter.svelte";

    export let product: any;

</script>

<div class="card bg-base-100 shadow-xl max-h-96 w-96 box">
    <figure class="h-1/2"><img src={product.thumbnail} alt="picture" /></figure>
    <div class="card-body">
      <h2 class="card-title">{product.title}</h2>
      <p>{product.description}</p>
      <div class="card-actions justify-end flex flex-row">
        <Counter/>
        <button class="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>